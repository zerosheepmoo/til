# oak 의 Router 관련 함수의 파라미터인 미들웨어 타이핑 예시

> [deno](https://deno.land/)
>
> [oak](https://github.com/oakserver/oak)

:::danger 주의
interface, helper함수, router 등 모두의 버전이 같은지 확인해야한다.
:::

```ts
// routes.ts
router.get('/user/:phone', getUser);
```
<!-- markdownlint-disable -->
```ts
// getUser.ts
import { RouterContext } from "https://deno.land/x/oak@v7.5.0/router.ts";

// deno-lint-ignore no-explicit-any
export const getUser = async (ctx: RouterContext<CustomParamType>, Record<string, any>>) => {

    const params = ctx.params;
    const phone = params.phone;
...

}
```
<!-- markdownlint-enable -->