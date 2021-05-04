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

### Environmental variables

- `DENO_DIR` defaults to `$HOME/.cache/deno`
  - 메뉴얼하게 지정도 가능
- `NO_COLOR`: output 색상 끄기
  - <https://no-color.org/>
  - `--allow-env` 없이 `NO_COLOR`를 테스트 가능: `Deno.noColor`

### Shell autocomplete

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

## First steps

## Command line interface

## Permissions

## Using WebAssembly

## Debugging your code
