# 안녕, 뷰프레스

> [vuepress2 documentation](https://vuepress2.netlify.app/)

## 간략히

vuepress 는 markdown 을 원본 텍스트로 사용하여 스태틱 사이트를 생성하는 제너레이터 프레임워크다.
마크다운으로 블로그나 문서사이트를 만들 때 적절하며,
특히 [Vue](https://v3.vuejs.org/)의 사용법을 모르더라도 간편하게 사용할 수 있다.

Vuepress 로 생성된 Site 는 Vue와
[Vue Router](https://next.router.vuejs.org/)
에 의해 동작하는 SPA[^1]다.

각 markdown 파일들을
[markdown-it](https://github.com/markdown-it/markdown-it)
과 함께 HTML로 컴파일된다.

## 사용처

가이드의
[[왜 다른것은 안돼...?]](https://vuepress2.netlify.app/guide/#why-not)
항목을 보면 다른 툴에 비해 vuepress 가 적합한 경우를 설명하고 있다.

외에 개인적으로 왜
[Gatsby](https://www.gatsbyjs.com/)
를 이용하지 않는가를 묻는다면, Simplicity 때문이라 답하고 싶다.
Gatsby보다 Vuepress와 세팅하기 훨씬 간편하며 또, document-friendly 하다고 생각한다.

그렇지만, 결과적으론 **취향차이**인 것 같다. Gatsby는 스태틱 사이트 제너레이터로서 훌륭하며,
[React 문서사이트](https://reactjs.org/)도 Gatsby로 생성된 것이다.
블로그를 생성한 케이스도 왕왕있다.

[^1]: Single Page Application, 서버에서 필요한 것만 동적으로 불러와 다시 작성하는 웹사이트 / 웹앱

## Migration

나에게 vuepress2 는 여러가지 생소하다. 공식 가이드의
[Migrating from v1](https://vuepress2.netlify.app/guide/migration.html#migrating-from-v1)
항목을 참고하자.

## Vitepress

> 참고: [공식가이드](https://vitepress.vuejs.org/)

- 가벼운 vuepress
