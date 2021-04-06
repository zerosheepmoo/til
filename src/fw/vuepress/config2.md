# Configuration -2-

## SiteConfig

|     name    |     type    |   default  |   details  |
| :-----------: | :-----------: | :----------: | ---------- |
|   `base`    |   `string`  |          `'/'`                 | - deploy base, github pages: `/til/` |
|   `lang`    |   `string`  |          `'en-US'`             | - html lang attribute |
|   `title`   |   `string`  |            `''`                | - navbar에 보여짐, 모든 페이지 title |
|`description`|   `string`  |            `''`                | - \<meta name="description" /> 의 내용|
|  `locale`   |  참고[^2]    | `{}` | i18n support[^1]|

[^1]: [i18n guide](https://vuepress2.netlify.app/guide/i18n.html#site-i18n-config)
[^2]: locale 의 타입: `{[path: string]: Partial<SiteLocaleData>}`
