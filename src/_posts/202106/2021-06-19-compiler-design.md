---
sidebar: 'auto'
---

# 컴파일러 디자인 요약

> [geek for geeks 포스팅](https://www.geeksforgeeks.org/last-minute-notes-compiler-design-gq/)

## 컴파일러 페이즈

- `symbol table`: 컴파일러에 의해 사용되는 data structure (type과 함께 있는 identifier 들 모음)

### Lexical Analysis

- lexer, lexing, tokenization
- 문자들을 토큰화한다.
- 토큰(lexeme)은 identifier, keyword, operator, separator, literal, comment 따위다.
- lexical grammar: regular grammar

### Syntax Analysis

- parser
- [parse tree](https://en.wikipedia.org/wiki/Parse_tree) 생성
  - CFG 로

### Semantic Analysis

- [영문 위키](https://en.wikipedia.org/wiki/Semantic_analysis_(compilers))
- 파싱 후 필수적인 semantic 정보를 얻기 위함.

### Intermediate Code Generator

### Code Optimizer

### Target Code Generator

## 에러

- Compile-Time Error
  - Lexical: This includes misspellings of identifiers, keywords or operators.
  - Syntactical: missing semicolon or unbalanced parenthesis.
  - Semantical: incompatible value assignment or type mismatches between
    operator and operand.
  - Logical: code not reachable, infinite loop.
