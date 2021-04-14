# Typescript 로 Observer Pattern 만들기

> [자바스크립트 디자인패턴 - 옵저버](https://wanago.io/2020/01/20/javascript-design-patterns-observer-typescript/)
> [타입스크립트 옵저버 패턴](https://medium.com/@pagalvin/implement-the-observer-pattern-in-typescript-f0d4b05807f0)

## Observer pattern

옵저버 패턴의 핵심 원리는 event 에 대해 다양한 오브젝트를 notify 하기 위한 subscription 메커니즘을 정의하는 것이다.
notified 오브젝트는 특정 이벤트에 관심이 있음을 명시적으로 state 해야한다. 이는 자바스크립트에서 **일반적인 패턴**이다.
따라서 원리를 이해할 필요가 있다.

### Subject

subject 는 옵저버 리스트를 갖고 있다. 또, 무언가와 communicate 하고 싶을 때 모든 옵저버들을 call 한다.
중복을 막기 위해 `Set`을 사용하자.

```ts
class Subject {
    private observers = new Set<Observer>();

    subscribe(observer: Observer) {
        this.observers.add(observer);
    }

    unsubscribe(observer: Observer) {
        this.observers.delete(observer);
    }

    notify(message: string) {
        this.observers.forEach((observer) => {
            observer.update(message);
        })
    }
}
```

### Observer

```ts
interface Observer {
    update: (message: any) => void;
}
```

```ts
class MyObserver implements Observer {
    update(message: string) {
        console.log(message);
    }
    hello() {
        console.log('Hello world!')
    }
}
```

## 예시

```ts
const subject = new Subject();
 
const observer = new MyObserver();
subject.subscribe(observer);
 
subject.notify('Hello world!');
```
