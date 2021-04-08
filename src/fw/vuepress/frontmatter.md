# Frontmatter

- 마크다운 파일은 [YAML](https://yaml.org/)를 포함할 수 있다.
- 상단에 위치해야한다.
- triple-dashed lines 로 래핑되어야 한다.

## Homepage

> 홈페이지에서만 효과있는 프론트매터

```yaml
---
home: true 
# public file path
heroImage: /images/hero.png
# url
heroImage: https://vuejs.org/images/logo.png
heroAlt: 'hero-image'
heroText: 'About Something'
tagline: 'This site is about something.'
actions:
  - text: Get Started
    link: /guide/getting-started.html
    type: primary
  - text: Introduction
    link: /guide/
    type: secondary
features:
  - title: Simplicity First
    details: Minimal setup with markdown-centered project structure.
  - title: Vue-Powered
    details: Enjoy the dev experience of Vue, use Vue components in markdown.
  - title: Performant
    details: VuePress generates pre-rendered static HTML for each page.
footer: <a href="https://somewhere">shuuuuu</a> with me
footerHTML: true
---
```

- `home`은 false가 default / true 일 경우 **homepage**, false 일 경우 [normal page](#normal-page)
- `heroImage`: hero image 경로
- `heroAlt`: hero image 의 `alt` 어트리뷰트
- `heroText`: `string | null` / Site title 로 fallback
- `tagline`: `string | null` / Site description 으로 fallback
- `actions`: 액션버튼 / `type`은 optional
- `features`: 특징리스트
- `footer`: 푸터 문자열
- `footerHtml`: 푸터 문자열을 html 코드로 해석함. (innerHTML)

## Normal Page

```yaml
---
editLink: true
lastUpdated: true
contributors: true
sidebar: false
# NavLink
prev:
  text: Get Started
  link: /guide/getting-started.html

# NavLink - external url
prev:
  text: GitHub
  link: https://github.com

# string - page file path
prev: /guide/getting-started.md

# string - page file relative path
prev: ../../guide/getting-started.md

next:
  text: Same structure with prev
  link: https://somehow
---
```

- `editLink`: 편집하기 링크 활성화 유무
- `lastUpdated`: 최종갱신 타임스탬프 표시 유무
- `contributors`: 기여자 표시 유무
- `sidebar`: `false | 'auto' | SidebarConfigArray | SidebarConfigObject`
- `prev`: 이전 페이지 링크 / 설정하지 않을 시 sidebar config 에서 추론
- `next`: 다음 페이지 링크 / 설정하지 않을 시 sidebar config 에서 추론
