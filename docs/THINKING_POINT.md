## 생각해본 점 

1. Proxy 객체를 사용해 보면 어떨까?

- 이번 과제는 함수형 프로그래밍을 지향해서 구현해보고 싶음 

    - React의 철학을 따라가보자는 목표

- 왜? 객체에 대한 기본 작업을 가로챈다는 기능 

- 상태 객체를 Proxy 객체로 래핑하면, 검사 및 상태 변화 로직도 가능할 듯 

    - Reflect를 많이 쓰는 경우

2. 상태를 정의할 때 

```js
function createCounter() {
  const state = { count: 0 };

  return {
    increment: (newState) => {
      state = { ...newState }
    },
  }
}
```