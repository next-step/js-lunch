export class Store {
  state;

  callbacks = new Set();

  constructor(state) {
    this.state = state;
  }

  subscribe(callback) {
    this.callbacks.add(callback);
  }

  unsubscribe(callback) {
    this.callbacks.delete(callback);
  }

  #notify() {
    this.callbacks.forEach((callback) => callback(this.state));
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
    this.#notify();
  }
}
