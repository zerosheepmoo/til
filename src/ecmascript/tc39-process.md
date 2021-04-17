# tc39 process

> [tc39 프로세스 문서 소스](https://tc39.es/process-document/)

:::tip
필요한 일부만 내용을 긁어왔으므로 더 자세한 내용은 원본 소스를 참고
:::

## 앞서

- [tc39](https://www.ecma-international.org/technical-committees/tc39/?tab=general):
  ecma의 기술위원회(technical committee) 중 262 명세관리를 맡고 있는 위원회
  - [회의록](https://github.com/tc39/notes)
  - [proposal](https://github.com/tc39/proposals)

## 과정

TC39 위원회는 ECMAScript 프로그래밍 언어를 발전시키고, 명세를 작성하는 일을 담당한다.
위원회는 합의방식(consensus)로 운영되며, 적절하다고 판단되는 명세를 바꿀 수 있는 재량권이 있다.
idea에서 완전한 specified featrue으로 addition 을 발전시키기위한 가이드라인을 제공하는 프로세스를
통해 이루어진다.
이 과정은 5단계(stage)로 나누는데, 허수아비 단계(strawperson stage)와 4개의 성숙(maturity) 단계로 이루어져 있다.

stage 1 부터는 TC39 위원회에 의해 소유되야한다. proposal 이 수락되면, 외부 레포지토리를 이전해야한다.

### ECMAScript Proposal Stages

#### Table 1

| |Stage|목적|입장 조건|
|:---:|:---:|:---|:---|
|0 | Strawperson | 명세에 입력 허용 | None |
|1 | Proposal | - addition 주장 | - addition을 진행할 "챔피언"식별 |\
|  | | - 솔루션의 형태 설명 | - 문제, 요구 사항, 그리고 솔루션의 일반적인 형태를 설명하는 산문|\
|  | | - 잠재적 인 문제 식별| - 사용 예시 illustration |\
|  | | | - 핵심 알고리즘, 추상화 및 의미론에 대한 논의 |\
|  | | | - 잠재적인 "cross-cutting" concerns[^1] 및 구현 challenges/complexity 식별 |\
|  | | | 위의 요구사항을 capture 하는 제안에 대해 공개적으로 사용 가능한 레포지토리 |\  
|2 | Draft | 공식적인 spec language 를 통해 syntax 와 semantics를 정확하게 설명| - 전 단계 입장 조건|\
| | | | - 초기 spec text |
|3| Candidate | 추가 개선 시 구현 피드백과 사용자 피드백이 필요함을 나타냄 |  - 전 단계 입장 조건 |\
| | | | - spec text 완성 |\
| | | | - 지정된 리뷰어가 현재 spec text에 서명|\
| | | | - 모든 ECMAScript 편집자가 현재 spec text에 서명|
|4| Finished | addition이 공식 ECMAScript 표준에 포함될 준비가 됨 | - 전 단계 입장 조건 |\
| | | | - Test262[^4] 승인 테스트는 주요 사용 시나리오에 대해 작성된 후 병합|\
| | | | - 승인 테스트를 통과한 두 개의 호환가능한 구현|\
| | | | - 상당한 현장 경험[^5]|\
| | | | - 통합된 사양 텍스트를 [tc39/ecma262](https://github.com/tc39/ecma262)로 pull request전송|

#### Table 2

| |수락이 나타내는 것|스펙 퀄리티| 수락 후 변경 | 구현유형[^2]|
|:---:|:---|:---|:--:|:--:|
|0 | N/A | N/A | N/A | N/A|
|1 | 위원회는 문제 공간, 솔루션 및 cross-cutting concerns을 검토|없음|Major|Polyfills / demos|
|2 | 개발되어 결국 표준에 포함될 기능 |- Draft: 모든 major semantics, syntax, API 다루기|Incremental|Experimental|\
| | |- 뿐만 아니라 TODOs, placeholders, 편집 문제도 예상| |
|3| - 완전한 솔루션이다.|Complete: 모든 semantics, syntax, API의 완전한 설명|Limited[^3]|Spec compliant|\
| | - 구현 경험, 상당한 사용, 외부 피드백 없이는 추가 작업 불가능| | |
|4| 해당 addition은 곧 표준 개정판에 포함됨|Final: 구현 경험의 결과를 반영한 모든 변경 사항이 통합|None|Shipping|

#### Spec revisions and scheduling

TC39 intends to submit a specification to the ECMA General Assembly for ratification
in July of each year.

The following is an approximate timeline for producing a new spec revision:

- February 1: Candidate Draft is produced.
- February - March: 60 day royalty-free opt-out period.
- March TC39 Meeting: stage 4 proposals are incorporated, final semantics are approved,
and the new spec version is branched from master. Only editorial changes are accepted
from this point forward.
- April-June: ECMA CC and ECMA GA review period.
- July: Approval of new standard by the ECMA General Assembly

[^1]: <https://en.wikipedia.org/wiki/Cross-cutting_concern> / 국문 위키피디아는 "횡단 관심사"로 되어있다.
[^2]: This column does not indicate a requirement for advancement, but simply a general expectation.
[^3]: only those deemed critical based on implementation experience
[^4]: <https://github.com/tc39/test262>
[^5]: such as that provided by two independent VMs
