# 예제

[예제 깃허브 레포지토리](https://github.com/zerosheepmoo/deno-prac)

## 목록

- `hello world`
- `import and export`
  - [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
  - [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- `managing dependencies`
  - `deps.ts`
  - [외부와 연결하기](./external.md) 참고
- `fetch data`
  - [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- `read and write files`
  - [Deno.readTextFile](https://doc.deno.land/builtin/stable#Deno.readTextFile)
    등 이용
- `An implementation of the unix "cat" program`
  - Use the Deno runtime API to output the contents of a file to the console.
  - `Deno.args` accesses the command line arguments.
  - `Deno.open` is used to get a handle to a file.
  - `Deno.copy` is used to transfer data from the file to the output stream.
  - Files **should be closed** when you are finished with them
