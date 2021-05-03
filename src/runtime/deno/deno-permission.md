---
sidebar: 'auto'
prev: './deno-basic.md'
next: 'introduction.md'
---

# Permissions

Deno 는 기본값이 secure 하다. 따라서 특정 무언가를 enable로 지정하지 않는다면, 다음 목록에 접근이 불가능하다.

- file
- network
- environment
- 등등..

보안에 민감한 구역(security-sensitive areas)이나 함수에 접근하기 위해서는 permission의 사용이 요구되는데,
커맨드 라인을 통해서 부여할 수 있다.

다음은 `mod.ts`를 실행할 때  파일 시스템에 read-only 접근을 부여하는 예시다.
쓰기 등의 다른 보안에 관련하여 민감한 함수에는 접근할 수는 없다.

```zsh
deno run --allow-read mod.ts
```

## Permissions list

- `-A`, `--allow-all`: Allow all permissions. This disables all security.
- `--allow-env`: Allow environment access for things
  like getting and setting of environment variables.
- `--allow-hrtime`: Allow high-resolution time measurement.
  High-resolution time can be used in timing attacks and fingerprinting.
- `--allow-net=<allow-net>`: Allow network access.
  You can specify an optional, comma-separated list of domains
  to provide an allow-list of allowed domains.
- `--allow-plugin`: Allow loading plugins.
  Please note that `--allow-plugin` is an unstable feature.
  `--allow-read=<allow-read>`: Allow file system read access.
  You can specify an optional, comma-separated list of directories or files
  to provide a allow-list of allowed file system access.
- `--allow-run`: Allow running subprocesses.
  Be aware that subprocesses are not run in a sandbox and
  therefore do not have the same security restrictions as the deno process.
  Therefore, use with caution.
- `--allow-write=<allow-write>`: Allow file system write access.
  You can specify an optional, comma-separated list of directories or files
  to provide a allow-list of allowed file system access.

## Permissions allow-list

granularity(세분성)를 제어하는 것을 위해 몇 permissions을 allow-lists로 제공한다.

다음은 allow-lists로 `/usr` 디렉토리만 파일 접근을 제한한다.
하지만, `/etc` 디렉토리는 허용하지 않게 된다.

<!-- markdownlint-disable -->
```bash
$ deno run --allow-read=/usr <https://deno.land/std@0.95.0/examples/cat.ts> /etc/passwd
error: Uncaught PermissionDenied: read access to "/etc/passwd", run again with the --allow-read flag
► $deno$/dispatch_json.ts:40:11
    at DenoError ($deno$/errors.ts:20:5)
    ...
```
<!-- markdownlint-enable -->
`/etc`를 allow-list하는 것으로 올바르게 permission 을 주면 성공한다.

```zsh
deno run --allow-read=/etc <https://deno.land/std@0.95.0/examples/cat.ts> /etc/passwd
```

`--allow-write` 도 똑같다.

## Network access

fetch.ts:

```ts
const result = await fetch("https://deno.land/");
```

hosts/urls 을 allow-list 하는 방법에 대한 예시다.

```zsh
deno run --allow-net=github.com,deno.land fetch.ts
```

만약 `fetch.ts`가 다른 도메인에서 network connection을 establish 하려 시도하면,
프로세스는 실패로 돌아간다.

어떠한 url도 허용하게 할려면 다음과 같이 하자.

```zsh
deno run --allow-net fetch.ts
```

## Conference

Ryan Dahl. (September 25, 2020). [The Deno security model](https://www.youtube.com/watch?v=r5F6dekUmdE#t=34m57).
Speakeasy JS.
