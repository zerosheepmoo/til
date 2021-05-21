---
sidebar: 'auto'
prev: './using-typescript.md'
next: './examples.md'
---

# 표준 라이브러리

- [표준 라이브러리 소스](https://deno.land/std/)
- 버전 명시하여 사용하기

```ts
// import the latest release, this should be avoided
import { copy } from "https://deno.land/std/fs/copy.ts";
```

```ts
// imports from v0.96.0 of std, never changes
import { copy } from "https://deno.land/std@0.96.0/fs/copy.ts";
```

## Trouble shooting

- `--unstable` 없이하면 안되는 거 좀 있음.

```ts
// main.ts
import { copy } from "https://deno.land/std@0.96.0/fs/copy.ts";

copy("log.txt", "log-old.txt");
```

<!-- markdownlint-disable -->

```bash
$ deno run --allow-read --allow-write main.ts
Compile file:///dev/deno/main.ts
Download https://deno.land/std@0.96.0/fs/copy.ts
Download https://deno.land/std@0.96.0/fs/ensure_dir.ts
Download https://deno.land/std@0.96.0/fs/_util.ts
error: TS2339 [ERROR]: Property 'utime' does not exist on type 'typeof Deno'. 'Deno.utime' is an unstable API. Did you forget to run with the '--unstable' flag?
    await Deno.utime(dest, statInfo.atime, statInfo.mtime);
               ~~~~~
    at https://deno.land/std@0.96.0/fs/copy.ts:92:16

TS2339 [ERROR]: Property 'utimeSync' does not exist on type 'typeof Deno'. 'Deno.utimeSync' is an unstable API. Did you forget to run with the '--unstable' flag?
    Deno.utimeSync(dest, statInfo.atime, statInfo.mtime);
         ~~~~~~~~~
    at https://deno.land/std@0.96.0/fs/copy.ts:103:10
```

<!-- markdownlint-enable -->

- 올바른 예

```bash
deno run --allow-read --allow-write --unstable main.ts
```
