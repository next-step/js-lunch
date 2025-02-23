export const useState = (initialState = "") => {
  const state = { value: initialState };

  const stateHandler = {
    set(obj, prop, value) {
      if (prop === "value") {
        // eslint-disable-next-line no-param-reassign
        obj[prop] = value;

        return true;
      }

      return false;
    },
  };

  const stateProxy = new Proxy(state, stateHandler);

  const setState = (newState) => {
    stateProxy.value = newState;
  };

  return [stateProxy, setState];
};
