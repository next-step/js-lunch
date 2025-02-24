## 생각해본 점

1. Proxy 객체를 사용해 보면 어떨까?

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Reflect

- 이번 과제는 함수형 프로그래밍을 지향해서 구현해보고 싶음

- 왜? 객체에 대한 기본 작업을 가로챈다는 기능

- 상태 객체를 Proxy 객체로 래핑하면, 검사 및 상태 변화 로직도 가능할 듯

  - Reflect를 많이 쓰는 경우

2. 상태를 정의할 때

```js
function createCounter() {
  const state = { count: 0 };

  return {
    increment: (newState) => {
      state = { ...newState };
    },
  };
}
```

### 참고

- 이미지 리소스 로드

```js
import image from "../public/assets/favorite-icon-filled.png";

const buttonImage = document.createElement("img");
buttonImage.src = image;

if (app) {
  app.appendChild(buttonImage);
}
```

### Vite에서는 이미지를 자동으로 병합

```js
import "./styles/common.css";
import "./styles/header.css";
```

---

# 상태 관리

- 상태를 가지고 있어야 함 (상태 관리)

  - 클로저를 활용해서 내부 상태를 관리하고, 상태 변경 함수만 외부로 열어준다면?

- 상태가 바뀌었을 때 이것을 알아차려 새로운 view를 그려야 함 (이벤트 관리)

  - 현재 Header 컴포넌트에는 작성되어 있음 (이러한 방향성으로 가도 되는지 궁금합니다!)

  - Pub/Sub -> 상태 변경 시, 자동으로 구독자에게 알림이 가게 해주기기
