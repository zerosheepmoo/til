# Client Side Storage

> [MDN web Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)

## Overview

모던 웹브라우저들은 사용자의 permission 하에 사용자의 컴퓨터에 데이터를 저장하는 방법들은 제공한다. 그리고 필요할 땐 retrieve 하고...
이 포스팅의 목적은 장기간 저장, 오프라인에서의 웹앱 사용, 유저별 설정 유지 등을 구현하는 방법을 학슴함에 있다.
간략히 어떤 기술이 있는지만 설명하며, 근시일 내에 사용하는 법과 예제를 작성할 예정이다.

대부분 모던 웹사이트들은 동적이다.[^1] 서버에 database 를 이용해 데이터를 저장(server-side storage)하고
필요한 데이터를 retrieve 하기 위해 서버 사이드의 코드를 실행한다. 그 후 스태틱 페이지 템플릿에 삽입하고,
결과 HTML을 사용자의 브라우저로 display 하기 위해 클라이언트에게 제공(serve)한다.

Client Side Storage 도 비슷한 원칙에 따라 작동하지만 용도가 다르다.
클라이언트(사용자의 컴퓨터)에 데이터를 저장 한 다음 필요할 때 retrieve 할 수있는 JavaScript API로 구성된다.

### 사용처

- 개인별 사용 설정(사용자 정의 위젯, 컬러 scheme, 폰트 크기)
- 이전 사이트 활동 유지(장바구니, 로그인 했는지 등)
- 퍼포먼스 향상
- 오프라인에서의 웹앱 사용

:::tip
일반적으로 client-side 와 server-side storage 는 같이 쓰인다.
:::

:::warning
[저장용량제한](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria)
:::

### 쿠키

- 더 이상 클라이언트 사이드 스토리지를 위해서는 사용하지 않는다. (다른 용도로는 사용)
- [HTTP 쿠키 사용하기](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) 참고

### Web Storage 와 IndexedDB

- [웹 스토리지](#webstorage)는 로그인 관련 정보, 배경색 등 간단한 형태의 데이터를 저장하는데 적합하다.
- [IndexedDB](#indexeddb)는 complete sets of customer records, 오디오나 비디오 등의
  복잡한 형태의 데이터를 저장하는데 적합하디.

### future: Cache API

몇 모던 브라우저들은 새로운 [Cache API](#cache-api) 를 제공한다. 이 API는 특정 HTTP 요청에 대한 HTTP 응답을 저장하고,
네트워크 커넥션이 없어도 웹사이트 어셋에 저장되어 동작하는 것을 위해 디자인되었다. 캐시는 주로 Service Worker API 와 함께
자주 사용된다.(반드시 그럴필요는 없지만)

## WebStorage

> [MDN Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

```ts
// save
localStorage.setItem('name','Chris');
// retrieve
let myName = localStorage.getItem('name');
// remove
localStorage.removeItem('name');
```

- 브라우저를 껐다가 켜도 잘 있음!
- 도메인마다 다르게 저장됨! (보안관련해서도 생각해보면 it makes sense!)

### 종류

- `sessionStorage`: 브라우저가 꺼지기 전까지 유지, 쿠키보다 용량이 큼 (최대 5MB).
- `localStorage`: 브라우저가 껐다 켜도 유지. expiration date 가 없고 javascript를 이용하거나 직접 제거해야함.
  제일 용량이 큼.

## IndexedDB

> [MDN IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

## Offline asset storage

### Service Worker?

서비스 워커는 특정 오리진(웹사이트, 또는 특정 도메인에서의 웹사이트의 일부)이 브라우저에 의해 접근될 때,
그 오리진에 대해 등록되는 자바스크립트 파일이다.
등록되면 해당 오리진에서 사용 가능한 페이지를 제어 할 수 있다. 즉, 로드 된 페이지와 네트워크 사이에 페이지를 제어하며,
오리진을 겨냥한 네트워크 요청을 가로챈다(intercept).

고전적으로는 네트워크 응답을 오프라인으로 저장 한 다음 네트워크 응답 대신, 곧바로 요청에 대한 응답으로 제공한다.
이로써 특정 웹 앱이 **완전한 오프라인 웹사이트 환경**에서 작동할 수 있는 것이다.

**Cache API는 HTTP 응답을 저장하도록 설계**되었기 때문에 서비스워커와 자주 같이 쓰이는 것.

> 서비스 워커의 사용과 사용법 학습은 후에 예제를 만들어서 진행한다.

:::tip
[MDN 예제](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/)
와
[소스코드](https://github.com/mdn/learning-area/tree/master/javascript/apis/client-side-storage/cache-sw/video-store-offline)
:::

### Cache API

> [MDN Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache) 참고

[^1]: [정적](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview#static_sites)
과 [동적](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview#dynamic_sites)사이트
