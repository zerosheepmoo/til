---
sidebar: 'auto'
prev: './external.md'
next: './standard-library.md'
---

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

## 타입스크립트 Configuration

- Deno Default 사용 권장. 배포 시 사용자지정 config 파일도 필요하기 때문.

```bash
> deno run --config ./tsconfig.json main.ts
```

### 사용 가능 옵션 표

- `compilerOptions` 의 일부

> [원문 how deno uses a configuration file 참조](https://deno.land/manual/typescript/configuration#how-deno-uses-a-configuration-file)

### 예시 `tsconfig.json`

```json
{
  "compilerOptions": {
    "allowJs": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "inlineSourceMap": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["deno.window"],
    "module": "esnext",
    "strict": true,
    "target": "esnext",
    "useDefineForClassFields": true
  }
}
```

- `deno types` on the command line
  - and piping the output to a file
  - and including that in the files as part of the program
  - removing the `"lib"` option
  - and setting the `"noLib"` option to true.
- `--unstable` flag
- `"lib"` option to `[ "deno.window", "deno.unstable" ]`
- load a worker: `"deno.worker"` instead of `"deno.window"`

## 타입과 타입 선언

- no magical resolution
- importer가 아닌 supplier가 모듈의 타입을 명시

### 가져오기 시 타입 제공

- `// @deno-type="path/of/type/declaration"`

```js
// @deno-types="./coolLib.d.ts"
import * as coolLib from "./coolLib.js";
```

### 호스팅 시 타입 제공

#### Triple slash

- `/// <reference path="./coolLib.d.ts" />`

```js
/// <reference path="./coolLib.d.ts" />

// ... the rest of the JavaScript ...
```

#### X-TypeScript-Types header

- `https://example.com/coolLib.js`
- `https://example.com/coolLib.d.ts`

```response
HTTP/1.1 200 OK
Content-Type: application/javascript; charset=UTF-8
Content-Length: 648
X-TypeScript-Types: ./coolLib.d.ts
```

### 중요한 점

#### 타입 선언 semantics

- `d.ts`: UMD declarations and not ambient/global declarations
  - 아니면 Deno랑 호환 안될수도

#### Deno 친화적 CDN

- [skypack](https://docs.skypack.dev/skypack-cdn/code/deno)

```ts
// X-TypeScript-Types 헤더, ?dts 쿼리로 원격임을 명시
import React from "https://cdn.skypack.dev/react?dts";
```

### 타입 체킹 시 JS Behavior

- 타입스크립트 컴파일러에서 어짜피 정적 분석을 하긴함. `"checkJs": false`여도.
- 하지만, 다음의 경우 문제가 될 수 있으니까 JS 경우 위의 형식으로 타입제공을 해주자
  - special packaging, global UMD module, TypeScript's analysis of the module

#### 내부에서는

- 컴파일 / 실행하기 까지의 순서
  - 루트 모듈을 파싱하여 그래프 생성
  - 그리고 의존성을 감지
  - 디펜던시 모듈들을 다시 파싱 / 의존성 감지
  - 이 과정을 모든 의존성들이 retrieve 될 때 까지 recursively do
  - 컴파일 / 실행
- 각 의존성 마다 두 개의 잠재적 `slot`이 사용
  - code slot: 예) `.js`
  - type slot: 예) `.d.ts`
- 그래프 빌드 이후에 타입 체크가 필요할 경우
  - TS compiler 시작, 잠재적으로 JS로 emit 될 필요가 있는 모듈에 feeds it
  - TS 컴파일러가 추가적인 모듈을 요청하고, Deno가 의존성 때문에 슬롯을 살펴보고, 코드슬롯 채워지기전에 타입슬롯을 제공
- 이는 모듈 resolving 대신에 타입스크립트로 `.d.ts` 제공, 아님 위의 방법대로 제공하는 것을 말함!

## 자바스크립트 에서/로 마이그레이션

### 자바스크립트 타입 체킹

- TypeScript type checker instead of everywhere type annotation

```js
// @ts-check
```

- Config file: `--config` option

```json
{
  "compilerOptions": {
    "checkJs": true
  }
}
```

### JSDoc

- [typescirpt jsdoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)

```js
/** @type {string[]} */
const a = [];
```

### 타입 체크 스킵하기

- `--no-check` option
- or pragma

```js
// @ts-nocheck
```

### js 파일을 ts 파일로 이름 재정의

- deno가 `strict` 모드라서 몇 몇은 안될 수도 있다.

