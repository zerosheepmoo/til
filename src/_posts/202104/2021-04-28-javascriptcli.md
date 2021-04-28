---
sidebar: 'auto'
---
# javascript CLI with node js

> [원본 게시글](https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/)
>
> [해당 튜토리얼의 repository](https://github.com/sitepoint-editors/ginit)

## Package Overview

- `chalk`: 출력 색칠
- `clear`: 터미널 화면 클리어
- `clui`: draws command-line tables, gauges and spinners
- `figlet`: creates ASCII art from text
- `inquirer`: creates interactive command-line user interface
- `minimist`: parses argument options
- ~~`configstore`: 쉽게 콘피그를 세이브 / 로드 without you having to think about where and how.~~
- `conf` 사용

### 추가적

- `@octokit/rest`: a GitHub REST API client for Node.js
- ~~`@octokit/auth-basic`~~: `deprecated`
- `@octokit/auth-token`: "^2.4.5",
- ~~`lodash`: a JavaScript utility library~~ `alternative vanilla code`
- `simple-git`: a tool for running Git commands in a Node.js application
- `touch`: a tool for implementing the Unix touch command.

## Helper Method 만들기

### `file.js`

- 현재 디렉토리 명을 get (for default repo name)
- 지정 디렉토리가 존재하는지 check
  - .git 디렉토리가 있는지 확인하여, repo 가 이미 등록되어 있는지 확인하기

```js
path.basename(path.dirname(fs.realpathSync(__filename)));
```

- 위에 녀석을 쓰고 싶겠지만, 같은 디렉토리에서 어플리케이션을 실행(`node index.js`)할 때 작동한다.
- 하지만 콘솔 애플리케이션을 global 범위에서 사용할 수 있도록 할거기에...
- 응용 프로그램이있는 디렉토리가 아니라 작업중인 디렉토리명을 가져와야한다.
- 이를 위해 `process.cwd`를 사용하는 것이 좋다.

```js
path.basename(process.cwd());
```

- 현재 디렉토리가 존재하는지 아닌지 확인하는 바람직한 방법은 계속 바뀌고 있다.
- 지금은 `existsSync` 사용할 거다.

```js
const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  }
};
```

정리하면...

- `process.cwd`를 사용하여 현재 콘솔의 디렉토리명을 가져오기
- `existsSync`를 사용하여 디렉토리 존재여부 판단
- 마지막으로 동기적인 메소드를 쓰는 것이 권장

위 처럼 유틸리티 페이지를 만들고, `index.js` 에 모듈을 가져온다.

## CLI 초기화

```js
// index.js

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Ginit', { horizontalLayout: 'full' })
  )
);
```

## Prompting the User for Input

```js
const inquirer = require('inquirer');

module.exports = {
  askGithubCredentials: () => {
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Enter your GitHub username or e-mail address:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your username or e-mail address.';
          }
        }
      },
      {
        name: 'password',
        type: 'password',
        message: 'Enter your password:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your password.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};
```

## Dealing With GitHub Authentication

### Storing Config

:::danger Note
코드 예시들은 deprecated 된 속성들을 다루고 있다!
작동하지 않음을 잊지말자
:::

- ~~username, pw 와 token 교환하기~~
  - deprected 되었으므로 personal access token 만 사용하기
- ~~`configstore` 패키지를 이용해서 oauth token 을 따로 저장하기~~
- ~~configstore 파일을 만들어서 로컬에 정보를 저장함~~
- [conf](https://github.com/sindresorhus/conf)로 대체
  - cnofigstore 가 require 문법을 제공하지 않는 형태임
  
:::tip
 on macOS, you’ll find the file in /Users/[YOUR-USERNME]/.config/configstore/ginit.json.
 On Linux, it’s in /home/[YOUR-USERNME]/.config/configstore/ginit.json.
:::

## Communicating with the GitHub API

```js
const CLI = require('clui');
const Configstore = require('configstore');
const Octokit = require('@octokit/rest');
const Spinner = CLI.Spinner;
const { createBasicAuth } = require("@octokit/auth-basic");

const inquirer = require('./inquirer');
const pkg = require('../package.json');

const conf = new Configstore(pkg.name);
```

```js
let octokit;

module.exports = {
    getInstance: () => {
        return octokit;
    },
    getStoredGithubToken: async () => {
        const t = await conf.get('github.token');
        if (t) {
            const res = await inquirer.askResetPAT();
            return res.isReset === 'No'? t: undefined;
        }
    },
};
```

:::details 다른 도구 사용

## Official Authentication Strategies

### Personal Access Token authentication

> [authentication-strategies.js](https://github.com/octokit/authentication-strategies.js)

Module: `@octokit/auth-token`

The simplest authentication strategy requires a user
to create a personal access token at <https://github.com/settings/tokens/new>
and pass it as the single argument to the `createTokenAuth()` function.
You can pass in any other token such as an installation access token or
a OAuth user access token, but there are dedicated startegies for
the respective use cases which might be a better fit.

`@octokit/auth-token` is the default authentication strategy built into `@octokit/core`

```js
const auth = createTokenAuth("1234567890abcdef1234567890abcdef12345678");
const { token } = await auth();
```

:::

## 결론

- 조금 변화를 줌
- 2FA 는 아직 포함안함
- [github repository 참고](https://github.com/zerosheepmoo/firstdo)

## 참고

- [auth basic deprecated](https://developer.github.com/changes/2020-02-14-deprecating-password-auth/#changes-to-make)
- [simple git package](https://www.npmjs.com/package/simple-git)
- [@octokit/rest api - authentication](https://octokit.github.io/rest.js/v18#authentication)
