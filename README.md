# hygen 라이브러리를 활용한 scaffold 연습

## 설치

- yarn

  ```
  yarn add hygen --dev
  ```

- npm
  ```sh
  npm install hygen --save-dev
  ```

## 구조

### 명령어

```
$ hygen component new --name [NAME]
          |        ^----- action
           `------------ generator
```

- generator: 코드를 자동으로 생성하는 기본 단위
- action: 제너레이터가 수행하는 작업

### 템플릿 구조

Hygen이 코드를 생성할 때 사용하는 파일 템플릿으로, `.ejs.t` 확장자로 끝나는 파일을 의미

ex. (\_templates/component/new/index.js.ejs.t):

```ejs.t
---
to: src/<%= name %>.tsx
---

import React from "react";

const <%= name %> = () => {
  return <div><%= name %> Component</div>;
};

export default <%= name %>;
```

- `frontmatter section`: `---` 내부의 영역.

  - 파일에 반영되지 않고, template 정보를 담는 영역
  - `to`: 파일이 저장될 경로
  - `message`: prompt 영역에 message를 띄울때 사용

- `body section`: 외부의 영역.

  - 즉, 실제 파일에 반영되는 내용이 담기는 영역

명령어 실행 시, 명령어와 함께 입력했던 NAME이 <%= name %>에 대입되어 파일이 생성됨

## Prompt로 상호작용 하기

- [문서](https://web.archive.org/web/20230417132443/http://www.hygen.io/docs/generators#interactive-prompt)

## 참고

- [공식문서](https://web.archive.org/web/20230417132443/http://www.hygen.io/docs)
- [우아한 기술블로그](https://techblog.woowahan.com/12548)
