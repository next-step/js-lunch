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
      this.#restaurantRender();
      this.#clickEvent();
    });
  }

  get restaurantListInstance() {
    return this.#restaurantListInstance;
  }

  #restaurantRender() {
    restaurantRender(this.#restaurantListInstance);
    this.#favoriteIconClick();
    this.#restaurentInfolick();
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

  #favoriteIconClick() {
    const favoriteIcons = document.querySelectorAll(".favorite-icon");

    favoriteIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        const restaurantItem = icon.closest(".restaurant");
        const value = restaurantItem.querySelector("#id").value;

        this.#restaurantListInstance.changeFavorite(value);
        this.#restaurantRender();
      });
    });
  }
  #restaurentInfolick() {
    const restaurantInfo = document.querySelectorAll(".restaurant__info");

    restaurantInfo.forEach((info) => {
      info.addEventListener("click", () => {
        const restaurantItem = info.closest(".restaurant");
        const value = restaurantItem.querySelector("#id").value;
        console.log(value);
      });
    });
  }
}

const index = new Index();
index.init();
