import { RestaurantItem } from "./RestaurantItem.js";
import { RestaurantFilter } from "./RestaurantFilter.js";

export function RestaurantList(restaurantsData) {
  const state = { category: "전체", sort: "name" };

  const restaurantList = document.createElement("section");
  restaurantList.classList.add("restaurant-list-container");

  const filterElement = RestaurantFilter(state.category, state.sort);
  restaurantList.appendChild(filterElement);

  const listElement = document.createElement("ul");
  listElement.classList.add("restaurant-list");
  restaurantList.appendChild(listElement);

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
    listElement.innerHTML = "";
    sortedData().forEach((restaurant) => {
      listElement.appendChild(RestaurantItem(restaurant));
    });
  };

  const categorySelect = filterElement.querySelector("#category-filter");
  const sortSelect = filterElement.querySelector("#sorting-filter");

  categorySelect.addEventListener("change", (e) => {
    state.category = e.target.value;
    updateRestaurantList();
  });
  sortSelect.addEventListener("change", (e) => {
    state.sort = e.target.value;
    updateRestaurantList();
  });

  updateRestaurantList();

  return restaurantList;
}
