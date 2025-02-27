class RestaurantModel {
  #category;
  #name;
  #time;
  #description;
  #link;

  constructor(categogry, name, time, description, link) {
    this.#category = categogry;
    this.#name = name;
    this.#time = time;
    this.#description = description;
    this.#link = link;
  }

  get category() {
    return this.#category;
  }

  get name() {
    return this.#name;
  }

  get time() {
    return this.#time;
  }

  get description() {
    return this.#description;
  }
}

export default RestaurantModel;