## 런타임 컴파일러 APIs

> `--unstable` 해야 쓸 수 있음

### Deno.emit()

:::details 자세히

- 정의

```ts
function emit(
  rootSpecifier: string | URL,
  options?: EmitOptions,
): Promise<EmitResult>;
```

- 옵션

```ts
interface EmitOptions {
  /** Indicate that the source code should be emitted to a single file
    * JavaScript bundle that is a single ES module (`"esm"`) or a single file
    * self contained script we executes in an immediately invoked function
    * when loaded (`"iife"`). */
  bundle?: "esm" | "iife";
  /** If `true` then the sources will be typed checked, returning any
    * diagnostic errors in the result.  If `false` type checking will be
    * skipped.  Defaults to `true`.
    *
    * *Note* by default, only TypeScript will be type checked, just like on
    * the command line.  Use the `compilerOptions` options of `checkJs` to
    * enable type checking of JavaScript. */
  check?: boolean;
  /** A set of options that are aligned to TypeScript compiler options that
    * are supported by Deno. */
  compilerOptions?: CompilerOptions;
  /** An [import-map](https://deno.land/manual/linking_to_external_code/import_maps#import-maps)
    * which will be applied to the imports. */
  importMap?: ImportMap;
  /** An absolute path to an [import-map](https://deno.land/manual/linking_to_external_code/import_maps#import-maps).
    * Required to be specified if an `importMap` is specified to be able to
    * determine resolution of relative paths. If a `importMap` is not
    * specified, then it will assumed the file path points to an import map on
    * disk and will be attempted to be loaded based on current runtime
    * permissions.
    */
  importMapPath?: string;
  /** A record of sources to use when doing the emit.  If provided, Deno will
    * use these sources instead of trying to resolve the modules externally. */
  sources?: Record<string, string>;
}
```

- 결과

```ts
interface EmitResult {
  /** Diagnostic messages returned from the type checker (`tsc`). */
  diagnostics: Diagnostic[];
  /** Any emitted files.  If bundled, then the JavaScript will have the
   * key of `deno:///bundle.js` with an optional map (based on
   * `compilerOptions`) in `deno:///bundle.js.map`. */
  files: Record<string, string>;
  /** An optional array of any compiler options that were ignored by Deno. */
  ignoredOptions?: string[];
  /** An array of internal statistics related to the emit, for diagnostic
   * purposes. */
  stats: Array<[string, number]>;
}
```

### 외부 소스 사용하기

```ts
try {
  const { files } = await Deno.emit("mod.ts");
  for (const [fileName, text] of Object.entries(files)) {
    console.log(`emitted ${fileName} with a length of ${text.length}`);
  }
} catch (e) {
  // something went wrong, inspect `e` to determine
}
```

### 옵션들 사용하기

- `source`

```ts
const { files } = await Deno.emit("/mod.ts", {
  sources: {
    "/mod.ts": `import * as a from "./a.ts";\nconsole.log(a);\n`,
    "/a.ts": `export const a: Record<string, string> = {};\n`,
  },
});
```

- 타입체킹 (JS)

```ts
const { files, diagnostics } = await Deno.emit("./mod.js", {
  compilerOptions: {
    checkJs: true,
  },
});
```

```ts₩
const { files, diagnostics } = await Deno.emit("./mod.ts");
if (diagnostics.length) {
  // there is something that impacted the emit
  console.warn(Deno.formatDiagnostics(diagnostics));
}
```

- 타입체킹 스킵 (TS 까지)

```ts
const { files } = await Deno.emit("./mod.ts", {
  check: false,
});
```

- 번들링: 워커스크립트는 안가져옴

```ts
const { files, diagnostics } = await Deno.emit("./mod.ts", {
  bundle: "esm",
});
```

- `importMap`

```ts
const { files } = await Deno.emit("mod.ts", {
  bundle: "esm",
  importMap: {
    imports: {
      "lodash": "https://deno.land/x/lodash",
    },
  },
  importMapPath: "file:///import-map.json",
});
```

- [`CompilerOptions` 목록](https://doc.deno.land/builtin/unstable#Deno.CompilerOptions)

:::

## FAQ

:::danger 주의
5월 11부터 1.10.1 이 릴리즈되었다.
여기부턴 1.10.1 버전의 메뉴얼을 기준으로 한다.
:::

> [FAQ](https://deno.land/manual@v1.10.1/typescript/faqs)
