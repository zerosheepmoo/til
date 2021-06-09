# 빌트 인 툴

- bundler (deno bundle)
- compiling executables (deno compile)
- installer (deno install)
- dependency inspector (deno info)
- documentation generator (deno doc)
- formatter (deno fmt)
- repl (deno repl)
- test runner (deno test)
- linter (deno lint)

## install

- `deno install [OPTIONS...] [URL] [SCRIPT_ARGS...]`
- executable code 를 설치하고 배포하는 용도
- `EXEC`

```zsh
$ deno install --allow-net --allow-read https://deno.land/std@0.97.0/http/file_server.ts
[1/1] Compiling https://deno.land/std@0.97.0/http/file_server.ts

✅ Successfully installed file_server.
/Users/deno/.deno/bin/file_server
```

- 실행이름 바꾸기

```zsh
deno install --allow-net --allow-read -n serve https://deno.land/std@0.97.0/http/file_server.ts
```

- 설치 루트 바꾸기
  - `--root` 옵션
  - `DENO_INSTALL_ROOT`: 환경변수
  - `$HOME/.deno`: default

```bash
deno install --root ~~~
```

- 메뉴얼리하게

```zsh
echo 'export PATH="$HOME/.deno/bin:$PATH"' >> ~/.bashrc
```

- [`import.meta.main`](https://deno.land/manual@v1.10.2/examples/module_metadata)

```ts
// https://example.com/awesome/cli.ts
async function myAwesomeCli(): Promise<void> {
  -- snip --
}

if (import.meta.main) {
  myAwesomeCli();
}
```

- example

```bash
# Install using deno install

$ deno install -n awesome_cli https://example.com/awesome/cli.ts
```

## 코드 포매터

- `deno fmt`
  
```zsh
# format all JS/TS files in the current directory and subdirectories
deno fmt
# format specific files
deno fmt myfile1.ts myfile2.ts
# check if all the JS/TS files in the current directory and subdirectories are formatted
deno fmt --check
# format stdin and write to stdout
cat file.ts | deno fmt -
```

- `// deno-fmt-ignore`: 한 줄
- `// deno-fmt-ignore-file`: 파일 최상단

```ts
// deno-fmt-ignore
export const identity = [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1,
];
```

## 레플(Read eval print loop)

- [deno repl](https://deno.land/manual@v1.10.2/tools/repl)

## 번들러

- `deno bundle [URL]`
- default 로 stdout
- 결과는 es module

```html
<script type="module" src="website.bundle.js"></script>

<!-- 또는 -->
<script type="module">
  import * as website from "website.bundle.js";
</script>
```

## 컴파일

- exec 파일 만들기
- `deno compile [--output <OUT>] <SRC>`

<!-- markdownlint-disable -->
```bash
 --target <target>
            Target OS architecture [possible values: x86_64-unknown-linux-gnu, x86_64-pc-windows-msvc, x86_64-apple-darwin, aarch64-apple-darwin]
```
<!-- markdownlint-enable -->

## 문서

- `deno doc [file name] --json`
