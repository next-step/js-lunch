export const useState = (initialState = "") => {
  const state = { value: initialState };

  const stateHandler = {
    set(obj, prop, value) {
      //   if (prop === "value") {
      //     if (!Number.isInteger(value)) {
      //       throw new TypeError("The age is not an integer");
      //     }
      //     if (value > 200) {
      //       throw new RangeError("The age seems invalid");
      //     }
      //   }

      // 값을 저장하는 기본 동적
      if (prop === "value") {
        obj[prop] = value;

        return true;
      }
      //   setState(obj);
      // 성공 표시
      return false;
    },
  };

  const stateProxy = new Proxy(state, stateHandler);

  const setState = (newState) => {
    stateProxy.value = newState;
    console.log(stateProxy.value);
  };

  return [stateProxy, setState];
};
