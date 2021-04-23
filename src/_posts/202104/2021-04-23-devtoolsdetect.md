# 개발자 도구 여는 거 감지하기 - 1 -

> [discussion - quora](https://www.quora.com/How-do-I-block-inspect-element-on-my-website)
>
> [discussion - stack overflow](https://stackoverflow.com/questions/7798748/find-out-whether-chrome-console-is-open)

해당 디스커션에서는 완벽히 막는 방법이 없다고들 이야기한다.
다음에 기회가 되면 더 찾아보자.
대안은 다음과 같다.

- 마우스 오른쪽 클릭막기
- f12 이벤트 막기
- 그 외 개발자 도구트는 short cut event 막기
- setInterval 로 정기적으로 체크해서 닫아버리기
- `toStirng()` 이용

```js
let devtools = function () { };
devtools.toString = function () {
    if (this.opened) {
        alert("Opened");
    }
    else {
        alert("closed");
        this.opened = true;
    }
}
console.log('%c', devtools);
```
