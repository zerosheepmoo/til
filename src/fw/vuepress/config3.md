# Configuration -3-

> [Default Theme Config 레퍼런스 원본](https://vuepress2.netlify.app/reference/default-theme/config.html#basic-config)

## Basic Config

필요한 설명만 길게함.

### `locales`

- Type: `{ [path: string]: Partial<DefaultThemeLocaleData> }`
- Default: `{}`
- Details: Site Config 의 locale 과는 다르다. [다국어지원](./i18n.md) 참고

## Locale Config

일반적인 Config. `locales` 안에서도 사용가능. name 에 관련 링크가 달린 것들이 있음.

- 일반적

|     name    |     type    |   default  |   details  |
| :-----------: | :-----------: | :----------: | ---------- |
|   `home`    |   `string`  |   `'/'`    | - navbar logo link |\
| | | | - 404 페이지 링크 |
|[`logo`](./assets.md#public-files)   |   `string`  |        | 로고 경로|
|[`nav`](#nav)|`false | (NavbarItem | NavbarGroup | string)[]`| `[]` | - 상단 네비게이션|\
|||| - navbar|
|[`sidebar`](#sidebar)|`false | 'auto' | SidebarConfigArray |SidebarConfigObject`|`auto`|사이드바|

- repository 관련

|     name    |     type    |   default  |   details  |
| :-----------: | :-----------: | :----------: | ---------- |
|[`repo`](#repo) |  `string`  |          | - repository url|\
|||| - navbar 끝|
|`repoLabel` | `string` | inferred from `repo` |`repo`의 링크텍스트 |

- 언어 관련

|     name    |     type    |   default  |   details  |
| :-----------: | :-----------: | :----------: | ---------- |
|`selectLanguageText`| `string`|`'Languages'`|언어선택텍스트  |
|`selectLanguageAriaLabel`|`string`|`'Select language'`|언어선택 Aria Label|
|`selectLanguageName`| `string`| | 언어텍스트 / AriaLabel

### `nav`

- `false`: 비활성화
- `NavbarItem`: text, link field
  - `ariaLabel, rel, target` 필드도 optional로 있음. 작동도 잘됨. 하지만 공식문서에는 아직 설명이 없는 듯.
- `NavbarGroup`: NavItem, NavGroup, string 의 Array
- `string`: page title가 text, page route path 가 link 로 된다.

### `sidebar`

### `repo`

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

### `selectLanguageName`

- `themeConfig.locales` 내부에서 정의되어야 의미가 있다.
- [다국어지원](./i18n.md) 참고
