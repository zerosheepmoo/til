# Typescript 사용하기

## Overview

### 작동원리

> [원문 how does it work](https://deno.land/manual@v1.9.2/typescript/overview#how-does-it-work)

### 타입체킹

- `--no-check` 로 타입체킹 안하고 실행 퍼포먼스를 높일 수 있음!

```bash
deno run --no-check something.ts
```

### 파일 타입 결정하기

- local 에서는 extension 에 의해서 이루어진다. 없다면 JSX, TSX, TS 모두 js 로 간주된다.
- remote 에서는 mime-type 으로 결정한다.
  - 애매한 경우 모듈의 경로 또한 이용한다. `d.ts` 와 `ts`

#### 지원하는 파일타입

> 모든 목록은 [원문 해당 섹션](https://deno.land/manual@v1.9.2/typescript/overview#supported-media-types)참조

|media type| How file is handled |
|:--:|:--:|
|`application/typescript` | TypeScript (with path extension influence) |
|`text/typescript` | TypeScript (with path extension influence) |
|`video/mp2t` | TypeScript (with path extension influence) |
|`text/jsx` | JSX |
|`text/tsx` | TSX |
|`text/plain` | 파일경로, 안되면 unknown |

### Strict by default

- Deno 는 default 로 strict mode 다

### JS 와 섞임

- javascript 의 타입체크는 하지 않는다 by default
  - [config](https://deno.land/manual@v1.9.2/typescript/configuration)로 바꿀 수 있다.
- js 를 ts 에 importing 하거나 그 반대의 시나리오는 지원하지 않는다.

### 터미널에서의 진단

- 다음을 통해 무시
  - `// @ts-ignore`
  - `// @ts-expect-error`
  - `--no-check`

### 타입 resolution

- 코어 디자인 principle 이 "magical" resolution 을 피하는데 있다.

## Configuration

## Types and type declarations

## Migrating to/from JavaScript

## Runtime compiler APIs

## FAQ
