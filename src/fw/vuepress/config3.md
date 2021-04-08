# Configuration -3-

> [Default Theme Config 레퍼런스 원본](https://vuepress2.netlify.app/reference/default-theme/config.html#basic-config)

## Basic Config

> 필요한 설명만 길게

### `locales`

- Type: `{ [path: string]: Partial<DefaultThemeLocaleData> }`
- Default: `{}`
- Details: Site Config 의 locale 과는 다르다. [다국어지원](./i18n.md) 참고

## Locale Config

일반적인 Config. `locales` 안에서도 사용가능. name 에 관련 링크가 달린 것들이 있음.

### 일반적

|     name    |     type    |   default  |   details  |
| :-----------: | :-----------: | :----------: | ---------- |
|   `home`    |   `string`  |   `'/'`    | - 로고 link |\
| | | | - 404 link|
|[`logo`](./assets.md#public-files)   |   `string`  |        | 로고 경로|
|[`nav`](#nav)|`false | (NavbarItem | NavbarGroup | string)[]`| `[]` | - 상단 네비게이션|\
|||| - navbar|
|[`sidebar`](#sidebar)|`false | SidebarConfigArray`|`'auto'`|사이드바|\
||`|'auto'| SidebarConfigObject`| ||

#### `nav`

- `false`: 비활성화
- `NavbarItem`: text, link field
  - `ariaLabel, rel, target` 필드도 optional로 있음. 작동도 잘됨. 하지만 공식문서에는 아직 설명이 없는 듯.
- `NavbarGroup`: `chldren` 프로퍼티에 값의 타입이 NavbarItem, NavbarGroup, string 의 Array이며,
  `text`, `ariaLabel(optional)` 프로퍼티를 포함한다.
- `string`: page title가 text, page route path 가 link 로 된다.

```ts
// NavbarItem
interface NavbarItem {
    text: string
    link: string
    ariaLabel?: string 
    rel?: string
    target?: string
}
// NavBarGroup
interface NavbarGroup {
    text: string
    children: (NavbarGroup | NavbarItem | string)[]
    ariaLabel?: string
}
```

#### `sidebar`

- [frontmatter 의 sidebar](./frontmatter.md#sidebar)로 override 가능
- `false`: 비활성화
- `'auto'`: 페이지 헤더에서 추론. (한 파일 당 하나의 sidebar 생성)
- 메뉴얼하게 세팅하는 법
  - `SidebarConfigArray`: `(SidebarGroup | SidebarItem | string)[]`
    - 모든 페이지가 하나의 사이드바를 사용한다.
    - `SidebarItem`
      - `(NavbarItem | SidebarItem | string)[]` 타입을 `children` 프로퍼티의 값으로 갖는다.
    - `SidebarGroup`
      - `(SidebarGroup | NavbarItem | SidebarItem | string)[]` 타입을 `children` 프로퍼티
        값으로 갖는다.
    - `string`
      - page title 은 `text`, page route path 는 `link`, page headers 로부터 생성된 `children`.
      - 그 후 `SidebarItem`으로 convert
  - `SidebarConfigObject`: `Record<string, SidebarConfigArray>`
    - key는 경로
    - sub path가 다르면 다른 사이드바를 사용한다.
- 사용 예시는 [원본 가이드](https://vuepress2.netlify.app/reference/default-theme/config.html#sidebar)
  참조

```ts
interface SidebarItem {
    text: string
    link: string
    children: (NavbarItem | SidebarItem | string)[]
    ariaLabel?: string 
    rel?: string
    target?: string
    isGroup?: false;
}
```

```ts
interface SidebarGroup {
    text: string
    isGroup: true;
    children: (SidebarGroup | NavbarItem | SidebarItem | string)[];
    ariaLabel?: string
}
```

```ts
type SidebarConfigArray = (SidebarGroup | SidebarItem | string)[]
type SidebarConfigObject = Record<string, SidebarConfigArray>
```

### repository 관련

|     name    |     type    |   default  |   details  |
| :-----------: | :-----------: | :----------: | ---------- |
|[`repo`](#repo) |  `string`  |          | - repository url|\
|||| - navbar 끝|
|`repoLabel` | `string` | inferred from `repo` |`repo`의 링크텍스트 |

#### `repo`

```ts
{
    themeConfig: {
        // If you set it in the form of `organization/repository`
        // we will take it as a GitHub repo
        repo: 'vuejs/vuepress',
        // Use url directly if you are not using GitHub
        repo: 'https://gitlab.com/foo/bar',
    },
}
```

### 언어 관련

|     name    |     type    |   default  |   details  |
| :-----------: | :-----------: | :----------: | ---------- |
|`selectLanguageText`| `string`|`'Languages'`|언어선택텍스트  |
|`selectLanguageAriaLabel`|`string`|`'Select language'`|언어선택 Aria Label|
|[`selectLanguageName`](#selectlanguagename)| `string`| | 언어텍스트 / AriaLabel

#### `selectLanguageName`

- `themeConfig.locales` 내부에서 정의되어야 의미가 있다.
- [다국어지원](./i18n.md) 참고

### 편집 링크 관련

|     name    |     type    |   default  |   details  |
| :-----------: | :-----------: | :----------: | ---------- |
|`editLink`| `boolean`|`true`|- 페이지편집링크 표시유무|\
||||- frontmatter override  |
|`editLinkText`|`string`|`'Edit this page'`|편집링크 텍스트|
|[`editLinkPattern`](#editlinkpattern)| `string`| | 편집링크 적용대상의 패턴|
|[`docsRepo`](#docsrepo)|`string`| [repo](#repo) 옵션 사용 | 문서소스파일 레포지토리|
|[`docsBranch`](#docbranch)|`string`| `'main'` | 문서소스파일 브랜치|
|[`docsDir`](#docsdir)|`string`| `''` | 문서소스파일 경로|

#### `editLinkPattern`

- 미지정시 [docsRepo](#docsrepo) 에서 추론된다.
- 사용법

|Pattern | Description|
|:---:|:----:|
|:repo| The docs repo url, i.e. [docsRepo](#docsrepo)|
|:branch| The docs repo branch, i.e. [docsBranch](#docsbranch)|
|:path| 페이지 소스파일 경로, |\
||i.e. [docsDir](#docsdir)은 페이지 파일의 상대경로와 결합한다|

```js
module.exports = {
  themeConfig: {
    docsRepo: 'https://gitlab.com/owner/name',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',
  },
}
```

- 편집 시 이동되는 url: `'https://gitlab.com/owner/name/-/edit/master/docs/path/to/file.md'`
  
#### `docsRepo`

- 소스파일이 위치한 레포지토리다.
- 페이지 편집하기 기능을 사용할 때만 필요하다.
- 소스파일이 다른 레포지토리에 있을 경우 유용하다.

#### `docsBranch`

- 레포지토리 내 소스파일이 위치한 브랜치명이다.
- 페이지 편집하기 기능을 사용할 때만 필요하다.

#### `docsDir`

- 브랜치 내 소스파일이 위치한 경로이다.
- 페이지 편집하기 기능을 사용할 때만 필요하다.

### 기여관련

|     name    |     type    |   default  |   details  |
| :-----------: | :-----------: | :----------: | ---------- |
|`lastUpdated`| `boolean`|`true`|- 최종갱신 timestamp 표시유무|\
||||- frontmatter override  |\
||||- 하지만 `false` 시 override 불가  |
|`lastUpdatedText`|`string`|`'Last Updated'`|최종갱신 timestamp 텍스트|
|`contributors`| `boolean`|`true`| - 기여자 표시유무|\
||||- frontmatter override  |\
||||- 하지만 `false` 시 override 불가  |
|`contributorsText`|`string`| `'Contributors'` | contributors 텍스트|
|[`docsBranch`](#docbranch)|`string`| `'main'` | 문서소스파일 브랜치|
|[`docsDir`](#docsdir)|`string`| `''` | 문서소스파일 경로|

### 기타

|     name    |     type    |   default  |   details  |
| :-----------: | :-----------: | :----------: | ---------- |
|`tip`| `string`|`'TIP'`| 팁 badge 타이틀|
|`warning`| `string`|`'WARNING'`| 경고 badge 타이틀|
|`danger`| `string`|`'WARNING'`| 위험 badge 타이틀|
|`notFound`| `string[]`|`['Not Found']`|element 중 무작위 pick 되는 404 page 메시지|
|`backToHome`| `string`|`'Back to home'`| 404 page `홈으로` 링크 텍스트|
|`openInNewWindow`| `string`|`'open in`| [OutBoundLink](https://vuepress2.netlify.app/reference/components.html#outboundlink)|\
|||`new window'`|의 `sr-only` 텍스트. a11y 목적|

### Plugins

#### `themePlugins`

- Default Theme은 초기값으로 플러그인들을 사용한다.
- 비활성화하고 싶으면 이 옵션을 사용한다.
- 초기값은 모두 `true`다.
- 목록
  - `themePlugins.activeHeaderLinks`
    - `false` 시 `@vuepress/plugin-active-header-links` 비활성화
    - 페이지 스크롤 따라 화면에 보이는 헤더의 anchor # fragment 로 uri가 바뀌는 기능
  - `themePlugins.backToTop`
    - `false` 시 `@vuepress/plugin-back-to-top` 비활성화
    - 페이지 맨 위로 올려주는 버튼 생성 기능
  - `themePlugins.container`
    - `false` 시 `@vuepress/plugin-container` 비활성화
    - badge 나 codegroup 등의 컨테이너
  - `themePlugins.git`
    - `false` 시 `@vuepress/plugin-git` 비활성화
    - [git plugin](https://vuepress2.netlify.app/reference/plugin/git.html#git) 기능
  - `themePlugins.mediumZoom`
    - `false` 시 `@vuepress/plugin-medium-zoom` 비활성화
    - 이미지 확대 등의 기능
  - `themePlugins.nprogress`
    - `false` 시 `@vuepress/plugin-nprogress` 비활성화
    - 페이지 상단 로딩 바 기능
