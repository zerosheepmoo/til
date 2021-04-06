# Configuration -1-

## 의도

- 공식사이트에 설명이 잘되어있다.
- 하지만, 헷갈리거나 이해가 어려웠던 부분도 분명히 있다.
- 또, 기억이 잘 안나거나 자주 까먹는데 번거롭게 찾게 되는 부분도 있었다.
- 이에 대해 서술하였다.

## config.ts 구조

```ts
// config.ts 
export default defineUserConfig<DefaultThemeOptions>({...UserConfig});
```

- `defineUserConfig` function 이 `config.ts`에서 최종 export 된다.
- 다음의 type 형태를 가진다.

```ts
// defineUserConfig
<T extends ThemeConfig = ThemeConfig, U extends BundlerConfig = BundlerConfig>
(config: UserConfig<T, U>) => UserConfig<T, U>;
```

## option 구조

:::: code-group
::: code-group-item AppOptions
<!-- markdownlint-disable -->
```ts
/**
 * Vuepress app options
 */
export interface AppOptions<T extends ThemeConfig = ThemeConfig, U extends BundlerConfig = BundlerConfig> extends SiteLocaleData {
    base: string;
    locales: SiteLocaleConfig;
    theme: string;
    themeConfig: Partial<T>;
    bundler: string;
    bundlerConfig: Partial<U>;
    source: string;
    dest: string;
    temp: string;
    cache: string;
    public: string;
    markdown: MarkdownOptions;
    debug: boolean;
    host: string;
    port: number;
    open: boolean;
    evergreen: boolean;
    pagePatterns: string[];
    templateDev: string;
    templateSSR: string;
    shouldPreload: ((file: string, type: string) => boolean) | boolean;
    shouldPrefetch: ((file: string, type: string) => boolean) | boolean;
}
```
<!-- markdownlint-enable -->
:::
::: code-group-item SiteLocaleData

```ts
export interface SiteLocaleData {
    lang: string;
    title: string;
    description: string;
    head: HeadConfig[];
}
```

:::

::: code-group-item MarkdownOptions

```ts
export interface MarkdownOptions extends MarkdownIt.Options {
    anchor?: false | AnchorPluginOptions;
    assets?: false | AssetsPluginOptions;
    code?: false | CodePluginOptions;
    customComponent?: false;
    emoji?: false | EmojiPluginOptions;
    extractHeaders?: false | ExtractHeadersPluginOptions;
    hoistTags?: false | HoistTagsPluginOptions;
    links?: false | LinksPluginOptions;
    toc?: false | TocPluginOptions;
}
```

::::
