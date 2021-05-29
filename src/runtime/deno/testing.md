---
sidebar: "auto"
prev: "examples.md"
---
# 테스트

- `./*`와 `./**/*` 를 recursively 탐색
  - `test.{ts, tsx, js, mjs, jsx}`
  - `.test.{ts, tsx, js, mjs, jsx}`
  - `_test.{ts, tsx, js, mjs, jsx}`

## 테스트 작성

```ts
import { assertEquals } from "https://deno.land/std@0.97.0/testing/asserts.ts";

// configurable 하지 않은 간단한 형식
Deno.test("hello world #1", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});

// Fully fledged test definition, configurable, long
Deno.test({
  name: "hello world #2",
  fn: () => {
    const x = 1 + 2;
    assertEquals(x, 3);
  },
});
```

## Assertions

```ts
import {
  assertArrayIncludes,
  assertEquals,
} from "https://deno.land/std@0.97.0/testing/asserts.ts";

Deno.test("hello world", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
  assertArrayIncludes([1, 2, 3, 4, 5, 6], [3], "Expected 3 to be in the array");
});
```

### Async 함수

```ts
import { delay } from "https://deno.land/std@0.97.0/async/delay.ts";

Deno.test("async hello world", async () => {
  const x = 1 + 2;

  // await some async task
  await delay(100);

  if (x !== 3) {
    throw Error("x should be equal to 3");
  }
});
```

### 리소스 그리고 async op sanitizers

- [리소스 테이블](https://deno.land/manual@v1.10.2/contributing/architecture)
- `sanitizeResources`: `false`면 자원누수를 막는 걸 비활성화 시킬 수 있음
- `sanitizeOps`: 파일시스템같은 비동기 / `false`면 비활성화

```ts
Deno.test({
  name: "leaky test",
  fn() {
    Deno.open("hello.txt");
  },
  sanitizeResources: false,
  sanitizeOps: false,
});
```

### exit sanitizer

- tested code doesn't call `Deno.exit()` signaling a false test success.
- `sanitizeExit`: `false`로 위를 보장하는 것을 비활성화

```ts
Deno.test({
  name: "false success",
  fn() {
    Deno.exit(0);
  },
  sanitizeExit: false,
});

Deno.test({
  name: "failing test",
  fn() {
    throw new Error("this test fails");
  },
});
```

### 테스트 실행

```zsh
# Run all tests in the current directory and all sub-directories
deno test

# Run all tests in the util directory
deno test util/

# Run just my_test.ts
deno test my_test.ts
```

```zsh
deno help test
```

## 필터링

### 커맨드 라인 필터링

- `--filtering`

- 테스트 목록

```ts
Deno.test({ name: "my-test", fn: myTest });
Deno.test({ name: "test-1", fn: test1 });
Deno.test({ name: "test2", fn: test2 });
```

- 전부 다 실행

```zsh
deno test --filter "test" tests/
```

- 아래 두번째, 세번째만 실행
- `//`로 감싸서 정규표현식

```zsh
deno test --filter "/test-*\d/" tests/
```

### 테스트 정의 필터링

#### `ignore`

- windows 에서만 테스트한다던가...

```ts
Deno.test({
  name: "do macOS feature",
  ignore: Deno.build.os !== "darwin",
  fn() {
    doMacOSFeature();
  },
});
```

#### `only`

- 한 가지 테스트에 집중하고 싶으면...

```ts
Deno.test({
  name: "Focus on this test only",
  only: true,
  fn() {
    testComplicatedStuff();
  },
});
```

## 테스트 실패시키기

- 테스트 중단을 위해선...

```zsh
deno test --fail-fast
```

## 테스트 커버리지

- `--coverage`를 지정

```zsh
# Go into your project's working directory
git clone https://github.com/oakserver/oak && cd oak

# Collect your coverage profile with deno test --coverage=<output_directory>
deno test --coverage=cov_profile

# From this you can get a pretty printed diff of uncovered lines
deno coverage cov_profile

# Or generate an lcov report
deno coverage cov_profile --lcov > cov_profile.lcov

# Which can then be further processed by tools like genhtml
genhtml -o cov_profile/html cov_profile.lcov
```
