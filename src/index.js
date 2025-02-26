import { headerRender } from "./components/Header.js";
import { filterRestaurant, restaurantRender } from "./components/Restaurant.js";
import { categoryRender } from "./components/Category.js";
import RestaurantListModel from "./domain/RestaurantListModel.js";
import CategoryListModel from "./domain/CategoryListModel.js";

class Index {
  #restaurantListInstance;

  init() {
    addEventListener("load", () => {
      headerRender("점심 뭐 먹지");
      categoryRender(new CategoryListModel());
      this.#restaurantListInstance = new RestaurantListModel();
      restaurantRender(this.#restaurantListInstance);
    });

    document
      .getElementById("category-filter")
      .addEventListener("change", () => {
        filterRestaurant(this.#restaurantListInstance);
      });

    document.getElementById("sorting-filter").addEventListener("change", () => {
      filterRestaurant(this.#restaurantListInstance);
    });
  }
}

const index = new Index();
index.init();
