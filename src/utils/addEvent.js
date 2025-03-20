import Modal from "../components/modal/Modal";
import { restaurantManager } from '../domain/restaurant/restaurantManager';


export const addEvent = () => {
  const categoryFilter = document.getElementById("category-filter");
  const sortingFilter = document.getElementById("sorting-filter");

  categoryFilter.addEventListener("change", () => restaurantManager.renderRestaurantList());
  sortingFilter.addEventListener("change", () => restaurantManager.renderRestaurantList());

  const modal = new Modal();
  const restaurantGnbButton = document.querySelector(".gnb__button");
  restaurantGnbButton.addEventListener("click", () => modal.toggle());
};
