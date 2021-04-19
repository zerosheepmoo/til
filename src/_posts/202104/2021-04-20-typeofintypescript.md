# typescript 에서 `typeof` 사용하기

## 문제

- typescript 에서는 `typeof` operator 로 비교 시, 반환값을 변수에 저장된 값과 비교하는 것이 무의미하다.

```ts
let StringType = 'string';
let dom = document.createElement('div');

function checkType(val: string | string[]) {
    // Type 'string | string[]' is not assignable to type 'string'.
    // Type 'string[]' is not assignable to type 'string'.(2322)
    dom.className = typeof val === StringType ? val : val.toString();
}
```

## Performance

또, [100 번 돌렸을 때 성능차이](https://jsben.ch/gFOmr)를 살펴보면 평균적으로 3~5% 차이가 난다.
프로그램 규모가 커지면 커질 수록 typescript 형식으로 비교하는 것은 **유의미한 성능차이**를 보일 수 있다.

## 해결방안

- [typescript docs narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing)
  항목을 살펴보면 `literal` 로 비교하는 것을 권장한다.
- [usertype predicate](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)
  를 응용할 수 있다.
- 또, [deprecated 된 doc](https://www.typescriptlang.org/docs/handbook/advanced-types.html#typeof-type-guards)를
  살펴보면 function `isNumber`등의 function을 통해 비교한다.
- 연산 시 function call stack 이 한번 더 쌓이지만 이러한 방법이 가장 바람직한 듯 보인다.

```ts
function isNumber(x: any): x is number {
  return typeof x === "number";
}

function isString(x: any): x is string {
  return typeof x === "string";
}

function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(" ") + value;
  }
  if (isString(padding)) {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
```

## 결론

- 현재로는 typescript 환경에서, comparison 시 literal 을 사용하는 것이 어쩔 수 없이 가장 바람직하다.
- 이를 위해선 어디서든 쓰이는 common function을 만드는 것이 가장 좋다.
- 얼른 typescript 가 이런 점을 type 오류로 잡지 않았으면 좋겠다.
