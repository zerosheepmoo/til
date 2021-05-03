---
sidebar: 'auto'
prev: './deno-permission.md'
# next: '.md'
---

# Introduction

> [deno 1.9.2 manual 기준](https://deno.land/manual@v1.9.2/introduction)

:::warning warning
Deno 는 아직 활발히 개발 중이다.
:::

:::tip tip
다른 포스팅과는 다르게 직역하기보단 메모에 가깝게 진행할 예정이다.
:::

## 시작하기에 앞서

Deno 는...

- JavaScript/TypeScript runtime
- with secure defaults
- V8, Rust, and Tokio 로 빌드됨.

## Feature highlights

> [이전 게시글](./deno-basic.md#공식홈페이지-소개-highlight-feature)

- Secure
- Typescript out of the box[^1]
- 단일 실행 가능 (with no dependency)
- 빌트인 유틸리티 (`info`: 의존성 인스펙터, `fmt`: 포매팅)
- 검토된 스탠다드모듈
- 싱글 자바스크립트 파일로 번들

## Philosophy

- 생산적, 안전한, 모던
- 최대 25MB의 압축 실행 파일을 제외하고는, Deno 프로그램에 대한 URL만 있으면 실행 가능.
- Runtime + Package Manager
- URL 모듈 로드
- bash 나 python 로 작성된 유틸리티 스크립트를 대체할 수 있음

## Goal

- 단일 실행 가능
- secure defaults.
  - access files, the environment, or the network.
- 브라우저 호환성
  - JavaScript로 작성되어, Deno namespace (또는 기능 테스트)를 사용하지 않는 Deno 프로그램의 하위 집합
    은 변경없이 브라우저에서 사용가능해야함
- built-in tooling 제공
  - unit testing, code formatting, and linting.
- Keep V8 concepts out of user land.
- Serve HTTP efficiently.

## Comparison to Node.js

- `npm` 사용안함
  - URLs / file paths 로 모듈 레퍼런스
- `package.json` 사용안함.
- 모든 async action 이 promise 를 return
  - api 가 좀 다름
- file, network, enviorment access 에 대해 명시적 permission 필요
- error 발생 시 무조건 죽음
- `require` 안씀

```ts
import * as log from "https://deno.land/std@0.95.0/log/mod.ts";
```

## Other key behavior

- Fetch 후 원격 코드들을 첫 실행 때 캐시한다.
- 실행 시 `--reload` 플래그 없이는 업데이트 되지 않는다.
  - (So, this will still work on an airplane.)
- 원격 URLs 로 로드된 모듈/파일들은 immutable 그리고 cacheable.

[^1]: 별도의 구성이나 설치없이 사용할 수 있는
