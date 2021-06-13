# Github commit signature verification

> [github manual](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification)

## About

`GPG`, `S/MIME`를 사용하여 로컬에서 태그를 표시하고 커밋할 수 있다.

## verification status 보여주기

태그랑 커밋에 vigilant(경계) mode 활성화한다.

[깃허브 ssh & gpg keys 설정](https://github.com/settings/keys)에서
비질런트 모드를 활성화하자 (현재 시점: 베타)

## 방법

```zsh
/Users/hubot/.gnupg/secring.gpg
------------------------------------
sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10] # 3AA~ 얘가 id
uid                          Hubot 
ssb   4096R/42B317FD4BA89E7A 2016-03-10
```

1. `gpg --list-secret-keys --keyid-format=long` 로 gpg key 체크
2. 없으면 만든다.
   1. [gpg command line tool](https://www.gnupg.org/download/) 다운로드
   2. `gpg --full-generate-key` 로 RSA key 생성, `4096 bit`, key doesn't expire,
      passphrase 입력
   3. `gpg --armor --export [gpg id]`를 해서 `-----BEGIN PGP PUBLIC KEY BLOCK-----`
      부터 시작해서 END 까지 복사
3. 있으면 public key 를 복사해서 (위의 2-3번단계로) `settings - ssh and gpg keys - new gpg key`
   에 붙여넣기
4. `git config --global user.signingkey [gpg id]` 로 전체부여하거나
   `--global` 없이 특정 레포지토리에서만 활성화
   1. gpg suite 없다면 `.zshrc` 파일에
   2. smime 은 [링크](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification/telling-git-about-your-signing-key#telling-git-about-your-x509-key)
   3. [no-reply email 사용법 참고](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification/associating-an-email-with-your-gpg-key)
5. 이제 커밋하면 댐!
   1. `git tag -s mytag`, `git tag -v mytag`: signed tag create / verified

```zsh
# 4-1 단계 스크립트
if [ -r ~/.zshrc ]; then echo 'export GPG_TTY=$(tty)' >> ~/.zshrc; \
  else echo 'export GPG_TTY=$(tty)' >> ~/.zprofile; fi
```
