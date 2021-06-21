# 오토마타 이론 기초

[스탠포드 대학교 강의자료](https://cs.stanford.edu/people/eroberts/courses/soco/projects/2004-05/automata-theory/basics.html)

## 오토마톤(automaton)

- 일련(series)의 상태(state)나 구성(configurations)을 움직이면서, 입력에 대해 계산하는 기계의 추상 모델
- 계산의 각 state에서, 트랜지션 함수가 다음 config를 결정하며, 이 구성은 현재 config의 finite 부분에 기초한다.
- 결과적으로 계산이 허용가능한 config 에 도달하기만 하면, 그 입력을 허용하게 된다.
- 가장 일반적이고 강력한 오토마타: **튜링 기계**

### 주요목적

- signal이 주기적으로 샘플링된 곳의 이산 체계의 동적인 행위를 분석하고 설명하기 위함.
- 이러한 이산 체계의 행위는 그 체계가 storage, combinational element가 구성되는 방식에 따라 결정.

#### 그러한 기계의 특성

- `inputs`: 입력 시그널의 유한 집합 I 에서 선택된 symbol 들의 시퀀스.
  - 집합 I 는 {x1, x,2, x3... xk}, where k가 input의 갯수.
- `Outputs`: 유한집합 Z 에서 선택된 symbol 들의 시퀀스.
  - 집합 Z 는 {y1, y2, y3 ... ym}, where m 이 output의 갯수.
- `States`: 유한집합 Q
  - 오토마톤의 타입에 따라 결정됨.

## 4개의 주요 오토마톤

- 유한상태기계: Finite-state machine (FSM)
- 푸쉬다운 오토마타: Pushdown automata (PA)
- 선형 제한 오토마타: Linear-bounded automata (LBA)
- 튜링 기계: Turing machine

### FSM 에 대해

#### FSM 역사

- 여러 분야의 전문가들이 공통의 관심사를 공유하기 시작함.
  - 그것 인간의 생각 프로세스를 모델링하는 것.
  - Warren McCulloch 와 Walter Pitts라는 두명의 neurophysiologist가 처음으로 유한 오토마타의 묘사를 소개함(1943).
- 밀리 기계와 무레 기계(Mealy machine and the Moore machine), (1955-56)
  - 밀리는 current input, state / 무레는 current state 만 고려

#### FSM 이란

> state 집합 Q 가 유한할 때
>
> An automaton in which the state set Q contains only a finite number of elements

- state 트랜지션 함수는 current state 와 input event 를 받고,
  output events와 next state의 집합을 반환.
- input events 가 output events 로 매핑.
- 메모리를 적게 차지하며, 메모리를 유지하지 않는 이상적인 계산 모델.
- 예시: 엘리베이터

A finite-state machine is formally defined as a 5-tuple (Q, I, Z, ∂, W) such that:

Q = state 유한집합
I = input symbol 유한집합
Z = output symbol 유한집합
∂ = mapping of I x Q into Q called the state transition function, i.e. I x Q → Q
W = mapping W of I x Q onto Z, called the output function
A = set of accept states where F is a subset of Q

`State transition function: I → Z`

#### 타입 분류 기준

acceptors: either accept the input or do not
recognizers: either recognize the input or do not
transducers: generate output from given input

### 튜링머신

A Turing machine is formally defined by the set [Q, Σ, Γ, δ, q0, B, F] where

- Q = finite set of states, of which one state q0 is the initial state
- Σ = a subset of Γ not including B, is the set of input symbols
- Γ = finite set of allowable tape symbols
- δ = the next move function , a mapping function from Q x Γ to Q x Γ x {L,R},
  where L and R denote the directions left and right respectively
- q0 = in set Q as the start state
- B = a symbol of Γ, as the blank
- F ⊆ Q the set of final states

Turing machine is capable of changing symbols on its tape and
simulating computer execution and storage.
