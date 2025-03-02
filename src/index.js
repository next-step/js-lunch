import { headerRender } from "./components/Header.js";
import { filterRestaurant, restaurantRender } from "./components/Restaurant.js";
import { categoryRender } from "./components/Category.js";
import RestaurantListModel from "./domain/RestaurantListModel.js";
import CategoryListModel from "./domain/CategoryListModel.js";
import Modal from "./Modal.js";
import DetailModal from "./DetailModal.js";

class Index {
  #restaurantListInstance;
  #modal;
  #detailModal;

  constructor() {
    this.#restaurantListInstance = new RestaurantListModel();
    this.#modal = new Modal(this.#restaurantListInstance);
    this.#detailModal = new DetailModal(this.#restaurantListInstance);
  }

  init() {
    addEventListener("load", () => {
      headerRender("점심 뭐 먹지");
      categoryRender("전체", "#category-filter", new CategoryListModel());
      this.#restaurantRender(this.#restaurantListInstance.restaurants);
      this.#clickEvent();
      this.#modalClosedEvent();
    });
  }

  get restaurantListInstance() {
    return this.#restaurantListInstance;
  }

  #restaurantRender(restaurants) {
    restaurantRender(restaurants);
    this.#favoriteIconClick();
    this.#restaurentInfolick();
  }

  #filterRestaurantRender() {
    filterRestaurant(this.#restaurantListInstance);
    this.#restaurantRender(this.#restaurantListInstance.restaurants);
  }

  #clickEvent() {
    this.#gnbButtonClick();
    this.#categoryFilterChange();
    this.#sortFilterChange();
    this.#favoriteRestaurantClickEvent();
    this.#allRestaurantClickEvent();
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
        this.#filterRestaurantRender();
      });
  }

  #sortFilterChange() {
    document.getElementById("sorting-filter").addEventListener("change", () => {
      this.#filterRestaurantRender();
    });
  }

  #favoriteIconClick() {
    const favoriteIcons = document.querySelectorAll(".favorite-icon");

    favoriteIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        const restaurantItem = icon.closest(".restaurant");
        const value = restaurantItem.querySelector("#id").value;

        this.#restaurantListInstance.changeFavorite(value);
        this.#restaurantRender(this.#restaurantListInstance.restaurants);
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

        this.#detailModal.openModal(value);
      });
    });
  }

  #modalClosedEvent() {
    document.addEventListener("modalClosed", () => {
      this.#restaurantRender(this.#restaurantListInstance.restaurants);
    });
  }

  #favoriteRestaurantClickEvent() {
    document
      .querySelector(".favorite-restaurant")
      .addEventListener("click", () =>
        this.#restaurantFilterClickEvent("favorite")
      );
  }

  #allRestaurantClickEvent() {
    document
      .querySelector(".all-restaurant")
      .addEventListener("click", () => this.#restaurantFilterClickEvent("all"));
  }

  #restaurantFilterClickEvent(type) {
    const isFavorite = type === "favorite";

    const restaurantList = isFavorite
      ? this.#restaurantListInstance.favoriteRestaurants
      : this.#restaurantListInstance.restaurants;

    this.#restaurantRender(restaurantList);

    document
      .querySelector(".favorite-restaurant")
      .classList.toggle("favorite-selected", isFavorite);
    document
      .querySelector(".all-restaurant")
      .classList.toggle("favorite-selected", !isFavorite);

    document
      .querySelector(".restaurant-filter-container")
      .classList.toggle("none", isFavorite);
  }
}

const index = new Index();
index.init();
