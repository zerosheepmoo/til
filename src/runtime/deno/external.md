---
sidebar: 'auto'
prev: './the-runtime.md'
next: './using-typescript.md'
---

# 외부 라이브러리와 연결하기

- `test.ts` 예시

```ts
import { assertEquals } from "https://deno.land/std@0.95.0/testing/asserts.ts";

assertEquals("hello", "hello");
assertEquals("world", "world");

console.log("Asserted! ✓");
```

```bash
$ deno run test.ts
Compile file:///mnt/f9/Projects/github.com/denoland/deno/docs/test.ts
Download https://deno.land/std@0.95.0/testing/asserts.ts
Download https://deno.land/std@0.95.0/fmt/colors.ts
Download https://deno.land/std@0.95.0/testing/diff.ts
Asserted! ✓
```

- 캐싱: `DENO_DIR`
  - On Linux/Redox: `$XDG_CACHE_HOME/deno or $HOME/.cache/deno`
  - On Windows: `%LOCALAPPDATA%/deno` (`%LOCALAPPDATA% = FOLDERID_LocalAppData`)
  - On macOS: `$HOME/Library/Caches/deno`
- If something fails, it falls back to `$HOME/.deno`

> [FAQ](https://deno.land/manual@v1.9.2/linking_to_external_code#faq)
>
> 특정 버전 지정 등...

- 예시: url 날라가는 거 방법은 어떡함?

```bash
# Download the dependencies
DENO_DIR=./deno_dir deno cache src/deps.ts
# Make sure the variable is set for any command which invokes the cache
DENO_DIR=./deno_dir deno test src
# Check the directory into source control
git add -u deno_dir
git commit
```

## 모듈 재장전

- 기본적으로 캐싱 된건 바뀌지 않음!
- `--reload`로 명시적으로 해줘야함

### To reload everything

```bash
deno cache --reload my_module.ts
```

### To reload specific modules

```bash
deno cache --reload=https://deno.land/std@0.95.0 my_module.ts
```

```bash
deno cache --reload=https://deno.land/std@0.95.0/fs/copy.ts,https://deno.land/std@0.95.0/f
```

## Integrity checking

- `--lock=lock.json --lock-write`

:::details 예시

```ts
// Add a new dependency to "src/deps.ts", used somewhere else.
export { xyz } from "https://unpkg.com/xyz-lib@v0.9.0/lib.ts";
```

```bash
# Create/update the lock file "lock.json".
deno cache --lock=lock.json --lock-write src/deps.ts

# Include it when committing to source control.
git add -u lock.json
git commit -m "feat: Add support for xyz using xyz-lib"
git push
```

- 다른 머신에선

```bash
# Download the project's dependencies into the machine's cache, integrity
# checking each resource.
deno cache --reload --lock=lock.json src/deps.ts

# Done! You can proceed safely.
deno test --allow-read src
```

:::

### Runtime verification

```bash
deno run --lock=lock.json --cached-only mod.ts
```

## 프록시

- Deno supports proxies for module downloads and the Web standard `fetch` API.
- 환경변수로 설정: `HTTP_PROXY`, `HTTPS_PROXY`, `NO_PROXY`
- 윈도우즈는 못찾을 경우 falls back to reading proxies from registry.

## Private 모듈

### DENO_AUTH_TOKENS

- `{token}@{hostname[:port]}`

- 싱글 토큰

```bash
DENO_AUTH_TOKENS=a1b2c3d4e5f6@deno.land
```

- 멀티플 토큰

```bash
DENO_AUTH_TOKENS=a1b2c3d4e5f6@deno.land;f1e2d3c4b5a6@example.com:8080
```

- will set the `Authorization` header of the request to the value of `Bearer {token}`

### Github

- Settings -> Developer settings -> Personal access tokens
- Generate new token
- `DENO_AUTH_TOKENS` 환경변수 scoped to the `raw.githubusercontent.com` hostname

```bash
DENO_AUTH_TOKENS=a1b2c3d4e5f6@raw.githubusercontent.com
```

- `deno run -L debug`

## Import maps

> [import maps](https://github.com/WICG/import-maps)
>
> 근데 자세히는 이게 뭔지 잘 모름...ㅎ

- `--import-map=<FILE>`

:::details 예시

- `import_map.json`

```json
{
   "imports": {
      "fmt/": "https://deno.land/std@0.95.0/fmt/"
   }
}
```

- `color.ts`

```ts
import { red } from "fmt/colors.ts";

console.log(red("hello world"));
```

- 실행

```bash
deno run --import-map=import_map.json color.ts
```

- absolute 도 가능
- `import_map.json`과 `main.ts`

```json
{
  "imports": {
    "/": "./",
    "./": "./"
  }
}
```

```ts
import { MyUtil } from "/util.ts";
```

- This causes import specifiers starting with `/` to be resolved
  relative to the import map's URL or file path.
:::
