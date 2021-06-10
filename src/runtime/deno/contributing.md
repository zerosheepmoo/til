---
prev: "./tools.md"
---

# 기여하기

> 이 항목은 필요할 때 [원본 메뉴얼](https://deno.land/manual@v1.11.0/contributing/style_guide)
> 을 참고한다.
>
> 단, 스타일 가이드는 **다른 프로젝트 진행 시에도 참조**할만 하다.

## 스타일 가이드

### 저작권 헤더

```ts
// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
```

### 파일명에는 dash 대신 underscore 사용하기

### 새 기능에는 테스트 추가

### TODO 코멘트

- 이슈 또는 작성자 명

```ts
// TODO(ry): Add tests.
// TODO(#123): Support Windows.
// FIXME(#349): Sometimes panics.
```

### Meta-programming is discouraged. Including the use of Proxy

### 타입스크립트

- 자바스크립트 대신 타입스크립트 사용하기
- 라이브러리나 패키지라는 용어 대신 모듈이라는 용어 사용하기
- `index.ts` 대신 `mod.ts` 사용하기

### 외부로 내보내기 하는 함수: 최대 2개 argument

- 필요하면 option 오브젝트까지 3개
- optional parameter 는 옵션 오브젝트안에
- 플레인한 오브젝트에만 options argument 사용, 아닌 경우는...
  - a distinguishing prototype (e.g. `Array`, `Map`, `Date`, `class MyThing`).
  - a well-known symbol property (e.g. an iterable with `Symbol.iterator`).

```ts
// BAD: optional parameters not part of options object. (#2)
export function resolve(
  hostname: string,
  family?: "ipv4" | "ipv6",
  timeout?: number,
): IPAddress[] {}

// GOOD.
export interface ResolveOptions {
  family?: "ipv4" | "ipv6";
  timeout?: number;
}
export function resolve(
  hostname: string,
  options: ResolveOptions = {},
): IPAddress[] {}
export interface Environment {
  [key: string]: string;
}


// BAD: `env` could be a regular Object and is therefore indistinguishable
// from an options object. (#3)
export function runShellWithEnv(cmdline: string, env: Environment): string {}

// GOOD.
export interface RunShellOptions {
  env: Environment;
}
export function runShellWithEnv(
  cmdline: string,
  options: RunShellOptions,
): string {}


// BAD: more than 3 arguments (#1), multiple optional parameters (#2).
export function renameSync(
  oldname: string,
  newname: string,
  replaceExisting?: boolean,
  followLinks?: boolean,
) {}

// GOOD.
interface RenameOptions {
  replaceExisting?: boolean;
  followLinks?: boolean;
}
export function renameSync(
  oldname: string,
  newname: string,
  options: RenameOptions = {},
) {}


// BAD: too many arguments. (#1)
export function pwrite(
  fd: number,
  buffer: TypedArray,
  offset: number,
  length: number,
  position: number,
) {}

// BETTER.
export interface PWrite {
  fd: number;
  buffer: TypedArray;
  offset: number;
  length: number;
  position: number;
}
export function pwrite(options: PWrite) {}
```

### 외부로 내보내기 하는 멤버의 파라미터 인터페이스도 내보내기

### 의존성 줄이고, 순환 의존성 없애기

### 선행 밑줄 파일명에는 링크 금지

### JSDoc 사용

### 테스트모듈 하나씩, 독립적인 유닛테스트

### 최상위 레벨 함수는 arrow function 금지
