## 설계

1. classLists -> datasets으로 상태 저장하는 곳 변경

- 상태 정의

  - data-result : drawer에서 만들어진 데이터를 저장하기 위한 상태

  - data-open : drawer를 열고 닫는 상태
  - data-radio : radio 상태 값
  - data-select : select 상태 값

### Drawer open / close

2. dataset.open 속성을 통해, drawer를 열고 닫음

### Code 리팩토링

- index.js에서 import 해서 사용

```js
// ...
addObserver();
addEvent();
// ...
```

`shared/observer/add-observer.js`

- observer들을 한곳으로 모음

`shared/event.js`

- 각 이벤트가 발생했을 때, 해야하는 작업을 정의

### radio 또는 select 이벤트인 TO_LIST가 발생하면

```js
eatingPlaceList.innerHTML = "";
const items = filterEatingPlaceList({
  filterState: selectValue,
  radioState: radioValue,
});

items.forEach((item) => {
  eatingPlaceList.appendChild(item);
});
```

- innerHTML으로 DOM을 지우고, 해당 부분을 다시 함수 호출을 통해 DOM을 채웁니다.

### LocalStorage

- 새로고침해도 데이터가 유지되어야 하는 요구사항에 따라, LocalStorage를 사용

### 삭제하기는 미구현

- 상세 정보 보기까지만 구현되어 있습니다.
