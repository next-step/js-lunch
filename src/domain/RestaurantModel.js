class RestaurantModel {
  #id;
  #category;
  #name;
  #time;
  #description;
  #link;
  #favorite;

  constructor(id, categogry, name, time, description, link, favorite) {
    this.#id = id;
    this.#category = categogry;
    this.#name = name;
    this.#time = time;
    this.#description = description;
    this.#link = link;
    this.#favorite = favorite;
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

  get favorite() {
    return this.#favorite;
  }

  get id() {
    return this.#id;
  }

  changeFavorite(favorite) {
    this.#favorite = favorite;
  }
}

export default RestaurantModel;
