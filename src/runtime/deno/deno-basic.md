---
sidebar: 'auto'
prev: './README.md'
next: './deno-permission.md'
---

# deno 기초

## 왜 만들었을까?

- Ryan dahl 의 후회
  - module system with centralized distribution
  - legacy api supports
  - Security
    - 중요한 정보접근 제한

## 기반기술

- V8 javascript runtime
- Rust (replace c++)
- Tokio
- typescript

## 코드 예시

```ts
// import
import { qrcode } from "https://deno.land/x/qrcode/mod.ts";

const base64ToArrayBuffer = (base64: string) => {
    const binString = window.atob(base64);
    const len = binString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binString.charCodeAt(i);
    }
    return bytes.buffer;
}

// top level await
const qr = await qrcode('This is an example.');

const dataString = qr.toString().split(',')[1];
export const arrayBuffer = new Uint8Array(base64ToArrayBuffer(dataString));

// writeFile
await Deno.writeFile("hello.png", arrayBuffer);
```

## 특징

### 공식홈페이지 소개 highlight feature

- Secure by default. No file, network, or environment access (unless explicitly enabled).
- Supports TypeScript out of the box.
- Ships a single executable (deno).
- Has built-in utilities like a dependency inspector (deno info) and a code
  formatter (deno fmt).
- Has a set of reviewed (audited) standard modules that are guaranteed
  to work with Deno.
- Can bundle scripts into a single JavaScript file.

### ESModule 만 사용

- Http url 을 이용하여 app 에 3rd party code 를 connect

```ts
import {serve} from "http://deno.land/std/http/server.ts"
```

- using url 함으로써 다운로드랑 패키지 업데이트가 소스로부터 자체적으로 가능!
- Deno가 의존성을 캐시한다! => 오프라인에서도 이용가능하다구!

```zsh
deno run --allow-write qrcode.ts
```

### Built in Typescript

:+1:​

### Security

- option flag 로 permission 관리

### Top level await

```ts
const hostname = "0.0.0.0";
const port = 8080;
const listener = Deno.listen({ hostname, port });
console.log(`Listening on ${hostname}:${port}`);
for await (const conn of listener) {
  Deno.copy(conn, conn);
}
```

### 브라우저 호환성

- node fetch 같은 게 필요가 없어짐!
- `require` 날라감!!!!

## 정리

|                    | Node            | Deno                |
| ------------------ | --------------- | ------------------- |
| Engine             | V8              | V8                  |
| Written in         | C++, Javascript | Rust & Typescript   |
| Package managing   | npm             | Uses URLs           |
| importing packages | commonjs        | ES Modules          |
| Security           | full access     | permissioned access |
| Typescript support | not built in    | Built in            |
