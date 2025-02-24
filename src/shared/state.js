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

export const createHeaderState = (initialState = "") => {
  const state = { value: initialState };

  const listeners = [];

  const addListener = (listener) => {
    listeners.push(listener);
  };

  const notifyListeners = () => {
    listeners.forEach((listener) => listener(state.value));
  };

  return {
    getState() {
      return state.value;
    },
    addListener,
    setState(newState) {
      const prevState = state.value;
      if (prevState !== newState) {
        state.value = newState;
        notifyListeners();
      }
    },
  };
};
