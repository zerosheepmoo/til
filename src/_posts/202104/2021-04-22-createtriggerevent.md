# 이벤트를 생성하고 방아쇠를 당기기

> [MDN 원본](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events)

- synthetic events(합성 이벤트) 에 대해 다룬다.

## Custom Event 생성하기

```js
const event = new Event('build');

// Listen for the event.
elem.addEventListener('build', function (e) { /* ... */ }, false);

// Dispatch the event.
elem.dispatchEvent(event);
```

- [Event API](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [EventTarget.dispatchEvent()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent)

## Custom Data 추가하기 - `CustomEvent()`

- [CustomEvent API](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)
- 이벤트 오브젝트에 더 많은 데이터를 전달하고 싶을 경우 사용한다.

```js
const event = new CustomEvent('build', { detail: elem.dataset.time });
```

```js
// e 에 만든 커스텀 이벤트가 passed 될 경우
function eventHandler(e) {
  console.log('The time is: ' + e.detail);
}
```

## 옛날에는

- [document.createEvent()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createEvent)
- java 에서 inspiring
- init - add - dispatch

```js
// Create the event.
const event = document.createEvent('Event');

// Define that the event name is 'build'.
event.initEvent('build', true, true);

// Listen for the event.
elem.addEventListener('build', function (e) {
  // e.target matches elem
}, false);

// target can be any Element or other EventTarget.
elem.dispatchEvent(event);
```

## 이벤트 버블링

- child 에서 trigger, ancestor 에서 catch
- 아래 예시는 `e.target.dispatchEvent()` 가 bubbling 되어서
  EventTarget 가 form element 가 되어 awesome event 가 trigger 된다.

```html
<form>
  <textarea></textarea>
</form>
```

```js
// Create a new event, allow bubbling, and provide any data
// you want to pass to the "detail" property
const eventAwesome = new CustomEvent('awesome', {
  bubbles: true,
  detail: { text: () => textarea.value }
});

// The form element listens for the custom "awesome" event and then consoles
// the output of the passed text() method
form.addEventListener('awesome', e => console.log(e.detail.text()));

// As the user types, the textarea inside the form 
// dispatches/triggers the event to fire, and uses itself as the starting point
textarea.addEventListener('input', e => e.target.dispatchEvent(eventAwesome));
```

## built-in event 트리거

> [예제](https://media.prod.mdn.mozit.cloud/samples/domref/dispatchEvent.html)

```js
function simulateClick() {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  const cb = document.getElementById('checkbox');
  const cancelled = !cb.dispatchEvent(event);

  if (cancelled) {
    // A handler called preventDefault.
    alert("cancelled");
  } else {
    // None of the handlers called preventDefault.
    alert("not cancelled");
  }
}
```
