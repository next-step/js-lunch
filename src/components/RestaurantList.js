import { RestaurantItem } from "./RestaurantItem.js";
import { RestaurantFilter } from "./RestaurantFilter.js";

export function RestaurantList(restaurantsData) {
  const state = { category: "전체", sort: "name" };

  const $restaurantContainer = document.createElement("section");
  $restaurantContainer.classList.add("restaurant-list-container");

  const $filter = RestaurantFilter(state.category, state.sort);
  $restaurantContainer.appendChild($filter);

  const $restaurantList = document.createElement("ul");
  $restaurantList.classList.add("restaurant-list");
  $restaurantContainer.appendChild($restaurantList);

  const sortedData = () => {
    const filtered =
      state.category === "전체"
        ? restaurantsData
        : restaurantsData.filter((r) => r.category === state.category);
    return state.sort === "name"
      ? [...filtered].sort((a, b) => a.name.localeCompare(b.name))
      : [...filtered].sort((a, b) => a.distance - b.distance);
  };

  const updateRestaurantList = () => {
    $restaurantList.innerHTML = "";
    sortedData().forEach((restaurant) => {
      $restaurantList.appendChild(RestaurantItem(restaurant));
    });
  };

  const categorySelect = $filter.querySelector("#category-filter");
  const sortSelect = $filter.querySelector("#sorting-filter");

  categorySelect.addEventListener("change", (e) => {
    state.category = e.target.value;
    updateRestaurantList();
  });
  sortSelect.addEventListener("change", (e) => {
    state.sort = e.target.value;
    updateRestaurantList();
  });

  updateRestaurantList();

  return $restaurantContainer;
}
