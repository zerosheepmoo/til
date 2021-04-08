# Configuration -2-

> Theme Config 를 제외한 나머지는 root 의 property 이며, Theme Config 는 themeConfig 프로퍼티의 value
> 인 오브젝트의 property 다.

크게 알아야할 Config 는 **7**개다. 그중 **2개: Site, Theme** 이 가장 중요하다.

- Site Config
- Theme Config
- Directory Config
- Bundler Config
- Development Config
- Markdown Config
- Plugin API

## Site Config

|     name    |     type    |   default  |   details  |
| :-----------: | :-----------: | :----------: | ---------- |
|   `base`    |   `string`  |   `'/'`    | - deploy base, github pages: `/til/` |
|   `lang`    |   `string`  |   `'en-US'`      | - html lang attribute |
|   `title`   |   `string`  |     `''`         | - navbar에 보여짐, 모든 페이지 title |
|`description`|   `string`  |     `''`     | - \<meta name="description" /> 의 내용|
|   `head`    | `HeadConfig[]`|     `''`     | - 삽입할 HTML head tag  |
|  `locale`   |`SiteLocaleConfig`|        `{}` | i18n support|

### `HeadConfig`

- `[tagName, { attrName: attrValue }, innerHTML?]` 의 형식

```ts
{
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
}
```

### `SiteLocaleData`

- 이 오브젝트의 `Partial`[^1] object가 `SiteLocaleConfig`[^2] 의 value 값
- `SiteLocaleConfig`의 자세한 정보는 [i18n guide](./i18n) 항목 참고

```js
// SiteLocaleConfig 예시
locale: {
    '/en/': {
        lang: 'en-US',
        title: 'Hello'
    },
    '/zh/': {
        lang: 'zh-CN',
        title: '你好',
    }
}
```

```ts
interface SiteLocaleData {
    lang: string;
    title: string;
    description: string;
    head: HeadConfig[];
}
```

[^1]: 원본 오브젝트와 프로퍼티들이 같지만, optional 로 구성되는 오브젝트
[^2]: `{[path: string]: Partial<SiteLocaleData>}`

## Theme Config

### `theme`

- Type: `string`
- Default: `'@vuepress/default'`
- Details: 이름, shorthand, 절대경로

```ts
{
    theme: 'vuepress-theme-foo',
    theme: 'bar',
    theme: path.resolve(__dirname, './path/to/local/theme'),
}
```

### `themeConfig`

