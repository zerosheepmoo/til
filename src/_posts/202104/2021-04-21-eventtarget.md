# EventTarget

> [MDN docs Web API EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)

## 읽기 전에

- 본래 DOM standards 는 whatwg 와 w3c 두 군데에서 conduct 했었다.
- 그러나 이젠 일원화했다.
- [dom standards 일원화 관련 discussion](https://stackoverflow.com/questions/6825713/html5-w3c-vs-whatwg-which-gives-the-most-authoritative-spec)

## Overview

> [`EventTarget Interface Standard`](https://dom.spec.whatwg.org/#interface-eventtarget)

<!-- markdownlint-disable -->
```IDL
[Exposed=(Window,Worker,AudioWorklet)]
interface EventTarget {
  constructor();

  undefined addEventListener(DOMString type, EventListener? callback, 
      optional (AddEventListenerOptions or boolean) options = {});
  undefined removeEventListener(DOMString type, EventListener? callback, 
      optional (EventListenerOptions or boolean) options = {});
  boolean dispatchEvent(Event event);
};

callback interface EventListener {
  undefined handleEvent(Event event);
};

dictionary EventListenerOptions {
  boolean capture = false;
};

dictionary AddEventListenerOptions : EventListenerOptions {
  boolean passive = false;
  boolean once = false;
  AbortSignal signal;
};
```
<!-- markdownlint-enable -->

:::warning
IE 에서 사용 시 유의!

- constructor 보단 dispatchEvent 가 IE9 미만에서 fireEvent 로 구현되어있는 점을 유의하자!
:::

`EventTarget` 은 이벤트를 받고, 그에 대한 이벤트 리스너를 등록할 수 있는 **DOM[^1] 인터페이스**다.

[`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element),
[`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document),
[`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) 가 대표적이다.

외에도 `XMLHttpRequest`, `AudioNode`, `AudioContext` 가 `EventTarget`이 될 수 있다.

[^1]: Document Object Model

## Constructor

[`EventTarget()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/EventTarget)

## Methods

- [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
  - EventTarget 에 특정 이벤트에 대한 이벤트 핸들러를 등록한다.
- [EventTarget.removeEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
  - EventTarget 에서 이벤트 리스너를 제거한다.
- [EventTarget.dispatchEvent()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent)
  - EventTarget 에 이벤트를 dispatch 한다.
