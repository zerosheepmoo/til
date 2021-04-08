# Assets

## 상대경로

```md
![An image](./image.png)
```

## Public Files

- public directory 를 지정할 수 있다. 여기에 있는 디렉토리 / 파일들은 빌드 된 루트 경로에 복사된다.
- 다음의 경우에 유용하다.
  - markdown 파일에서 직접 reference 하지 않는 경우 (favicon, PWA icon 등)
  - 공유되는 이미지 파일 (logo 이미지 등)
  - 절대경로를 사용하고 싶은 경우

::: tip
logo 의 경우 [themeConfig.logo](config3.md#locale-config) 에 경로를 지정하는 방법도 있다.
:::

```md
└─ docs
   ├─ .vuepress
   |  └─ public
   |     └─ images
   |        └─ hero.png  # <- Logo file
   └─ guide
      └─ assets.md       # <- Here we are

![VuePress Logo](/images/hero.png)
```

## Non-root URL 에 deploy 할 경우

```md
<!-- base: '/bar/' 일 경우 -->
![VuePress Logo](/bar/images/hero.png)
```

- 동적으로 변경하려면 `$withBase`

```md
<img :src="$withBase('/images/hero.png')" alt="VuePress Logo">
```

## Packages and Path Aliases

잘 사용하지는 않지만 dependant package 에서 이미지를 가져올 수도 있음

```md
![Image from dependency](package-name/image.png)
```

- alias 도 사용가능

```js
module.exports = {
  alias: {
    '@alias': path.resolve(__dirname, './path/to/some/dir'),
  },
}
```

```md
![Image from path alias](@alias/image.png)
```