- Type: `string`
- Default: `{}`
- Details: [Default Theme Config](./config3.md#default-theme-config) 참조.

## Bundler Config

### `bundler`

- Type: `string`
- Default: `'@vuepress/webpack'`
- Details: 이름, shorthand / 더 자세한 정보는 [Bundler](./bundler.md) 참조.

### `bundlerConfig`

- Type: `BundlerConfig`
- Default: `{}`
- Details: [Bundler](./bundler.md) 참조.

<!-- markdownlint-disable -->
:::: code-group
::: code-group-item WebpackBundlerOptions

```ts
/**
 * Options for bundler-webpack
 */
export interface WebpackBundlerOptions {
    /**
     * use webpack-merge to set webpack config
     */
    configureWebpack?: (config: WebpackConfiguration, isServer: boolean, isBuild: boolean) => WebpackConfiguration;
    /**
     * use webpack-chain to set webpack config
     */
    chainWebpack?: (config: WebpackChainConfig, isServer: boolean, isBuild: boolean) => void;
    beforeDevServer?: (expressApp: Application, server: WebpackDevServer) => void;
    afterDevServer?: (expressApp: Application, server: WebpackDevServer) => void;
    postcss?: PostcssLoaderOptions;
    stylus?: StylusLoaderOptions;
    scss?: SassLoaderOptions;
    sass?: SassLoaderOptions;
    less?: LessLoaderOptions;
}
```

:::
::: code-group-item 기타

```ts
/**
 * Common options for some webpack loaders
 */
export interface LoaderOptions {
    sourceMap?: boolean;
    webpackImporter?: boolean;
    additionalData?: string | ((content: string, loaderContext: LoaderContext) => string);
}
/**
 * Common type for style pre-processor options
 */
export declare type StylePreprocessorOptions<T extends Record<string, any> = Record<string, any>> = T | ((loaderContext: LoaderContext) => TextDecodeOptions);
/**
 * Options for postcss-loader
 *
 * @see https://github.com/webpack-contrib/postcss-loader#options
 */
export interface PostcssLoaderOptions extends Pick<LoaderOptions, 'sourceMap'> {
    execute?: boolean;
    postcssOptions?: StylePreprocessorOptions;
}
/**
 * Options for stylus-loader
 *
 * @see https://github.com/webpack-contrib/stylus-loader#options
 */
export interface StylusLoaderOptions extends LoaderOptions {
    stylusOptions?: StylePreprocessorOptions;
}
/**
 * Options for sass-loader
 *
 * @see https://github.com/webpack-contrib/sass-loader#options
 */
export interface SassLoaderOptions extends LoaderOptions {
    implementation?: any;
    sassOptions?: StylePreprocessorOptions;
}
/**
 * Options for less-loader
 *
 * @see https://github.com/webpack-contrib/less-loader#options
 */
export interface LessLoaderOptions extends LoaderOptions {
    lessOptions?: StylePreprocessorOptions;
}

```

:::
::::
<!-- markdownlint-enable -->

## Directory Config

|     name    |     type    |   default  |   details  |
| :-----------: | :-----------: | :----------: | ---------- |
|`dest`|`string`|``${sourceDir}/.vuepress/dist``|- 빌드(build) 아웃풋 경로|
|`temp`|`string`|``${sourceDir}/.vuepress/.temp``|- 임시파일(dev) 경로|
|`cache`|`string`|``${sourceDir}/.vuepress/.cache``| - 캐시파일 경로|
|`public`|`string`|``${sourceDir}/.vuepress/public``| - public file / asset 경로|

## Markdown Config

### `markdown`

- Type: `string`
- Default: `{}`
- Details
  - `markdown.anchor`: `AnchorPluginOptions | false` / [markdown-it-anchor 옵션](https://github.com/valeriangalliat/markdown-it-anchor)
  - `markdown.assets`: `AssetsPluginOptions | false` /
    built-in markdown-it assets plugin / 함부로 끄지 말것
  - `markdown.code`: `CodePluginOptions | false` / 빌트인 markdown-it code 플러그인
    - `markdown.code.highlightLines`: `boolean` / Default: `true` / 코드 줄 하이라이팅
    - `markdown.code.lineNumbers`: `boolean` / Default: `true` / 코드 라인 넘버
    - `markdown.code.preWrapper`: `boolean` / Default: `true` / extra \<pre> tag
      - highlightLines 와 lineNumbers 의 선제조건. 따라서 disable 시 이 둘도 disable.
      - Prismjs 의 기능을 이용할 때 사용가능
    - `markdown.code.vPre`: `boolean` / Default: `true` / enable v-pre on \<pre>
  - `markdown.customComponent`: `undefined | false` / 빌트인 markdown-it custom-component
    plugin / 함부로 끄지 말것
  - `markdown.emoji`: `EmojiPluginOptions | false` / markdown-it-emoji
  - `markdown.extractHeaders`: `ExtractHeadersPluginOptions | false` /
    빌트인 markdown-it extract-headers plugin. 페이지 헤더를 페이지 데이터에 추출하는데, 사이드바,
    toc 등 여러 군데에 쓰인다.
  - `markdown.hoistTags`: `HoistTagsPluginOptions | false` / 빌트인 markdown-it
    hoist-tags plugin. 특정 HTML 태그를 마크다운에서 SFC 의 top-level 에 hoist 한다. [참고](https://vuepress2.netlify.app/guide/advanced/markdown.html)
  - `markdown.links`: `LinksPluginOptions | false` / 빌트인 markdown-it links plugin.
    internal link 를 \<RouterLink>로 convert 후 추가적인 어트리뷰트를 external links에 단다.
  - `markdown.toc`: `TocPluginOptions | false` / 빌트인 markdown-it
    table-of-contents plugin.
- More
  - [markdown-it > Init with presets and options](https://github.com/markdown-it/markdown-it#init-with-presets-and-options)
  - [syntax extension guide](https://vuepress2.netlify.app/guide/markdown.html#syntax-extensions)

## Development Config

|     name    |     type    |   default  |   details  |
| :-----------: | :-----------: | :----------: | ---------- |
|`debug`|`boolean`|`false`| - 디버그모드 / `DEBUG=vuepress*` 환경변수 설정도 가능 |
|`host`|`string`|`'0.0.0.0'`|- dev server 호스트|
|`port`|`number`|`8080`| - dev server 포트|
|`open`|`boolean`|`false`| - dev server 실행 시 브라우저 자동 열기|
|`evergreen`|`boolean`|`true`| - target evergreen browser[^3] / false 시 최적화용도|
|`pagePatterns`|`string[]`|하단 참조| - 페이지로 resolve 될 파일명 패턴|
|`templateDev`|`string`|하단| - dev용 htmltemplate|
|`templateSSR`|`string`|하단| - build용 htmltemplate|
|`shouldPreload`|`string`|하단|what files \<link rel="preload"> resource hints generated|
|`shouldPrefetch`|`string`|하단|what files \<link rel="prefetch"> resource hints generated.|

- pagePatterns: `['**/*.md', '!.vuepress', '!node_modules']`
- templateDev: `'@vuepress/client/templates/index.dev.html'`
- templdateSSR: `'@vuepress/client/templates/index.ssr.html'`
- sholudPreload: `((file: string, type: string) => boolean)) | boolean`
- shouldPrefetch: `((file: string, type: string) => boolean)) | boolean`

[^3]: Evergreen 브라우저는 자동 업데이트를 하는 브라우저를 말한다. Chrome같은. IE는 evergreen 이 아님.

## Plugin API

- [Plugin API](./plugin-api.md) 참조
