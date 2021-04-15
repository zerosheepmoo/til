# Property Descriptor

> [프로퍼티 어트리뷰트 ecma262](https://tc39.es/ecma262/#sec-property-attributes)
>
> [specification type: Property Descriptor](/til/ecmascript/6-2.html#_6-2-5-the-property-descriptor-스펙-타입)

## 의미

- Object 는 논리적으로 보았을 때 properties 의 Collection이다.
- 프로퍼티는 데이터 프로퍼티거나, 엑세서 프로퍼티다.
  - 데이터 프로퍼티: ECMAScript language value 의 key value 와 Boolean 어트리뷰트의 set.
  - 엑세서 프로퍼티: 1~2 개의 엑세서 함수로 된 key value 와 Boolean 어트리뷰트의 set.
  - > A data property associates a key value with an ECMAScript language value
  and a set of Boolean attributes. An accessor property associates a key value
  with one or two accessor functions, and a set of Boolean attributes.

## Data Property Attributes

Attribute Name | Value Domain | Description |
:--:|:--:|---|
[[Value]]| Any ECMAScript language type | The value retrieved by a get access of|\
 | | |the property.|
[[Writable]] | `Boolean` | `false`면, property의 [[Value]] 어트리뷰트를 [[Set]]으로 못바꿈|
|[[Enumerable]]|`Boolean`| - `true`면, for-in enumeration 가능 (see 14.7.5)|\
 | | |- 아닐 경우, 프로퍼티는 non-enumerable 하다고 함.|
|[[Configurable]] | `Boolean` | `false`면, 프로퍼티를 삭제하거나, accessor 프로퍼티로 변경하려 할때,|\
 | | |또는 그것의 attributes (other than [[Value]], or changing [[Writable]] to false)|\
 | | | 를 변경하려 할 때 실패한다.|

## Accessor Property Attributes

Attribute Name | Value Domain | Description |
:--:|:--:|---|
[[Get]] | `Object|Undefined` | function object 여야 한다. 해당 함수의 [[Call]] internal method는|\
|||빈 아규먼트 리스트와 함께 호출되며, 프로퍼티 값을 retrieve하기 위해 프로퍼티 get 접근 때마다 수행된다.|
[[Set]] | `Object|Undefined` | function object 여야 한다. 해당 함수의 [[Call]] internal method는|\
||| assigned value 가 될 단독의 아규먼트와 함께 호출되며, 프로퍼티 set 접근 때마다 수행된다. |\
||| 프로퍼티의 [[Set]] internal method 는 (반드시 그럴필요는 없지만) 프로퍼티의 [[Get]] internal method|\
|||로의 subsequent calls 에 의한 반환값에 영향을 미치게 할 수 있다.\|
|[[Enumerable]]|`Boolean`| - `true`면, for-in enumeration 가능 (see 14.7.5)|\
 | | |- 아닐 경우, 프로퍼티는 non-enumerable 하다고 함.|
[[Configurable]] | `Boolean` | `false`면 프로퍼티를 삭제하거나, data 프로퍼티로 변경하려 할때,|\
 | | | 또는 그것의 attributes 를 변경하려 할 때 실패한다.|

## etc

- [FromPropertyDescriptor abstract operation](https://es.discourse.group/t/i-am-confused-with-6-2-5-4-frompropertydescriptor/739)
  - 어처구니 없는 실수. descriptor의 js object representation 을 return 한다는 사실을 인지못했다.
  - `Object.getOwnPropertyDescriptor` 등에서 사용된다는 점을 명시하자.
  - [관련소스코드: es-abstract](https://github.com/ljharb/es-abstract/blob/144955764b80341bee97c1773f89142b7e507840/2020/FromPropertyDescriptor.js#L9-L36)

## summary

- Data Property attributes는 [[value]], [[Writable]], [[Enumarable]], [[Configurable]]이다.
- Accessor Property attributes는 [[Get]], [[Set]], [[Enumarable]], [[Configurable]]이다.
