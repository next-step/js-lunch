import { headerRender } from "./components/Header.js";
import { filterRestaurant, restaurantRender } from "./components/Restaurant.js";
import { categoryRender } from "./components/Category.js";
import RestaurantListModel from "./domain/RestaurantListModel.js";
import CategoryListModel from "./domain/CategoryListModel.js";
import Modal from "./Modal.js";

class Index {
  #restaurantListInstance;
  #modal;

  constructor() {
    this.#restaurantListInstance = new RestaurantListModel();
    this.#modal = new Modal(this.#restaurantListInstance);
  }

  init() {
    addEventListener("load", () => {
      headerRender("점심 뭐 먹지");
      categoryRender("전체", "#category-filter", new CategoryListModel());
      restaurantRender(this.#restaurantListInstance);

      this.#clickEvent();
    });
  }

  get restaurantListInstance() {
    return this.#restaurantListInstance;
  }

  #clickEvent() {
    this.#gnbButtonClick();
    this.#categoryFilterChange();
    this.#sortFilterChange();
  }

  #gnbButtonClick() {
    document.getElementById("gnb__button").addEventListener("click", () => {
      this.#modal.openModal();
    });
  }

  #categoryFilterChange() {
    document
      .getElementById("category-filter")
      .addEventListener("change", () => {
        filterRestaurant(this.#restaurantListInstance);
      });
  }

  #sortFilterChange() {
    document.getElementById("sorting-filter").addEventListener("change", () => {
      filterRestaurant(this.#restaurantListInstance);
    });
  }
}

const index = new Index();
index.init();
