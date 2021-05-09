---
sidebar: 'auto'
prev: './getting-start.md'
next: './external.md'
---

# 런타임

- [doc.deno.land](https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts)
  - 모든 런타임 함수 (Web APIs + Deno global) 문서
- [웹 플랫폼 APIs](#web-platform-apis): `fetch` 등
- [global Deno namespace: `lib.deno.ns.d.ts`](https://github.com/denoland/deno/blob/v1.9.2/cli/dts/lib.deno.ns.d.ts)
  - reading from files
  - opening TCP sockets
  - serving HTTP
  - executing subprocesses
  - [etc](https://doc.deno.land/https/raw.githubusercontent.com/denoland/deno/main/cli/dts/lib.deno.ns.d.ts)

## Stability

- `1.0`에선 `Deno` namespace 가 stable
- [unstable feature](https://doc.deno.land/https/raw.githubusercontent.com/denoland/deno/main/cli/dts/lib.deno.unstable.d.ts)
  - security review 가 끝나지 않았음
  - API 바뀔 수 있음
  - not ready for production
- [standard module](https://deno.land/std@0.95.0)
  - 특별한 플래그는 필요없지만 unstable 한 점 유의

```bash
# unstable 허용하기
deno run --unstable mod_which_uses_unstable_stuff.ts
```

## Program Lifecycle

- `load` 와 `unload`: 브라우저 라이프사이클과 호환
  - 전자는 비동기 후자는 동기
  - 이벤트를 취소할 수는 없음

:::details 예시

- `window.addEventListener` 사용
- `window.onload/window.onunload` 사용

```ts
// main.ts
import "./imported.ts";

const handler = (e: Event): void => {
  console.log(`got ${e.type} event in event handler (main)`);
};

window.addEventListener("load", handler);

window.addEventListener("unload", handler);

window.onload = (e: Event): void => {
  console.log(`got ${e.type} event in onload function (main)`);
};

window.onunload = (e: Event): void => {
  console.log(`got ${e.type} event in onunload function (main)`);
};

console.log("log from main script");
```

```ts
// imported.ts
const handler = (e: Event): void => {
  console.log(`got ${e.type} event in event handler (imported)`);
};

window.addEventListener("load", handler);
window.addEventListener("unload", handler);

window.onload = (e: Event): void => {
  console.log(`got ${e.type} event in onload function (imported)`);
};

window.onunload = (e: Event): void => {
  console.log(`got ${e.type} event in onunload function (imported)`);
};

console.log("log from imported script");
```

```bash
$ deno run main.ts
log from imported script
log from main script
got load event in event handler (imported)
got load event in event handler (main)
got load event in onload function (main)
got unload event in event handler (imported)
got unload event in event handler (main)
got unload event in onunload function (main)
```

- `window.addEventListener`는 다 실행
- `window.onload` 는 `imported.ts`에서 override
:::

## Permission APIs

### Permission descriptors

```ts
// --allow-read=/foo/bar. 
const desc = { name: "read", path: "/foo/bar" } as const;

// Global write permission.
const desc1 = { name: "write" } as const;

// Write permission to `$PWD/foo/bar`.
const desc2 = { name: "write", path: "foo/bar" } as const;

// Global net permission.
const desc3 = { name: "net" } as const;

// Net permission to 127.0.0.1:8000.
const desc4 = { name: "net", host: "127.0.0.1:8000" } as const;

// High-resolution time permission.
const desc5 = { name: "hrtime" } as const;
```

### Query Permissions

```ts
// deno run --allow-read=/foo main.ts

const desc1 = { name: "read", path: "/foo" } as const;
console.log(await Deno.permissions.query(desc1));
// PermissionStatus { state: "granted" }

const desc2 = { name: "read", path: "/foo/bar" } as const;
console.log(await Deno.permissions.query(desc2));
// PermissionStatus { state: "granted" }

const desc3 = { name: "read", path: "/bar" } as const;
console.log(await Deno.permissions.query(desc3));
// PermissionStatus { state: "prompt" }
```

### Permission states

- granted (by CLI)
- prompt (default / have not granted)
- denied (explicitly refused)

### Permission strength

- [위의 예시](#query-permissions)에서 이어지는 내용
- `desc1` is [stronger than](https://www.w3.org/TR/permissions/#ref-for-permissiondescriptor-stronger-than)
  `desc2`
  - If desc1 queries to `{ state: "granted" }` then so must desc2.
  - If desc2 queries to `{ state: "denied" }` then so must desc1.

```ts
const desc1 = { name: "write" } as const;
// is stronger than
const desc2 = { name: "write", path: "/foo" } as const;

const desc3 = { name: "net", host: "127.0.0.1" } as const;
// is stronger than
const desc4 = { name: "net", host: "127.0.0.1:8000" } as const;
```

### Request Permissions

```ts
// deno run main.ts

const desc1 = { name: "read", path: "/foo" } as const;
const status1 = await Deno.permissions.request(desc1);
// ⚠️ Deno requests read access to "/foo". Grant? [g/d (g = grant, d = deny)] g
console.log(status1);
// PermissionStatus { state: "granted" }

const desc2 = { name: "read", path: "/bar" } as const;
const status2 = await Deno.permissions.request(desc2);
// ⚠️ Deno requests read access to "/bar". Grant? [g/d (g = grant, d = deny)] d
console.log(status2);
// PermissionStatus { state: "denied" }
```

- The request for `desc1` was granted
  - so its new status is returned
  - execution will continue as if `--allow-read=/foo was specified` on the CLI.
- The request for `desc2` was denied
  - so its permission state is downgraded from "prompt" to "denied"

### Revoke permissions

- Downgrade a permission from "granted" to "prompt".

```ts
// deno run --allow-read=/foo main.ts

const desc = { name: "read", path: "/foo" } as const;
console.log(await Deno.permissions.revoke(desc));
// PermissionStatus { state: "prompt" }
```

- cli 에서 granted 된 permission 의 partial 은 revoked 안됨.

```ts
// deno run --allow-read=/foo main.ts

const desc = { name: "read", path: "/foo/bar" } as const;
console.log(await Deno.permissions.revoke(desc));
// PermissionStatus { state: "granted" }
```

- Specifying `--allow-read=/foo,/bar` on the CLI initializes this set to

```json
[
  { name: "read", path: "/foo" },
  { name: "read", path: "/bar" },
];
```

- Granting `{ name: "write", path: "/foo" }` updates the set to

```json
[
  { name: "read", path: "/foo" },
  { name: "read", path: "/bar" },
  { name: "write", path: "/foo" },
];
```

```ts
// deno run --allow-read=/foo main.ts

const desc = { name: "read", path: "/foo/bar" } as const;
console.log(await Deno.permissions.revoke(desc)); // Insufficient.
// PermissionStatus { state: "granted" }

const strongDesc = { name: "read", path: "/foo" } as const;
await Deno.permissions.revoke(strongDesc); // Good.

console.log(await Deno.permissions.query(desc));
// PermissionStatus { state: "prompt" }
```

## Web Platform APIs

### `fetch` API

- [spec](https://fetch.spec.whatwg.org/)
- [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- cookie jar 없음
- 현재 origin 개념 없음
- `opaqueredirect` 대신 `basic`을 return

### `CustomEvent`, `EventTarget` and `EventListener`

- [spec](https://dom.spec.whatwg.org/#events)
- [mdn](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
- bubble 이 안됨 (deno 가 dom hierarchy 가 없어서임)

### Other APIs

- Blob
- Console
- FormData
- Performance
- setTimeout, setInterval, clearInterval
- Streams API
- URL
- URLSearchParams
- WebSocket

### 타입

- [shared globals](https://github.com/denoland/deno/blob/v1.9.2/cli/dts/lib.deno.shared_globals.d.ts)
- [window](https://github.com/denoland/deno/blob/v1.9.2/cli/dts/lib.deno.window.d.ts)
- [worker](https://github.com/denoland/deno/blob/v1.9.2/cli/dts/lib.deno.worker.d.ts)

## HTTP Server APIs

> 1.9 이후, 아직 `unstable`

- port를 이미 사용하고 있을 수 있음 => try..catch
- `localhost` 에 bind, 원하지 않는 경우엔
  - `transport: "tcp"`: 명시적인 ip
  - `hostname` property: 호스트명

```ts
const server = Deno.listen({ port: 8080 });
```

- TLS (HTTPS)

```ts
const server = Deno.listenTls({
  port: 8443,
  certFile: "localhost.crt",
  keyFile: "localhost.key",
  alpnProtocols: ["h2", "http/1.1"],
});
```

### Handling connections

- `Deno.Listener` 가 return
  - which is an async iterable which yields up `Deno.Conn` connections
- `.accept()`
- `.close()`
- `try...catch` 사용 추천 (for production, HTTPS)

```ts
const server = Deno.listen({ port: 8080 });

for await (const conn of server) {
  // ...handle the connection...
}
```

```ts
const server = Deno.listen({ port: 8080 });

while (true) {
  const conn = server.accept();
  if (conn) {
    // ... handle the connection ...
  } else {
    // The listener has closed
    break;
  }
}
```

### Serving HTTP

```ts
const server = Deno.listen({ port: 8080 });

for await (const conn of server) {
  (async () => {
    const httpConn = Deno.serveHttp(conn);
    for await (const requestEvent of httpConn) {
      // ... handle requestEvent ...
    }
  })();
}
```

- `.nextRequest()`

```ts
const server = Deno.listen({ port: 8080 });

while (true) {
  const conn = server.accept();
  if (conn) {
    (async () => {
      const httpConn = Deno.serveHttp(conn);
      while (true) {
        const requestEvent = await httpConn.nextRequest();
        if (requestEvent) {
          // ... handle requestEvent ...
        } else {
          // the connection has finished
          break;
        }
      }
    })();
  } else {
    // The listener has closed
    break;
  }
}
```

- In practice

```ts
async function handle(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    // ... handle requestEvent
  }
}

const server = Deno.listen({ port: 8080 });

for await (const conn of server) {
  handle(conn);
}
```

### HTTP Requests and Responses

- fetch API `Request`, `Response`

```ts
async function handle(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    const url = new URL(requestEvent.request.url);
    console.log(`path: ${url.path}`);
  }
}
```

- `.respondWith()`

```ts
async function handle(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    await requestEvent.respondWith(new Response("hello world"), {
      status: 200,
    });
  }
}
```

### HTTP/2 Support

> [원문 참조](https://deno.land/manual/runtime/http_server_apis#http2-support)

## Location API

> [location mdn](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)

- 반드시 `--location <href>` 형태, global 은 에러, navigation 도 에러

```ts
// deno run --location https://example.com/path main.ts

console.log(location.href);
// "https://example.com/path"
```

```ts
// deno run main.ts

console.log(location.href);
// error: Uncaught ReferenceError: Access to "location", run again with --location <href>.
```

```ts
// deno run --location https://example.com/path main.ts

location.pathname = "./foo";
// error: Uncaught NotSupportedError: Cannot set "location.pathname".
```

### Extended Usage

- `fetch`

```ts
// deno run --location https://api.github.com/ --allow-net main.ts

const response = await fetch("./orgs/denoland");
// Fetches "https://api.github.com/orgs/denoland".
```

- worker module

```ts
// deno run --location https://example.com/index.html --allow-net main.ts

const worker = new Worker("./workers/hello.ts", { type: "module" });
// Fetches worker module at "https://example.com/workers/hello.ts".
```

- [필요할 때만 사용하기](https://deno.land/manual@v1.9.2/runtime/location_api#only-use-if-necessary)

## Workers

> [Web Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker)

- 현재 `'module'` 타입만 지원

```ts
// Good
new Worker(new URL("./worker.js", import.meta.url).href, { type: "module" });

// Bad
new Worker(new URL("./worker.js", import.meta.url).href);
new Worker(new URL("./worker.js", import.meta.url).href, { type: "classic" });
new Worker("./worker.js", { type: "module" });
```

### Instantiation permissions

- local module: `--allow-read` 필수

```ts
// main.ts
new Worker(new URL("./worker.ts", import.meta.url).href, { type: "module" });
```

```ts
// worker.ts
console.log("hello world");
self.close();
```

```bash
$ deno run main.ts
error: Uncaught PermissionDenied: read access to "./worker.ts", run again with the --allow-read flag

$ deno run --allow-read main.ts
hello world
```

- remote module: `--allow-net` 필수

```ts
// main.ts
new Worker("https://example.com/worker.ts", { type: "module" });
```

```ts
// worker.ts (at above address)
console.log("hello world");
self.close();
```

```bash
$ deno run main.ts
error: Uncaught PermissionDenied: net access to "https://example.com/worker.ts", run again with the --allow-net flag

$ deno run --allow-net main.ts
hello world
```

### Using Deno in worker

:::warning 주의!
unstable!
:::

- `Deno` namespace 는 사용불가 by default
  - `deno.namespace = true` 해주기

```js
// main.js
const worker = new Worker(new URL("./worker.js", import.meta.url).href, {
  type: "module",
  deno: {
    namespace: true,
  },
});
worker.postMessage({ filename: "./log.txt" });
```

```js
// worker.js
self.onmessage = async (e) => {
  const { filename } = e.data;
  const text = await Deno.readTextFile(filename);
  console.log(text);
  self.close();
};
```

- `log.txt`

```txt
hello world
```

```bash
$ deno run --allow-read --unstable main.js
hello world
```

### Specifying worker permissions

:::warning 주의!
unstable!
:::

- granular access: `true, false`

```ts
const worker = new Worker(new URL("./worker.js", import.meta.url).href, {
  type: "module",
  deno: {
    namespace: true,
    permissions: {
      net: [
        "https://deno.land/",
      ],
      read: [
        new URL("./file_1.txt", import.meta.url),
        new URL("./file_2.txt", import.meta.url),
      ],
      write: false,
    },
  },
});
```

```ts
const worker = new Worker(
  new URL("./worker/worker.js", import.meta.url).href,
  {
    type: "module",
    deno: {
      namespace: true,
      permissions: {
        read: [
          "/home/user/Documents/deno/worker/file_1.txt",
          "./worker/file_2.txt",
        ],
      },
    },
  },
);
```

- `"inherit"`

```ts
// This worker will inherit its parent permissions
const worker = new Worker(new URL("./worker.js", import.meta.url).href, {
  type: "module",
  deno: {
    namespace: true,
    permissions: "inherit",
  },
});

// This worker will inherit only the net permissions of its parent
const worker = new Worker(new URL("./worker.js", import.meta.url).href, {
  type: "module",
  deno: {
    namespace: true,
    permissions: {
      env: false,
      hrtime: false,
      net: "inherit",
      plugin: false,
      read: false,
      run: false,
      write: false,
    },
  },
});
```

- default

```ts
// This worker will inherit its parent permissions
const worker = new Worker(new URL("./worker.js", import.meta.url).href, {
  type: "module",
});

// This worker will inherit all the permissions of its parent BUT net
const worker = new Worker(new URL("./worker.js", import.meta.url).href, {
  type: "module",
  deno: {
    namespace: true,
    permissions: {
      net: false,
    },
  },
});
```

- disable the permissions

```ts
// This worker will not have any permissions enabled
const worker = new Worker(new URL("./worker.js", import.meta.url).href, {
  type: "module",
  deno: {
    namespace: true,
    permissions: "none",
  },
});
```
