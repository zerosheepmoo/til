# 현재 로케이션 url query 파라미터 가져오기

> [URLSearchParams 호환성](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#browser_compatibility)

```js
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('myParam');
```
