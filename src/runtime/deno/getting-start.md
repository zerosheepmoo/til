---
sidebar: 'auto'
prev: './introduction.md'
# next: '.md'
---

# 시작하기

## Installation

### 다운로드와 설치

- [deno_install](https://github.com/denoland/deno_install)에서 제공

:::details 목록

#### Using Shell (macOS and Linux)

```zsh
curl -fsSL <https://deno.land/x/install/install.sh> | sh
```

#### Using PowerShell (Windows)

```powershell
iwr <https://deno.land/x/install/install.ps1> -useb | iex
```

#### Using Scoop (Windows)

```bash
scoop install deno
```

#### Using Chocolatey (Windows)

```bash
choco install deno
```

#### Using Homebrew (macOS)

```zsh
brew install deno
```

#### Using Nix (macOS and Linux)

```zsh
nix-shell -p deno
```

#### Build and install from source using Cargo

```bash
cargo install deno --locked
```

:::

- [메뉴얼 하게 설치](https://github.com/denoland/deno/releases).
  - These packages contain just a single executable file.
  - You will have to set the executable bit on macOS and Linux.
- 공식 Docker 이미지는 아직([#issue#3356](https://github.com/denoland/deno/issues/3356))
  - [커뮤니티 이미지](https://github.com/hayd/deno-docker)는 있음

### 설치 테스트

- [deno cli](#command-line-interface) 참고

```zsh
deno --version
# flags / usages
deno help 
```

### 업데이트

`github.com/denoland/deno/releases`로 부터 최신 릴리즈를 가져옴

```bash
deno upgrade
```

특정 버전 설치도 가능

```bash
deno upgrade --version 1.0.1
```

### 빌드

[`Contributing` 챕터](./contributing.md) 참고

## 환경설정

### 환경변수

- `DENO_DIR` defaults to `$HOME/.cache/deno`
  - 메뉴얼하게 지정도 가능
- `NO_COLOR`: output 색상 끄기
  - <https://no-color.org/>
  - `--allow-env` 없이 `NO_COLOR`를 테스트 가능: `Deno.noColor`

### 쉘 자동완성

- `deno completions <shell>` command를 사용하여 completion script를 생성가능.
  - `stdout`으로 나오니까 적절한 파일에 redirection 해야함.
  
#### 지원되는 쉘

- zsh
- bash
- fish
- powershell
- elvish

:::details 예시

**bash 예시**

```bash
deno completions bash > /usr/local/etc/bash_completion.d/deno.bash
source /usr/local/etc/bash_completion.d/deno.bash
```

**zsh 예시**

```zsh
mkdir ~/.zsh # create a folder to save your completions. it can be anywhere
deno completions zsh > ~/.zsh/_deno
```

그리고 `.zshrc`에 넣기

```zsh
fpath=(~/.zsh $fpath)
autoload -Uz compinit
compinit -u
```

- 이후 터미널 재시작
  - 안될 경우 `rm ~/.zcompdump/` 로 이전 컴플리션 지우고 `compinit`으로 재생성

**(zsh + oh-my-zsh) 예시 `[recommended for zsh users]`**

```zsh
mkdir ~/.oh-my-zsh/custom/plugins/deno
deno completions zsh > ~/.oh-my-zsh/custom/plugins/deno/_deno
```

- After this add deno plugin under plugins tag in `~/.zshrc` file.
- for tools like `antigen` path will be `~/.antigen/bundles/robbyrussell/oh-my-zsh/plugins`
  and command will be `antigen bundle` deno and so on.

**powershell 예시**

```powershell
deno completions powershell >> $profile
.$profile
```

- default: `$HOME\Documents\WindowsPowerShell\MicrosoftPowerShell_profile.ps1`
  - it will be run whenever you launch the PowerShell.
:::

### 에디터와 IDE

- 현재시점에선 에디터에서 사용이 불완전해서 커뮤니티에서 각자만의 방법을 고안했음

#### VS Code

- [vscode_deno](https://github.com/denoland/vscode_deno)
- [visual studio marketplace](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)

:::details 더보기

#### JetBrains IDEs

- [Deno plugin](https://plugins.jetbrains.com/plugin/14382-deno)
- Once installed, replace the content
  - of `External Libraries > Deno Library > lib > lib.deno.d.ts`
  - with the output of `deno types`.
- 매번 deno 가 업데이트할때마다 설치해야한다.

#### Vim and NeoVim

- [CoC](https://github.com/neoclide/coc.nvim)
  (intellisense engine and language server protocol)
- [ALE](https://github.com/dense-analysis/ale)
  (syntax checker and language server protocol client)

##### CoC

- `:CocInstall coc-tsserver`
- `:CocInstall coc-deno`
- `:CocCommand deno.initializeWorkspace`
- `gd` (go to definition), `gr` (goto/find references) 가 작동

##### ALE

- 특별한 추가 configuration 이 없다.
- `$PATH` 에 executable 이 위치하 않거나, `deno`라는 이름이 아니거나, unstable features/APIs 사용할 때
  - Override ALE's default values.
  - [`:help ale-typescript`](https://github.com/dense-analysis/ale/blob/master/doc/ale-typescript.txt)

- 지원
  - autocompletion
  - refactoring
  - going to definition,
- key bindings 은 메뉴얼하게 설정
- 설정을 위해 Copy the snippet below into your `vimrc/init.vim`
- `deno fmt`: 포매팅
  - ale_linter setting needs to be set either on a per buffer basis
    - `(let b:ale_linter = ['deno'])`
  - or globally for all TypeScript files
    - `(let g:ale_fixers={'typescript': ['deno']}`)

<!-- markdownlint-disable -->
```typescript
" Use ALE autocompletion with Vim's 'omnifunc' setting (press <C-x><C-o> in insert mode)
autocmd FileType typescript set omnifunc=ale#completion#OmniFunc

" Make sure to use map instead of noremap when using a <Plug>(...) expression as the {rhs}
nmap gr <Plug>(ale_rename)
nmap gR <Plug>(ale_find_reference)
nmap gd <Plug>(ale_go_to_definition)
nmap gD <Plug>(ale_go_to_type_definition)

let g:ale_fixers = {'typescript': ['deno']}
let g:ale_fix_on_save = 1 " run deno fmt when saving a buffer
```
<!-- markdownlint-enable -->

#### Emacs

- [typescript-deno-plugin](https://github.com/justjavac/typescript-deno-plugin)
- [official VSCode extension](https://github.com/denoland/vscode_deno)

`tide` is setup for your instance of Emacs

- `npm install --save-dev typescript-deno-plugin`
- (`npm init -y` as necessary)
- `tsconfig.json` and you are off to the races!

```json
{
  "compilerOptions": {
    "plugins": [
      {
        "name": "typescript-deno-plugin",
        "enable": true, // default is `true`
        "importmap": "import_map.json"
      }
    ]
  }
}
```

#### Atom

- [atom-ide-base](https://atom.io/packages/atom-ide-base)
- [atom-ide-deno](https://atom.io/packages/atom-ide-deno)

#### LSP clients

- [Language server protocol](https://langserver.org/)
  - version 1.6.0 or later.
  - If your editor supports the LSP
    - can use Deno as a language server for TypeScript and JavaScript.

The editor can start the server with `deno lsp`.

##### Example for Kakoune

- [`kak-lsp`](https://github.com/kak-lsp/kak-lsp)
- `kak-lsp.toml`

```toml
[language.deno]
filetypes = ["typescript", "javascript"]
roots = [".git"]
command = "deno"
args = ["lsp"]

[language.deno.initialization_options]
enable = true
lint = true
```

##### Example for Vim/Neovim

- install [`vim-lsp`](https://github.com/prabirshrestha/vim-lsp)
- add `vimrc/init.vim`

<!-- markdownlint-disable -->
```vim
if executable("deno")
  augroup LspTypeScript
    autocmd!
    autocmd User lsp_setup call lsp#register_server({
    \ "name": "deno lsp",
    \ "cmd": {server_info -> ["deno", "lsp"]},
    \ "root_uri": {server_info->lsp#utils#path_to_uri(lsp#utils#find_nearest_parent_file_directory(lsp#utils#get_buffer_path(), "tsconfig.json"))},
    \ "allowlist": ["typescript", "typescript.tsx"],
    \ "initialization_options": {
    \     "enable": v:true,
    \     "lint": v:true,
    \     "unstable": v:true,
    \   },
    \ })
  augroup END
endif
```
<!-- markdownlint-enable -->

##### Example for Sublime Text

- Install the [Sublime LSP package](https://packagecontrol.io/packages/LSP)
- Install the [TypeScript package](https://packagecontrol.io/packages/TypeScript)
  to get syntax highlighting
- Add the following `.sublime-project` file to your project folder

```json
{
  "settings": {
    "LSP": {
      "deno": {
        "command": [
          "deno",
          "lsp"
        ],
        "initializationOptions": {
          // "config": "", // Sets the path for the config file in your project
          "enable": true,
          // "importMap": "", // Sets the path for the import-map in your project
          "lint": true,
          "unstable": false
        },
        "enabled": true,
        "languages": [
          {
            "languageId": "javascript",
            "scopes": ["source.js"],
            "syntaxes": [
              "Packages/Babel/JavaScript (Babel).sublime-syntax",
              "Packages/JavaScript/JavaScript.sublime-syntax"
            ]
          },
          {
            "languageId": "javascriptreact",
            "scopes": ["source.jsx"],
            "syntaxes": [
              "Packages/Babel/JavaScript (Babel).sublime-syntax",
              "Packages/JavaScript/JavaScript.sublime-syntax"
            ]
          },
          {
            "languageId": "typescript",
            "scopes": ["source.ts"],
            "syntaxes": [
              "Packages/TypeScript-TmLanguage/TypeScript.tmLanguage",
              "Packages/TypeScript Syntax/TypeScript.tmLanguage"
            ]
          },
          {
            "languageId": "typescriptreact",
            "scopes": ["source.tsx"],
            "syntaxes": [
              "Packages/TypeScript-TmLanguage/TypeScriptReact.tmLanguage",
              "Packages/TypeScript Syntax/TypeScriptReact.tmLanguage"
            ]
          }
        ]
      }
    }
  }
}
```

:::

## 첫 걸음마

- `async/await` 먼저

### Hello World

```ts
console.log("Welcome to Deno!");
```

```bash
deno run <https://deno.land/std@0.95.0/examples/welcome.ts>
```

### HTTP 요청 만들기

- [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  
```ts
const url = Deno.args[0]; // application 의 first argument 에 pass, url 상수에 저장
const res = await fetch(url); //  요청

// response body를 ArrayBuffer로 parse, response 기다림, 그 후 body 에 저장
const body = new Uint8Array(await res.arrayBuffer()); 

await Deno.stdout.write(body); // stdout에 write
```

<!-- markdownlint-disable -->
```bash
# 잘못된 예시
deno run https://deno.land/std@0.95.0/examples/curl.ts https://example.com
```

```bash
# permission flag 와 함께
deno run --allow-net=example.com https://deno.land/std@0.95.0/examples/curl.ts https://example.com
```
<!-- markdownlint-enable -->

### 파일 읽기

```ts
const filenames = Deno.args;
for (const filename of filenames) {
  const file = await Deno.open(filename);
  await Deno.copy(file, Deno.stdout);
  file.close();
}
```

- `copy()`: kernel→userspace→kernel copies.

```bash
deno run --allow-read <https://deno.land/std@0.95.0/examples/cat.ts> /etc/passwd
```

### TCP 서버

```ts
const hostname = "0.0.0.0";
const port = 8080;
const listener = Deno.listen({ hostname, port });
console.log(`Listening on ${hostname}:${port}`);
for await (const conn of listener) {
  Deno.copy(conn, conn);
}
```

```bash
deno run --allow-net <https://deno.land/std@0.95.0/examples/echo_server.ts>
```

- test: sending data to it with netcat:

```bash
$ nc localhost 8080
hello world
hello world
```

- `cat.ts` 예시같이, `copy()` 도 불필요한 memory copy 를 만들지 않는다.
- 패킷을 커널로부터 받고 다시 보내는 원리다.

### 더 많은 예시

> [Examples](./examples.md) 참고

## Command line interface

- `help` 사용해서 알아보기

:::details 예시

```bash
# Using the subcommand.
deno help

# Using the short flag -- outputs the same as above.
deno -h

# Using the long flag -- outputs more detailed help text where available.
deno --help
```

```bash
deno help bundle
deno bundle -h
deno bundle --help
```

:::

### 스크립트 소스

- stdin: `-`
- url, file 명은 그대로

```bash
deno run main.ts
deno run https://mydomain.com/main.ts
cat main.ts | deno run -
```

### 스크립트 아규먼트

- flag 외 사용자 지정 argument 설정 가능
  
:::details 예시

```bash
deno run main.ts a b -c --quiet
// main.ts
console.log(Deno.args); // [ "a", "b", "-c", "--quiet" ]
```

```bash
# Good. We grant net permission to net_client.ts / runtime-flag

deno run --allow-net net_client.ts

# Bad! --allow-net was passed to Deno.args, throws a net permission error / script-flag

deno run net_client.ts --allow-net
```

:::

- a non-positional flag is parsed differently depending on its position.

:::details 이유

1. runtime flag 와 script flag 를 구분하는 가장 논리적인 방법임
2. 가장 ergonomic 한 방법임[^1]
3. 다른 유명한 런타임 (node.js ㅋㅋ) 에서도 마찬가지 방법이기 때문

- Try `node -c index.js` and `node index.js -c`.
- The first will only do a syntax check on `index.js` as per Node's `-c` flag.
- The second will execute index.js with `-c` passed to `require("process").argv`.

:::

### Watch 모드

:::bash
deno run --watch --unstable main.ts
:::

### Integrity 플래그

- [integrity checking](./integrity-checking.md#integrity-checking-amp-lock-files)
- `deno cache`, `deno run`, `deno test` 에 영향을 미침

```bash
--lock <FILE>    # Check the specified lock file
--lock-write     # Write lock file. Use with --lock.
```

### 캐시와 compilation 플래그

- `deno cache`, `deno run`, `deno test` 에 영향을 미침
- module resolution, compilation configuration etc...에도

```bash
--config <FILE>               # Load tsconfig.json configuration file
--import-map <FILE>           # UNSTABLE: Load import map file
--no-remote                   # Do not resolve remote modules
--reload=<CACHE_BLOCKLIST>    # Reload source code cache (recompile TypeScript)
--unstable                    # Enable unstable APIs
```

### 런타임 플래그

- `deno run`, `deno test` 에 영향을 미침

#### Permission 플래그

> [permissions](#permissions) 참조

#### 다른 런타임 플래그

```bash
--cached-only                # Require that remote dependencies are already cached
--inspect=<HOST:PORT>        # activate inspector on host:port ...
--inspect-brk=<HOST:PORT>    # activate inspector on host:port and break at ...
--seed <NUMBER>              # Seed Math.random()
--v8-flags=<v8-flags>        # Set V8 command line options. For help: ...
```

## Permissions

> [deno permission](./deno-permission.md) 참조

## 웹어셈블리 사용하기

- [WebAssembly mdn](https://developer.mozilla.org/en-US/docs/WebAssembly)
- [WebAssembly official](https://webassembly.org/)

```ts
const wasmCode = new Uint8Array([
  0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127,
  3, 130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112, 0, 0,
  5, 131, 128, 128, 128, 0, 1, 0, 1, 6, 129, 128, 128, 128, 0, 0, 7, 145,
  128, 128, 128, 0, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 4, 109, 97,
  105, 110, 0, 0, 10, 138, 128, 128, 128, 0, 1, 132, 128, 128, 128, 0, 0,
  65, 42, 11
]);
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const main = wasmInstance.exports.main as CallableFunction
console.log(main().toString());
```

- 파일에선

```ts
const wasmCode = await Deno.readFile("main.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const main = wasmInstance.exports.main as CallableFunction;
console.log(main().toString());
```

## Debugging your code

[^1]: relating to or designed for efficiency and comfort in the working environment
