let isInitialized = false;

const eventManager = {};

const handleEvents = (event) => {
  const handlers = eventManager[event.type];
  if (!handlers) return;

  for (const target in handlers) {
    if (event.target.matches(target)) {
      handlers[target](event);
      break;
    }
  }
};

export const addEvent = (eventType, target, handler) => {
  if (!eventManager[eventType]) {
    eventManager[eventType] = {};
  }

  eventManager[eventType][target] = handler;
};

export const initializeEventManager = () => {
  if (isInitialized) return;
  isInitialized = true;

  Object.keys(eventManager).forEach((eventType) => {
    document.body.addEventListener(eventType, handleEvents);
  });
};

export const createObserver = (initialValue) => {
  let value = initialValue;

  const observers = new Set();

  const subscribe = (observer) => observers.add(observer);
  const unsubscribe = (observer) => observers.delete(observer);

  const notify = () => observers.forEach((observer) => observer(value));

  const get = () => value;

  const set = (newValue) => {
    value = newValue;
    notify();
  };

  return { subscribe, unsubscribe, get, set };
};
