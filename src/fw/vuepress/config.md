# Configuration

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

-

```ts
// defineUserConfig
<T extends ThemeConfig = ThemeConfig, U extends BundlerConfig = BundlerConfig>
(config: UserConfig<T, U>) => UserConfig<T, U>;
```

:::tip

:::
