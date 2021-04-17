# tc39 Process

## 시작은

[javascript.info](javascript.info) 에 올라와있는 항목 중 private class fields 에 관한 항목이 있었다.
사용해보기 위해 API 를 찾아보려
[MDN 문서 - private class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
에 방문하였다.

안타깝게도 [stage 3 단계](https://github.com/tc39/proposal-private-methods)였다.

평소에 사용하던 API 들은 (물론, 타겟을 한 목표의 브라우저 / 환경에서 지원하는지 호환성을 살펴보는게 최우선이지만) stage 4
단계였던 걸 생각하면, 사용하는데 문제가 있을 거라 판단해서...아무 생각없이 넘겼던 기억이 있다.

특히, javascript 대신 typescript 를 사용한지 좀 되었기 때문에,
버전 3.8 아래였을 당시 typescript 는 private class fields 를 지원하지 않았던 점을 미루어 볼 때
사용하기가 번거로웠던 점은 있다.

또, es2015 이상의 library target 을 맞추지 않으면 지원하지 않기 때문에 default 로 es5 target 을 쓰던
나로썬 별도의 학습 시간을 감당해야 할 메리트가 없었다.

[타입스크립트 핸드북의 클래스 주의사항](https://www.typescriptlang.org/docs/handbook/2/classes.html#caveats)을
읽어보면 private field 는 결국 transpiling 이후 javascript runtime 환경에서는 접근할 수 있기 때문에,
private class fields 같은 기능의 이용을 권장한다고 적혀있다.

[typescript playground 예제](https://www.typescriptlang.org/play?ts=3.8.3#example/private-class-fields)
로도 등록되어있다.

> 이에 대한, 더 내용은 내일 일자의 포스팅으로 쓰기로 했다.

그렇지만 필요에 따라선, 미래에 반영이 거의 확실하며 타겟의 메이저한 환경에서 지원하고 있다면 분석하에 사용하는 것이 좋을 것이라는 판단이 들었다.
이를 위해 tc39 의 각 stage 가 무엇을 의미하는지 알아보기로 했다.

## 내용

> [tc39 process document 메모](/til/ecmascript/tc39-process.md)

## 결론

- stage 0 단계는 흥미와 재미의 단계로만 보자.
- stage 1, 2 단계는 관심있는 것이 있다면 지켜보자.
- 타겟 환경을 고려하여, stage 3 단계도 사용해도 괜찮을 것이다.
  - 단, 해당 Spec에 대한 철저한 학습필요할 것
  - 유지보수가 거의 이루어지지 않는 소프트웨어 개발이 아닐 것
- stage 4 단계는 안심하고 사용하면된다! 설사, 개정판에 현재 써져있지 않더라도!
