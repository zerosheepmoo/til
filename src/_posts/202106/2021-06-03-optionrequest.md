# PUT 요청을 보냈는데 왜 OPTION 까지 두 개가 가죠?

> [preflighted requests - mdn](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#preflighted_requests)
>
> [stackoverflow 질문](https://stackoverflow.com/questions/31481052/making-a-put-request-results-in-an-options-request-being-sent-first-before-the-p)

## 미들웨어에서 해결방법

route 에서 option 에 관해서도 CORS 설정을 해준다.
