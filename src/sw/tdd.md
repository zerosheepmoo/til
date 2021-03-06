---
sidebar: 'auto'
---
# Test Driven Development

> [tdd wikipedia](https://en.wikipedia.org/wiki/Test-driven_development)
>
> 작성 중....

## Overview

- Software Development Process
- 소프트웨어의 개발 전에 테스트 케이스를 만듦
- Kent Beck
- test-first programming concepts of extreme programming 와 관련

## Cycle

> [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
![Graphical representation](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/TDD_Global_Lifecycle.png/2560px-TDD_Global_Lifecycle.png)

- 아래의 과정은 서적 _Test-Driven Development by Example_ [^1]을 기반으로 작성되었다.

### 1. 테스트 추가(Add a test)

- 패스하는 테스트를 작성함으로써 새로운 기능의 추가를 시작한다 **iff** 기능 명세(feature's spec)에 만족하는 한.
- 개발자는 사용 케이스와 사용자 스토리를 묻는 것으로 명세를 찾을 수 있다.
- TDD의 key benefit 은 개발자가 코드를 작성하기 전에 요구사항(requirements)에 집중하게 만드는데에 있다.
- 이것은 코드작성 다음에 유닛테스트를 작성한다는 전형적인 관습과는 대비된다.

### 2. 모든 테스트 실행(Run all tests)

- 새로운 테스트는 기대되는 이유(expected reason)에 의하여 실패하여야 한다.
- 이는 원하는 기능에 대한 새로운 코드가 필요함을 나타낸다.
- test harness[^2] 가 잘 작동하는지 검증한다.
- 새로운 테스트에 결함이 있는지, 아니면 항상 통과할 것인지에 대한 가능성을 배제한다.

### 3. 테스트를 통과하는 가장 간단한 코드 작성(Write the simplest code that passes the new test)

- Inelegant or hard code 도 괜찮다.
- 코드는 5단계에서 연마될 것이기에
- 코드는 테스트된 functionality를 무시하고 추가 될 수는 없다.

### 4. 모든 테스트 통과(All tests should now pass)

- 만약 실패가 있다면, 새로운 코드는 통과될 때까지 고쳐져야한다.
- 이는 새로운 코드가 테스트 요구사항을 충족 시키는 것을 보장한다.
- 존재하는 기능들을 망가뜨리지 않는 것도 보장한다.

### 5. 리팩토링(Refactor as needed)

- 가독성과 유지보수성을 위해 리팩토리한다.
- 특히 하드코드 된 테스트 데이터는 제거되어야 한다.
- 리팩토링 후 테스트 슈트를 실행하는 것은 어떠한 기능도 망가지지 않았음을 보장한다.
- 예시
  - 논리적으로 알맞은 위치에 코드 배치
  - 중복 코드 삭제
  - 이름을 ([self documenting](https://en.wikipedia.org/wiki/Self-documenting_code))하게
  - 작은 단위로 메소드 쪼개기
  - 상속 위계 재배치

### 6. 반복

- 위의 사이클은 각 기능 단위마다 반복된다.
- 테스트들은 small, incremental, 그리고 commits made often 해야한다.
- 이러한 방법으로 새로운 코드가 테스트를 실패했을 경우, 과도하게 디버그하기 보다 프로그래머는 단순히 되돌리기나 revert 하면 된다.
- 외부 라이브러리를 사용할 경우, 라이브러리 자체만 효과적으로 테스트 할 정도로 작은 테스트를 작성하지 않는 것이 중요하다.
  - 라이브러리에 버그가 있거나 개발중인 소프트웨어의 모든 요구 사항을 충족 할만큼 기능이 풍부하지 않다는 이유가없는 한.

## 개발 스타일

> 학습 중

## 모범사례

### Test structure

테스트 케이스의 레이아웃을 효과적으로 만드는 것은 중요하다.
이는 모든 요구 사항 액션들이 완성되어 있음을 보장한며,
테스트 케이스의 가독성을 향상 시키고,
실행흐름을 매끄럽게 만든다.

일관성있는 구조는 self-documenting 테스트 케이스를 빌드하는데 도움을 준다.
테스트 케이스들에 일반적으로 적용되는 스트럭쳐는 다음과 같다.

1. [setup](#setup)
2. [execution](#execution)
3. [validation](#validation)
4. [cleanup](#cleanup)

#### setup

- Unit Under Test (UUT) 또는 전반적인 테스트 시스템을 테스트를 실행하는 데 필요한 상태로 설정.

#### execution

- UUT를 트리거 / 드라이브한다.
  - 이는 목표한 behavior 를 수행하고, 모든 출력을 capture 하기 위함이다.
    - 예를 들면 return values 나, output parameters 같은 출력값
- 이 단계는 주로 아주 간단하다.

#### validation

- 테스트의 결과가 올바른지 검증한다.
- 이 결과들은 UUT 내에서 실행 도중 또는 상태 변화 도중 포착된 명시적인 출력(output)을 포함할 수 있다.

#### cleanup

UUT나 전반적인 테스트 시스템을 테스트 전 상태로 복구한다.
이 복원은 다른 테스트들을 곧바로 이 테스트 다음에 실행할 수 있게 허용해준다.
몇 케이스들에서는 가능한 테스트 실패 분석에 대한 정보를 유지하기 위해, cleanup 은 테스트 setup 전에 테스트를 시작해야한다.

### 개인의 모범 사례

개인이 따를 수도 있는 몇 가지 모범 사례는
일반적인 set-up 과 tear-down 로직을 적절한 테스트 케이스로부터 사용되는(utilized) 지원 서비스로 분리하고,
각 테스트 oracle[^3]이 테스트를 검증하는데 필요한 결과에만 집중하게 하도록 유지하며,
비실시간 운영체제에서의 실행의 관용을 허락하는 시간 관련 테스트(time-realated tests)들을 설계하는 것이다.

늦은 실행에 대해 5~10% 마진을 허용하는 일반적인 관습은 테스트 실행에서 잠재적인 거짓 음성(false negatives)[^4]의 수를 줄여준다.
또 프로덕션 코드와 동일한 관점에서 테스트 코드를 처리하는 것이 좋다.
테스트 코드는 positive 와 negative 케이스 모두에서 올바르게 작동해야 하며, 오래 지속되어야 하고, 가독성과 유지보수성이 좋아야 한다.
팀은 나쁜 습관을 포착하거나 효과적인 기술들을 공유하기 위해 테스트나 테스트 관습을 함께 모으고 검토할 수 있다.

### 피해야할 관습 혹은 anti-patterns

> _[Anti-pattern](https://en.wikipedia.org/wiki/Anti-pattern)_

- 이전에 실행된 테스트 케이스로부터 조작 된 시스템 상태에 의존하는 테스트 케이스를 갖는 것.
  (즉, 항상 known, pre-configured state로부터 유닛테스트를 시작해야한다.)
- 테스트 케이스들 사이의 의존성
  - 테스트 케이스가 서로 의존하는 테스트 슈트는 망가지기 쉽고 복잡하다.
  - 실행 순서를 추정해서는 안된다.
  - 초기 테스트 케이스 또는 UUT 구조의 기본 리팩토링은 관련 테스트에서 점점 더 많은 영향을 미친다
- 상호 의존적(interdependent) 테스트.
  - 상호 의존적 테스트는 cascading false negatives을 유발할 수 있다.
  - 초기 테스트 케이스의 실패가 UUT에 실제 결함이없음에도 이후 테스트 케이스를 망가뜨랴, 결함 분석 및 디버그 비용을 증가시킨다.
- 정확한 실행 behavior 타이밍 또는 퍼포먼스 테스트
- all knowing oracle 을 빌드하는 것. 필요 이상으로 검증하는 오라클은 시간이 지남에 따라 더 비싸고 부서지기 쉽다.
  - 이 매우 일반적인 에러는 위험하다.
    - 복잡한 프로젝트 전반에 미묘하지만, 만연한 시간감소를 유발하기 때문이다.
- 구현 details 테스트
- 느린 실행의 테스트

## 이익

> 원문 참조

## 한계

> 원문 참조

## Test-driven Work

- "Add a check" replaces "Add a test"
- "Run all checks" replaces "Run all tests"
- "Do the work" replaces "Write some code"
- "Run all checks" replaces "Run tests"
- "Clean up the work" replaces "Refactor code"
- "Repeat"

## TDD 와 ATDD

> [Acceptance test-driven developemnt](https://en.wikipedia.org/wiki/Acceptance_test%E2%80%93driven_development)

TDD 는 ATDD 와 관련이 있다.

TDD 는 우선적으로 개발자 툴이며,
이는 잘 쓰여진 코드의 유닛(function, class, module)을 생성하는데 도움을 준다.
이 코드는 연산의 모음들을 올바르게 수행한다.

ATDD 는 커뮤니케이션 툴이며,
고객과 개발자, 테스터들 사이의 요구사항이 잘 정의되었는지 보장한다.

TDD 는 테스트 자동화를 요구한다.

ATDD는 자동화를 요구하진 않지만, 자동화가 regression testing 에 유용하다.

코드 유닛이 요구사항의 일부를 구현하기 때문에, TDD 에서 쓰이는 테스트는 자주 ATDD 테스트로부터 파생 될 수 있다.

ATDD 테스트는 고객이 읽기 쉬워야하지만, TDD는 그럴 필요가 없다.

## TDD and BDD

> [behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development)

BDD는 TDD와 ATDD 관습의 결합이다.
먼저 테스트를 작성하는 관습을 포함하지만, 구현 유닛을 테스트하는 것보다는 behavior를 설명하는 것에 집중한다.
JBehave 나 Cucumber, Mspec, 그리고 Specflow 같은 툴은 프로덕트 오너, 개발자들, 그리고 테스트 엔지너들이 함께
자동 테스트로 전환할 수 있는 behavior를 정의하는 것을 허용하는 구문들을 제공한다.

## Code Visibility

> 원문 참조

## 관련 소프트웨어

> 원문 참조

## Fakes, mocks and integration tests

> 원문 참조

## 복잡한 시스템을 위한 TDD

> 원문 참조

[^1]: Beck, Kent (2002-11-08). Test-Driven Development by Example. Vaseem: Addison Wesley. ISBN 978-0-321-14653-3.
[^2]: 테스트 하네스. 테스트를 진행하기 위한 환경의 일부분으로, 단위 시험이나 모듈 시험에 사용하기 위해 만든 상위의 임시 모듈
[^3]: [테스트 오라클](https://en.wikipedia.org/wiki/Test_oracle). 테스트가 통과되었는지 실패하였는지 결정하는 메커니즘.
[^4]: 통계상 실제로는 양성인데 검사 결과는 음성이라고 나오는 것. 예) 스팸메일인데 아니라고 분류하는 것
