# 촘스키 계층

> [영문 위키](https://en.wikipedia.org/wiki/Chomsky_hierarchy)

## formal lanugauge

- production rule: (left-hand side → right-hand side)
- A formal grammar of this type consists of a finite set of production rules
- 다음 세 심볼의 유한한 시퀀스로 항이 이루어짐.
  - a finite set of nonterminal symbols (몇 production rule 이 아직 적용되지 않음)
  - a finite set of terminal symbols (production rule 을 적용할 수 없음)
  - a start symbol (a distinguished nonterminal symbol)

A formal grammar provides an axiom schema for (or generates) a formal language,
which is a (usually infinite) set of finite-length sequences of symbols
that may be constructed by applying production rules to another sequence of symbols

## 계층

> [해당 섹션](https://en.wikipedia.org/wiki/Chomsky_hierarchy#The_hierarchy)

- type0: recursively enumarable (튜링기계가 멈추는 string)
- type1: context-sensitive
- type2: context-free
  - [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)
- type3: regular
