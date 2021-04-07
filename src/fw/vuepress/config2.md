# Configuration -2-

> Theme Config 를 제외한 나머지는 root 의 property 이며, Theme Config 는 themeConfig 프로퍼티의 value
> 인 오브젝트의 property 다.

## Site Config

### Site Config Table

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

### Direcotry Config Table

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
    built-in markdown-it assets plugin
  - `markdown.code`: `CodePluginOptions | false` / built-in markdown-it code plugin
  - `markdown.code.highlightLines`: `boolean` / Default: `true` / 코드 하이라이팅
