# scaffold
## scaffold란?
scaffold라는 말은 건설에서 자주 쓰이는데, 발판(비계)을 의미한다.

사전에는 다음과 같이 나와 있다.
> *"무대의 높은 곳에서 일할 수 있도록 설치하는 임시 가설물. 재료 운반이나 작업원의 통로 및 작업을 위한 발판이 된다."*

프로그래밍 영역에서도 scaffold라는 용어를 사용하는데, 주로 반복되는 작업을 덜기 위해 미리 만들어놓은 뼈대를 제공할 때, scaffold를 사용한다.
가장 잘 알려진 예시로는 `create-react-app`가 있다. 이 명령어를 실행하기만 하면 react 앱을 구성하기 위한 기본적인 설정이 끝난다.

이렇듯 개발 효율을 높여줄 수 있는 scaffold 방법을 학습하고자 repo를 하나 파봤다.

## scaffold tool
가장 잘 알려진 scaffold 라이브러리는 hygen이 있다. 이를 사용해볼 예정


# practice 
## hygen 설치

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
