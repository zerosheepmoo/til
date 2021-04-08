# Bundler

> [원본 가이드](https://vuepress2.netlify.app/guide/bundler.html#webpack)
>
> [원본 레퍼런스](https://vuepress2.netlify.app/reference/bundler/webpack.html#configurewebpack)

## 간략히

- 번들 관련 옵션들을 지정할 수 있다.
- vuepress는 [webpack](https://webpack.js.org/) 번들러를 이용하여 dev, build 사이트를 구성한다.
- vuepress2 버전부터는 [Vite](https://vitejs.dev/)도 지원한다.

## 정리 표

- 웹팩 관련
|     name    |   details  |
| :-----------: | :-----------: |
|[`configureWebpack`](#configurewebpack)| 웹팩 Config 설정|
|[`chainWebpack`](#chainwebpack)| 웹팩 Config 설정|
|[`beforeDevServer`](#beforedevserver) | - dev 전 훅|
|[`afterDevServer`](#afterdevserver) | - dev 후 훅|

- 로더 옵션
|     name    |
| :-----------: |
|[`postcss`](#postcss)|
|[`stylus`](#stylus)|
|[`scss`](#scss) |
|[`less`](#less) |

## Details

- 이 포스트 작성 시점에서는 `bundleConfig`의 property에 대한 타입 hint 가 제공되지 않는다.

### `configureWebpack`

- [webpack-merge](https://github.com/survivejs/webpack-merge)를 사용하여
  머지된 웹팩 config 오브젝트를 반환한다.
- Type: `(config: WebpackConfiguration, isServer: boolean, isBuild: boolean) => WebpackConfiguration`
- 첫번째 argument가 웹팩 Config 오브젝트며,
  두번째는 isServer(SSR / CSR ?) 플래그, 세번째는 isBuild(dev / build ?) 플래그다. 아래는 참고 path.
  - `/node_modules/@vuepress/bundler-webpack/lib/build/createBuild.js`
  - `....../lib/dev/createDev.js`

### `chainWebpack`

- [webpack-chain](https://github.com/neutrinojs/webpack-chain)를 사용하여[^1]
  웹팩 Config 를 설정한다.
- Type: `(config: WebpackChainConfig, isServer: boolean, isBuild: boolean) => void`

### `beforeDevServer`

- Type: `(expressApp: Application, server: WebpackDevServer) => void`
- [webpack devServer.before 훅 가이드](https://webpack.js.org/configuration/dev-server/#devserverbefore)

### `afterDevServer`

- Type: `(expressApp: Application, server: WebpackDevServer) => void`
- [webpack devServer.after 훅 가이드](https://webpack.js.org/configuration/dev-server/#devserverafter)

### `postcss`

- Type: `PostcssLoaderOptions`
- [postLoader option](https://github.com/webpack-contrib/postcss-loader#options)

### `stylus`

- Type: `StylusLoaderOptions`
- [stylus-loader option](https://github.com/webpack-contrib/stylus-loader#options)

### `scss`

- Type: `SassLoaderOptions`
- [sass-loader option](https://github.com/webpack-contrib/sass-loader#options)

### `less`

- Type: `LessLoaderOptions`
- [less-loader option](https://github.com/webpack-contrib/less-loader#options)

## 관련

> [Configuration -2- 해당 항목](./config2.html#bundlerconfig) 참조

[^1]: webpack-chain 은 추가적으로 modify 할 때 용이하다.

## Vite

### `viteOptions`

- [Vite option 가이드](https://vitejs.dev/config/)

### `vuePluginOptions`

- [@vitejs/plugin-vue](https://www.npmjs.com/package/@vitejs/plugin-vue) 패키지의 옵션들
- [Vite plugin guilde](https://vitejs.dev/plugins/#vitejs-plugin-vue)
