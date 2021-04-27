---
sidebar: 'auto'
---

# Custom Elements

:::tip note
이 섹션은 [Custom Elements Spec](https://html.spec.whatwg.org/multipage/scripting.html#custom-elements)
에 대해 설명한다.

예전거랑 API 가 다르니 [커스텀 엘리먼트 히스토리](#history-and-browser-support)를 참고하자.
:::

브라우저는 웹 어플리케이션을 구축하기 위한 완벽한 도구를 제공한다. 당신이 들어봤을 법한 그것은 바로 HTML!

그것은 declarative, portable, well supported, 그리고 easy to work with 하다!

HTML은 훌륭하지만, 용어와 확장성은 제한적이다. [HTML Living Standards](https://html.spec.whatwg.org/multipage/)는
항상 JS behavior 를 markup과 자동으로 associate하는 방법이 없었다...

이 글을 읽기전까진!

:::details 원본
> The browser gives us an excellent tool for structuring web applications.
> It's called HTML. You may have heard of it! It's declarative, portable,
> well supported, and easy to work with. Great as HTML may be, its vocabulary
> and extensibility are limited.
> The HTML living standard has always lacked a way to automatically associate
> JS behavior with your markup... until now.
:::

커스텀 엘리먼트는 HTML 을 모던화하고, 잃어버린 조각을 채우며, behavior 와 함께 구조를 번들링하는 것에 대한 해답이다.
HTML 이 문제에 대한 해답을 제공하지 않는다면, 커스텀 엘리먼트를 생성하여 해결할 수 있다. 커스텀 엘리먼트는 HTML의 이점은
그대로 유지하면서 브라우저를 다루는 새로운 트릭을 알려준다.

:::details 원본
> Custom elements are the answer to modernizing HTML, filling in the missing pieces,
> and bundling structure with behavior.
> If HTML doesn't provide the solution to a problem,
> we can create a custom element that does.
> Custom elements teach the browser new tricks while preserving the benefits of HTML.
:::

## 새로운 엘리먼트 정의하기

새로운 HTML element 를 정의하기 위해서는 자바스크립트의 힘이 필요하다!

`customElements` global은 커스텀 엘리먼트를 정의하고 브라우저에게 새로운 태그를 알려준다.
`customElements.define()`을 **원하는 태그명**과 **HTMLElement를 extends 한 Javascript 클래스**와
함께 호출하자.

```js
class AppDrawer extends HTMLElement {...}
window.customElements.define('app-drawer', AppDrawer);

// Or use an anonymous class if you don't want a named constructor in current scope.
window.customElements.define('app-drawer', class extends HTMLElement {...});
```

- 사용 예시

```html
<app-drawer></app-drawer>
```

`<div>` 같은 엘리먼트들을 사용하는 것과 차이가 없다!
인스턴스는 페이지에 선언되며, javascript 에서 동적으로 생성하고, event listener 까지 걸 수 있다!

## 엘리먼트의 JavaScript API 정의하기

커스텀 엘리먼트의 functionality는 `HTMLElement`를 `extends`한 ES2015 class 에 의해 정의된다.
`HTMLElement`를 확장하는 것으로 커스텀 엘리먼트가 모든 DOM API를 상속하는 것을 보장한다.
즉, 해당 클래스에 추가하는 모든 프로퍼티 / 메소드는 엘리먼트의 DOM 인터페이스가 된다.

- 예시 코드

```js
class AppDrawer extends HTMLElement {

  // A getter/setter for an open property.
  get open() {
    return this.hasAttribute('open');
  }

  set open(val) {
    // Reflect the value of the open property as an HTML attribute.
    if (val) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
    this.toggleDrawer();
  }

  // A getter/setter for a disabled property.
  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(val) {
    // Reflect the value of the disabled property as an HTML attribute.
    if (val) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  // Can define constructor arguments if you wish.
  constructor() {
    // If you define a constructor, always call super() first!
    // This is specific to CE and required by the spec.
    super();

    // Setup a click listener on <app-drawer> itself.
    this.addEventListener('click', e => {
      // Don't toggle the drawer if it's disabled.
      if (this.disabled) {
        return;
      }
      this.toggleDrawer();
    });
  }

  toggleDrawer() {
    ...
  }
}

customElements.define('app-drawer', AppDrawer);
```

여기서는 `open`,`disabled` 프로퍼티와 `toggleDrawer()` 메소드를 갖고있는 drawer를 만들었다.
당연히 HTML 어트리뷰트들을 프로퍼티 형태로 반영하고 있다.

custom element의 깔끔한 점은 클래스 정의 내에서 DOM 엘리먼트 자체(클래스의 인스턴스)를 참조한다는 것이다.
이 예에서는 `<app-drawer>`를 말한다.

이는 엘리먼트가 독자적인 `click` 리스너를 연결할 수 있는 방법을 알려준다.

이벤트 리스너에만 국한되지도 않는다.
모든 DOM API는 엘리먼트 코드 내에서 사용 가능하다.

이를 사용하여 엘리먼트의 프로퍼티에 접근하고, 하위 항목(`this.children`)이나
쿼리 노드(`this.querySelectorAll ( '. items')`) 등을 inspection 하자

## 커스텀 엘리먼트 리액션

커스텀 엘리먼트가 살아있는 동안 코드를 실행하기 위한 특별한 **라이프사이클 훅**(`lifecycle hook`)을 정의할 수 있다.
이를 **커스텀 엘리먼트 리액션**이라고 한다.

|Name | Called when|
|:---:|:---|
`constructor` | - 엘리먼트의 인스턴스가 생성되거나 [갱신 될 때](#element-upgrades)|\
| | - state 초기화, event listeners 세팅, 또는 [섀도우돔](#shadow-dom)|\
| | 을 생성할 때 유용하다.|\
| | - [spec](https://html.spec.whatwg.org/multipage/scripting.html#custom-element-conformance)|
| `connected` | - DOM 에 element 가 insert 될 때마다|\
| | - setup code(such as fetching resources or rendering) 실행에 유용하다.|\
| | - 대게 지금까지 작업 delay 하는데 사용했을 것이다.[^1]|
|`disconnected` | - DOM 에서 element 가 제거될 때마다|\
| | - clean up code를 실행할 때 유용한다.|
|`attributeChangedCallback(attrName, oldVal, newVal)` | - [observed 어트리뷰트](#observing-changes-to-attributes)|\
| | 가 추가, 제거, 갱신, 치환될 때|\
| | - 또, parser에 의해 엘리먼트가 생성될 때, 엘리먼트가 갱신될 때의 초기값에 대해서 호출된다.|\
| | - 주의: `observedAttributes` 프로퍼티에 열거된 어트리뷰트만 이 콜백을 받을 수 있다.|
|`adoptedCallback` | 커스텀 엘리먼트가 새로운 `document` 로 옮겨질 때|\
| | - 예를 들어, `document.adoptNode(el)` 가 호출될 때.|

:::warning Note
Note: 브라우저는`attributeChangedCallback()` 을 `observedAttributes` array
안에 list 되어있는 어트리뷰트에 대해서만 호출한다. [어트리뷰트 변화 관찰하기](#observing-changes-to-attributes)

본질적으로 이것은 성능 최적화다.
사용자가 `style`이나 `class`같은 공통 속성을 변경할 때 수많은 콜백으로 스팸당하길 원하지 않는다.
:::

**리액션 콜백은 동기적**이다.

누군가 `el.setAttribute()` 를 엘리먼트에서 호출 했다면,
브라우저는 곧바로 `attributeChangedCallback()`를 호출한다.
또 다른 예로, 엘리먼트가 DOM 에서 제거 되었을 때(예를들면, 사용자가 `el.remove()`를 호출했을 때),
`disconnectedCallback()`를 바로 호출한다.

- `<app-drawer>`에 커스텀엘리먼트 리액션 추가하기

```js
class AppDrawer extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.
    ...
  }
  connectedCallback() {
    ...
  }
  disconnectedCallback() {
    ...
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    ...
  }
}
```

논리적으로 말이 될 때, 리액션을 정의하자. 만약 엘리먼트가 충분히 복잡하고, `connectedCallback()` 안에서
IndexedDB 로의 connection을 열었을 때, 필수적인 cleanup 작업을 `disconnectedCallback()`안에서 하자.

하지만 조심하라! 엘리먼트가 DOM으로 부터 제거 되었다는 것을 모든 상황에서 보장할 수 없다.
예를 들어 사용자가 탭을 닫았을 경우, `disconnectedCallback()`는 호출되지 않아.

## 프로퍼티와 어트리뷰트

### Reflecting properties to attributes

- HTML 프로퍼티가 HTML attribute 형태로 값이 반영되는 것은 매우 일반적인 일이다.
- 예시 코드: `hidden` 또는 `id` 값이 JS 변경된 경우

```js
div.id = 'my-id';
div.hidden = true;
```

- 값은 살아있는 DOM에 attributes로 적용된다

```html
<div id="my-id" hidden>
```

이를 ["reflecting properties to attributes"(프로퍼티를 어트리뷰트에 반영)](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes)
라 부른다.

대부분 HTML 의 프로퍼티는 다 그렇다. 왜냐?
어트리뷰트는 엘리먼트를 선언적으로 configuring 하는데 유용하고,
몇 API들(접근성이나 CSS 선택자같은 경우) attribute 에 의존적으로 작동하기 때문이다.

이는 엘리먼트의 DOM representation과 자바스크립트 상태를 **동기화**하는 것을 유지할 때 유용하다.
프로퍼티 반영을 사용하는 이유 중 하나는 JS 상태 변화에 따른 사용자 지정 스타일링 적용일 수 있다.

`<app-drawer>`를 떠올려보자.

소비자는 fade out 시키는 것과 `disabled` 일 때 유저와의 상호작용을 막는 것을 원한다면

```css
app-drawer[disabled] {
  opacity: 0.5;
  pointer-events: none;
}
```

`disabled` 프로퍼티가 JS에서 변경된 경우, DOM에 어트리뷰트를 추가하여, 사용자의 셀렉터와 일치시키는 것이 좋다.

다음과 같이엘리먼트는 어트리뷰트에 값을 반영하는 behavior를 제공할 수 있다.

```js
...

get disabled() {
  return this.hasAttribute('disabled');
}

set disabled(val) {
  // Reflect the value of `disabled` as an attribute.
  if (val) {
    this.setAttribute('disabled', '');
  } else {
    this.removeAttribute('disabled');
  }
  this.toggleDrawer();
}
```

### Observing changes to attributes

HTML 어트리뷰트는 초기 상태를 선언하기 편리하다.

```html
<app-drawer open disabled></app-drawer>
```

엘리먼트들은 `attributeChangedCallback`을 정의함으로써 어트리뷰트 변경에 대한 리액션을 할 수 있다.
브라우저는 이 메소드를 `observedAttributes` array 내 list 된 어트리뷰트의 매 변경마다 호출할 것이다.

```js
class AppDrawer extends HTMLElement {
  ...

  static get observedAttributes() {
    return ['disabled', 'open'];
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(val) {
    if (val) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  // Only called for the disabled and open attributes due to observedAttributes
  attributeChangedCallback(name, oldValue, newValue) {
    // When the drawer is disabled, update keyboard/screen reader behavior.
    if (this.disabled) {
      this.setAttribute('tabindex', '-1');
      this.setAttribute('aria-disabled', 'true');
    } else {
      this.setAttribute('tabindex', '0');
      this.setAttribute('aria-disabled', 'false');
    }
    // TODO: also react to the open attribute changing.
  }
}
```

예시에서는 `<app-drawer>`에 `disabled` 어트리뷰트가 변경될 때, 추가적인 어트리뷰트를 set 했다.
비록 여기서는 다루지 않을 거지만,
**`attributeChangedCallback` 을 JS 프로퍼티와 어트리뷰트의 동기화를 위해 사용**할 수 있다.

## 엘리먼트 갱신

### Progressively enhanced HTML

`customElements.define()`는 define + register 가 한번에 이루어진다는 의미는 아니다.

**definition 이 등록되기 전에 사용할 수 있다!**

- Progressive enhancement는 custom element의 기능이다.
- 다른말로하면 페이지에서 여러 `<app-drawer>` 엘리먼트를 선언하고
  한참 뒤에도 `customElements.define('app-drawer', ...)`을 invoke 안할 수도 있다는 말이다.
- 이는 브라우저가 [unknown tags](#unknown-elements-vs-undefined-custom-elements) 덕분에,
  잠재적인 커스텀 엘리멘트를 다르게 처리하기 때문이다.
- `define()`을 호출하는 과정과 class 정의를 존재하는 엘리먼트에 endowing하는 과정을 "elements upgrade"라고 한다.
  
태그 이름이 정의되는 시점을 알기 위해 `window.customElements.whenDefined()`를 사용

- 엘리먼트가 정의될 때 resolve하는 Promise를 반환

```js
customElements.whenDefined('app-drawer').then(() => {
  console.log('app-drawer defined');
});
```

- 자식 엘리먼트의 set이 갱신될 때까지 작업 지연

```js
<share-buttons>
  <social-button type="twitter"><a href="...">Twitter</a></social-button>
  <social-button type="fb"><a href="...">Facebook</a></social-button>
  <social-button type="plus"><a href="...">G+</a></social-button>
</share-buttons>

// Fetch all the children of <share-buttons> that are not defined yet.
let undefinedButtons = buttons.querySelectorAll(':not(:defined)');

let promises = [...undefinedButtons].map(socialButton => {
  return customElements.whenDefined(socialButton.localName);
});

// Wait for all the social-buttons to be upgraded.
Promise.all(promises).then(() => {
  // All social-button children are ready.
});
```

:::warning Note
커스텀 엘리먼트가 정의되기 전 림보하는 상태라고 생각한다.

[spec](https://dom.spec.whatwg.org/#concept-element-custom-element-state)
은 엘리먼트의 상태를 **undefined**, **uncustomized**, 또는 **custom**이라 정의한다.
빌트 인 엘리먼트(`<div>` 같은 것)는 항상 **defined**다.
:::

## Element-defined 콘텐츠

커스텀 엘리먼트는 스스로의 콘텐츠를 코드 안 DOM API들을 사용하여 관리할 수 있다. 이 경우 리액션이 편리하다!

- default HTML 만들기

```js
customElements.define('x-foo-with-markup', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<b>I'm an x-foo-with-markup!</b>";
  }
  ...
});
```

- 결과

```html
<x-foo-with-markup>
 <b>I'm an x-foo-with-markup!</b>
</x-foo-with-markup>
```

:::warning Note
엘리먼트의 자식을 새로운 콘텐츠로 재작성하는 것은 일반적으로 좋은 아이디어가 아니다.(because it's unexpected)
사용자가 엘리먼트 안에 입력한 마크업이 날라가면 당황할 것이다. 이럴 때는 섀도우 돔을 사용하자.
:::

### 섀도우돔 사용하는 엘리먼트 만들기

:::warning Note
이 아티클에서는 섀도우돔의 기능을 다루지는 않을 것이다. 하지만 커스텀 엘리먼트와 조합하면 강력한 API가 된다.
섀도우 돔은 자체적으로 composition 툴이다. 커스텀 엘리먼트와 같이 사용할 경우, 마법같은 일이 일어난다.
:::

섀도우 돔은 엘리먼트가 페이지의 나머지 부분과 분리 된 DOM 청크를 소유, 렌더링 및 스타일링하는 방법을 제공한다.

- heck, 단일 태그 내에서 전체 앱을 숨길 수도 있다.

```html
<!-- chat-app's implementation details are hidden away in Shadow DOM. -->
<chat-app></chat-app>
```

- 커스텀 엘리먼트에서 사용하기 위해서는 `this.attachShadow` 를 constructor 내에서 호출해야한다.

```js
let tmpl = document.createElement('template');
tmpl.innerHTML = `
  <style>:host { ... }</style> <!-- look ma, scoped styles -->
  <b>I'm in shadow dom!</b>
  <slot></slot>
`;

customElements.define('x-foo-shadowdom', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

    // Attach a shadow root to the element.
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }
  ...
});
```

:::tip Note
위의 예시에서는 DOM 을 클론하기 위해 `shadowRoot` 의 `innerHTML` 에 설정하는 것 대신 `template` 엘리먼트를 사용하였다.
이 테크닉은 HTML parse 비용을 줄여준다.
`template` 의 콘텐츠가 한 번 parse 되는데 반해, `innerHTML`을 `shadowRoot`에서 호출하게 되면
각 인스턴스에 HTML 을 parse 하게 된다.
:::

- 예시의 사용

```html
<x-foo-shadowdom>
  <p><b>User's</b> custom text</p>
</x-foo-shadowdom>

<!-- renders as -->
<x-foo-shadowdom>
  #shadow-root
    <b>I'm in shadow dom!</b>
    <slot></slot> <!-- slotted content appears here -->
</x-foo-shadowdom>
```

### `template`으로 엘리먼트 만들기

[`<template>`](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element)
엘리먼트는 parse 되고, 페이지로드시 inert 되며, runtime에 활상화되는 DOM fragments 를 선언할 수 있게 해준다.
웹 컴포넌트 패밀리의 또 다른 API primitive 다.

**템플릿은 커스텀 엘리먼트의 구조를 선언하는데 있어 이상적인 플레이스홀더다.**

- 템플릿으로 만든 섀도우 돔 콘텐츠와 함께 엘리먼트 등록하기
<!-- markdownlint-disable -->
```html
<template id="x-foo-from-template">
    <style>
    p { color: green; }
  </style>
  <p>I'm in Shadow DOM. My markup was stamped from a &lt;template&gt;.</p>
</template>

<script>
    let tmpl = document.querySelector('#x-foo-from-template');
  // If your code is inside of an HTML Import you'll need to change the above line to:
  // let tmpl = document.currentScript.ownerDocument.querySelector('#x-foo-from-template');

  customElements.define('x-foo-from-template', class extends HTMLElement {
      constructor() {
          super(); // always call super() first in the constructor.
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
    ...
  });
</script>
```
<!-- markdownlint-enable -->

이 몇줄의 코드는 강력한 한방을 가지고 있다. 어떤 일어나는지 이해해보자.

These few lines of code pack a punch. Let's understand the key things going on:

1. HTML 에서 새로운 Element 정의함: `<x-foo-from-template>`
1. 엘리멘트의 섀도우 돔이 `<template>`로 만들어짐
1. 섀도우돔 덕에 엘리먼트의 DOM은 엘리먼트에 대해 지역적(local)임.
1. 섀도우돔 덕에 엘리먼트의 internal CSS 는 엘리먼트에 대해 scoped.

## 커스텀 엘리먼트 스타일링

섀도우 돔을 이용해 엘리먼트만의 스타일링을 하더라도, 사용자가 추가로 스타일링을 할 수있다.

이걸 "user-defined styles"(사용자 지정 스타일)이라한다.

```html
<!-- user-defined styling -->
<style>
  app-drawer {
    display: flex;
  }
  panel-item {
    transition: opacity 400ms ease-in-out;
    opacity: 0.3;
    flex: 1;
    text-align: center;
    border-radius: 50%;
  }
  panel-item:hover {
    opacity: 1.0;
    background: rgb(255, 0, 255);
    color: white;
  }
  app-panel > panel-item {
    padding: 5px;
    list-style: none;
    margin: 0 7px;
  }
</style>

<app-drawer>
  <panel-item>Do</panel-item>
  <panel-item>Re</panel-item>
  <panel-item>Mi</panel-item>
</app-drawer>
```

섀도우 돔에서 스타일 정의를 했음에도 어떻게 CSS 지정이 동작하는지 궁금할 것이다.

지정하는 것의 관점으로 볼땐 user styles 가 승리한다. 얘네들은 언제나 element-defined 스타일링을 오버라이드한다.

[섀도우돔 사용하는 엘리먼트 만들기](#섀도우돔-사용하는-엘리먼트-만들기)를 참고

### Pre-styling unregistered elements

엘리먼트가 [갱신](#엘리먼트-갱신)하기 전에, CSS에서 `:defined` pseudo-class를 사용하여 타겟팅을 할 수 있다.
이는 컴포넌트를 pre-styling 하는데 유용하다.
예를 들면, 정의되지 않은 컴포넌트를 숨기고 정의 될 때 나타나게 하는 것으로, 레이아웃이나 다른 visual FOUC[^2] 를 막을 수 있다.

- `<app-drawer>`를 정의되기 전에 숨기기

```css
app-drawer:not(:defined) {
  /*Pre-style, give layout, replicate app-drawer's eventual styles, etc.*/
  display: inline-block;
  height: 100vh;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
```

`<app-drawer>` 가 정의되면, `app-drawer:not(:defined)` 선택자는 더 이상 매치하지 않는다.

## 엘리먼트 확장하기

- 커스텀 엘리먼트 API 는 새로운 HTML 엘리먼트를 생성하는데 유용하다.
- 근데 또 다른 커스텀 엘리먼트나 브라우저의 빌트인 HTML을 확장하는데도 유용하다!

### Extending a custom element

- class definition으로 확장한다.
- `<fancy-app-drawer>` 생성하기 (`<app-drawer>`를 확장하는)
<!-- markdownlint-disable -->
```js
class FancyDrawer extends AppDrawer {
  constructor() {
    super(); // always call super() first in the constructor. This also calls the extended class' constructor.
    ...
  }

  toggleDrawer() {
    // Possibly different toggle implementation?
    // Use ES2015 if you need to call the parent method.
    // super.toggleDrawer()
  }

  anotherMethod() {
    ...
  }
}
<!-- markdownlint-enable -->
customElements.define('fancy-app-drawer', FancyDrawer);
```

### Extending native HTML elements

더 팬시한 `<button>`을 만들고 싶어한다고 가정하자. `<button>` behavior와 functionality를 복제하는 것보다,
커스텀 엘리먼트를 사용하여 이미 존재하는 엘리먼트를 progressively enhance 하는 것이 낫다.

customized built-in 엘리먼트는 browser's built-in HTML 태그들을 확장한 커스텀 엘리먼트들과 같다.
가장 큰 이점은 기존 기능들(DOM properties, methods, accessibility)을 물려받는 다는 것이다.
progressive 웹앱을 작성하기 위해선, 이미 존재하는 HTML 엘리먼트를 progressively enhance하는 것이 좋다!

:::warning Note
지금은 Chrome 67 만 customized built-in elements([status](https://www.chromestatus.com/feature/4670146924773376))
를 지원한다. Edge 랑 Firefox 은 구현 예정이거나 구현중이다. 하지만 Safari 구현하지 않기로 결정했다.
이것은 접근성과 progressive enhancement에 있어 안 좋은 소식이다.

native HTML 을 확장하는 것이 유용하다고 생각한다면, 509 와 662 에 목소리를 내보자.

<https://github.com/w3c/webcomponents/issues/509>
<https://github.com/w3c/webcomponents/issues/662>
:::

엘리먼트를 확장하기 위해 알맞은 DOM interface 를 확장하여 class definition 을 생성해야 한다.
예를 들면, `<button>` 을 extends 하는 엘리먼트는 `HTMLElement`를 대신 `HTMLButtonElement`를 상속해야한다.

유사하게, `<img>` 태그는 `HTMLImageElement` 를 상속한다.

- `<button>` extends

```js
// See <https://html.spec.whatwg.org/multipage/indices.html#element-interfaces>
// for the list of other DOM interfaces.
class FancyButton extends HTMLButtonElement {
  constructor() {
    super(); // always call super() first in the constructor.
    this.addEventListener('click', e => this.drawRipple(e.offsetX, e.offsetY));
  }

  // Material design ripple animation.
  drawRipple(x, y) {
    let div = document.createElement('div');
    div.classList.add('ripple');
    this.appendChild(div);
    div.style.top = `${y - div.clientHeight/2}px`;
    div.style.left = `${x - div.clientWidth/2}px`;
    div.style.backgroundColor = 'currentColor';
    div.classList.add('run');
    div.addEventListener('transitionend', e => div.remove());
  }
}

customElements.define('fancy-button', FancyButton, {extends: 'button'});
```

native element 를 확장할 때 `define()`을 호출이 살짝 변경되는 것에 주목하자.
세번째 파라미터는 어떤 태그를 확장할지를 브라우저에 말해준다.
이는 필수적인데, 많은 HTML 태그들이 동일한 DOM 인터페이스를 공유하고 있기 때문이다.

- `<section>`, `<address>`, 그리고 `<em>` (among others) 모두 `HTMLElement`를 공유한다.
- `<q>` 랑 `<blockquote>`는 `HTMLQuoteElement`를 공유한다.
- etc..
- `{extends: 'blockquote'}`를 지정하는 것은 브라우저에게 `<blockquote>`을 souped-up 하는 것을 알게해준다.
  - `<q>`가 아니고 말이다.
  - [HTML spec - full list of HTML's DOM interfaces](https://html.spec.whatwg.org/multipage/indices.html#element-interfaces)

:::tip Note
`HTMLButtonElement`를 확장하는 것은 우리의 팬시한 버튼에 모든 `<button>`의 DOM 프로퍼티/메소드를 endow한다.

이는 우리가 직접 구현할 필요가없는 것들
(`disabled` 프로퍼티, `click()` 메서드, `keydown` 리스너, `tabindex` 관리)을 체크한다.
대신, `drawRipple()` 메소드를 사용하여 `<button>`을 custom functionality 왐하께
procressively enhancing를 할 수 있다.
더 적은 코드, 더 많은 재사용!
:::

- 사용자는 customized built-in element 를 몇 가지 방법으로 이용할 수 있다.
- `is=""` 어트리뷰트를 native 태그에 추가함으로써 customized built-in element 를 선언할 수 있다.

```html
<!-- This <button> is a fancy button. -->
<button is="fancy-button" disabled>Fancy button!</button>
```

- 자바스크립트로 인스턴스 생성

```js
// Custom elements overload createElement() to support the is="" attribute.
let button = document.createElement('button', {is: 'fancy-button'});
button.textContent = 'Fancy button!';
button.disabled = true;
document.body.appendChild(button);
or use the new operator:

let button = new FancyButton();
button.textContent = 'Fancy button!';
button.disabled = true;
```

- `<img>` 확장 예시

```js
customElements.define('bigger-img', class extends Image {
  // Give img default size if users don't specify.
  constructor(width=50, height=50) {
    super(width *10, height* 10);
  }
}, {extends: 'img'});
```

- 컴포넌트 정의

```html
<!-- This <img> is a bigger img. -->
<img is="bigger-img" width="15" height="20">
```

- 또는 자바스크립트로 인스턴스 생성

```js
const BiggerImage = customElements.get('bigger-img');
const image = new BiggerImage(15, 20); // pass constructor values like so.
console.assert(image.width === 150);
console.assert(image.height === 200);
```

## Misc details

### Unknown elements vs. undefined custom elements

HTML 은 작업하기에 유연하고 lenient하다.
예를 들어, `<randomtagthatdoesntexist>`를 페이지에서 선언하면, 브라우저는 이를 승인하는데 문제가 없다.

왜 non-standard 태그가 동작할까?

그 답은 HTML specification 이 허용해주기 때문이다.
스펙에서 정의되지않은 엘리먼트는 HTMLUnknownElement로 parse 된다.

커스텀 엘리먼트에 관해서는 좀 다르다. 잠재적인 커스텀 엘리먼트는 그들이 valid name("-"를 포함한)으로 생성되면,
HTMLElement 으로 parse 된다.

브라우저가 이를 적용하는지 체크해볼 수 있다. ctrl / command + shift + j로 콘솔을 열어 다음 코드들을 복붙해보자.

```js
// "tabs" is not a valid custom element name
document.createElement('tabs') instanceof HTMLUnknownElement === true

// "x-tabs" is a valid custom element name
document.createElement('x-tabs') instanceof HTMLElement === true
```

## API Reference

`customElements` global 은 커스텀엘리먼트와 관련된 유용한 메소드들 정의한다.

- `define(tagName, constructor, options)`

```js
customElements.define('my-app', class extends HTMLElement { ... });
customElements.define(
  'fancy-button', class extends HTMLButtonElement { ... }, {extends: 'button'});
```

- `get(tagName)`
  - 가능한 커스텀 엘리먼트 이름이 주어지고, 엘리먼트의 컨스트럭터를 반환한다. 등록이 되어있지 않으면 `undefined` 반환.

```js
let Drawer = customElements.get('app-drawer');
let drawer = new Drawer();
```

- `whenDefined(tagName)`
  - 커스텀 엘리먼트가 정의되었을 때 resolve 하는 Promise 반환.
  - 이미 엘리먼트가 정의되었으면 곧바로 resolve.
  - 불가능한 태그명일 때 reject

```js
customElements.whenDefined('app-drawer').then(() => {
  console.log('ready!');
});
```

## History and browser support

- 지난 몇년 간 웹 컴포넌트를 이용해왔다면, Chrome 36+ 은 `customElements.define` 말고
  `document.registerElement()`가 구현되어 있는 것을 알것이다.
- 지금 이건 표준에서 deprecated version인 v0으로 간주된다.
  - [v0 스펙 관련 - html5rocks 아티클](https://www.html5rocks.com/en/tutorials/webcomponents/customelements/)
- `customElements.define()`이 가장 최신이며 브라우저 벤더들이 구현하기 시작한 것이다.
- 이를 Custom Elements v1으로 부른다.

### Browser support

- Chrome 54 ([status](https://www.chromestatus.com/features/4696261944934400)),
- Safari 10.1 ([status](https://webkit.org/status/#feature-custom-elements)),
- Firefox 63 ([status](https://platform-status.mozilla.org/#custom-elements))
- Edge `개발 중` ~~역시 구데기~~

custom elements 기능 감지(feature detection)를 위해서는 `window.customElements` 존재 체크하기

```js
const supportsCustomElementsV1 = 'customElements' in window;
```

### Polyfill

- [standalone polyfill](https://github.com/webcomponents/custom-elements/)
이 Custom Elements v1에 대해 존재
- 하지만 [webcomponents.js loader](https://github.com/webcomponents/webcomponentsjs#using-webcomponents-loaderjs)
  를 사용하여 web components polyfills을 최적화 로드하는 것을 권장
- 로더는 브라우저가 요구하는 필수 pollyfills만 비동기적으로 로드하기 위해 기능 감지를 사용한다.

:::warning Note
만약 프로젝트가 ES5 로 트랜스파일 되거나, ES5를 사용할 경우 [custom-elements-es5-adapter.js](https://github.com/webcomponents/webcomponentsjs#custom-elements-es5-adapterjs)
룰 추가적으로 사용하라
:::

- 설치하기

```bash
npm install --save @webcomponents/webcomponentsjs
```

- 사용하기
<!-- markdownlint-disable -->
```html
<!-- Use the custom element on the page. -->
<my-element></my-element>

<!-- Load polyfills; note that "loader" will load these async -->
<script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js" defer></script>

<!-- Load a custom element definitions in `waitFor` and return a promise -->
<script type="module">
  function loadScript(src) {
      return new Promise(function(resolve, reject) {
          const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  WebComponents.waitFor(() => {
      // At this point we are guaranteed that all required polyfills have
    // loaded, and can use web components APIs.
    // Next, load element definitions that call `customElements.define`.
    // Note: returning a promise causes the custom elements
    // polyfill to wait until all definitions are loaded and then upgrade
    // the document in one batch, for better performance.
    return loadScript('my-element.js');
  });
</script>
```
<!-- markdownlint-enable -->

:::danger Note
**defined** CSS pseudo-class cannot be polyfilled.
:::

[^1]: 원문 - Generally, you should try to delay work until this time.
[^2]: Flash Of Unstyled Content, 스타일을 불러오기 전 적용되지 않은 페이지가 잠시 나타나는 현상
