# Typescript 에서 private class fields 사용하기

- typescript 3.8.3 이상, target은 es2015 이상
- emit 된 js 코드를 보면 알겠지만 weakmap 까지 적용되어 노출까지 숨겨져 있다.
- 후에 기회가 되면 weakmap, closure, private fields 에 관한 원리에 대해 알아보자.
  
<!-- markdownlint-disable -->
:::: code-group

::: code-group-item Person.ts

```ts
// 3.8 adds private fields, which are a way of declaring a class field to
// be unavailable outside of the containing class, including to subclasses.

// For example, the Person class below does not allow for anyone using an
// instance of the class to read  the firstName, lastName or prefix

class Person {
  #firstName: string;
  #lastName: string;
  #prefix: string;

  constructor(firstName: string, lastName: string, prefix: string) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#prefix = prefix;
  }

  greet() {
    if (navigator.languages[0] === "is") {
      console.log(`Góðan dag, ${this.#firstName} ${this.#lastName}`);
    } else {
      console.log(`Hello, ${this.#prefix} ${this.#lastName}`);
    }
  }
}

let jeremy = new Person("Jeremy", "Bearimy", "Mr");

```

:::
::: code-group-item Person.js

```js
"use strict";
// 3.8 adds private fields, which are a way of declaring a class field to
// be unavailable outside of the containing class, including to subclasses.
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _firstName, _lastName, _prefix;
// For example, the Person class below does not allow for anyone using an
// instance of the class to read  the firstName, lastName or prefix
class Person {
    constructor(firstName, lastName, prefix) {
        _firstName.set(this, void 0);
        _lastName.set(this, void 0);
        _prefix.set(this, void 0);
        __classPrivateFieldSet(this, _firstName, firstName);
        __classPrivateFieldSet(this, _lastName, lastName);
        __classPrivateFieldSet(this, _prefix, prefix);
    }
    greet() {
        if (navigator.languages[0] === "is") {
            console.log(`Góðan dag, ${__classPrivateFieldGet(this, _firstName)} ${__classPrivateFieldGet(this, _lastName)}`);
        }
        else {
            console.log(`Hello, ${__classPrivateFieldGet(this, _prefix)} ${__classPrivateFieldGet(this, _lastName)}`);
        }
    }
}
_firstName = new WeakMap(), _lastName = new WeakMap(), _prefix = new WeakMap();
let jeremy = new Person("Jeremy", "Bearimy", "Mr");
```

:::
::::

<!-- markdownlint-enable -->
:::tip

- [타입스크립트 핸드북 - 클래스 주의사항](https://www.typescriptlang.org/docs/handbook/2/classes.html#caveats)
- [MDN 문서 - private class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [typescript playground 예제](https://www.typescriptlang.org/play?ts=3.8.3#example/private-class-fields)
:::

:::danger
아직 firefox 등의 몇몇 브라우저에서는 지원하지 않으므로 유의
:::
