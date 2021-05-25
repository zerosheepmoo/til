---
sidebar: 'auto'
---

# Rest API 디자인 기초 가이드라인 5개

> [원문: 2016-06 restcase 포스팅](https://blog.restcase.com/5-basic-rest-api-design-guidelines/)

## 1. 리소스 (URIs)

### 명사형 이름 쓰기

```bash
GET /users/1234
POST /users (with JSON describing a user in the body)
DELETE /addresses/1234
```

### URI case

- spinal case 권장 (Google, Paypal 등 큰회사에서 많이 씀)
- According to RFC3986, URLs are “case sensitive”
  (except for the scheme and the host).
- In practice, though, a sensitive case may create dysfunctions with APIs
  hosted on a Windows system.

## 2. HTTP 메소드

- `GET`: 데이터 가져오기. (데이터 변경에 쓰지 말기)
  - `HEAD`: `GET`과 비슷. but transfers the status line and header section only.
- `POST`: 데이터를 서버에 전송할 때
- `PUT`: 자원 컨텐츠 갱신 시
  - `PATCH`: 마이너 업데이트
    - A `PUT` request will replace the entire content of the resource at the location
    - A `PATCH` request is used to make changes to a part of the resource at a location.
- `DELETE`: 자원 삭제

### Option

- 타겟 리소스의 communication 옵션

## 3. HTTP 헤더

4가지

- General Header: 요청/응답 메시지
- Client Request Header: 요청 메시지
- Server Response Header: 응답 메시지
- Entity Header: entity-body 또는 자원의 meta 정보

## 4. 쿼리 파라미터

- 페이징: 반환하는 데이터양이 많다면 처리하자
- 필터링: 어트리뷰트로 필터링
- 정렬: 쿼리 컬렉션 결과를 정렬하기
  - sort 파라미터는 정렬을 수행할 어트리뷰트의 이름을 `,`로 구분하여 포함
- 검색: 정확하게 일치안해도 댐(필터링처럼)

## 5. Status Codes

- `200` – OK
- `201` – CREATED
  - A new resource has been created
- `204` – NO CONTENT
  - The resource was successfully deleted, no response body
- `304` – NOT MODIFIED
  - The data returned is cached data (data has not changed)
- `400` – BAD REQUEST
  - invalid json
- `401` – UNATHORIZED
  - The request requires user authentication.
- `403` – FORBIDDEN
- `404` – NOT FOUND
- `500` – INTERNAL SERVER ERROR
  - API developers should avoid this error.
  - If an error occurs in the global catch blog,
    the stack trace should be logged and not returned as a response.
