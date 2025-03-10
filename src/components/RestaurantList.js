import { RestaurantItem } from "./RestaurantItem.js";

export function RestaurantList(restaurantsData) {
  const container = document.createElement("section");
  container.classList.add("restaurant-list-container");

  const listElement = document.createElement("ul");
  listElement.classList.add("restaurant-list");
  container.appendChild(listElement);

  function update(state) {
    const filteredData =
      state.category === "전체"
        ? restaurantsData
        : restaurantsData.filter((r) => r.category === state.category);
    const sortedData =
      state.sort === "name"
        ? [...filteredData].sort((a, b) => a.name.localeCompare(b.name))
        : [...filteredData].sort((a, b) => a.distance - b.distance);
    listElement.innerHTML = "";
    sortedData.forEach((restaurant) => {
      listElement.appendChild(RestaurantItem(restaurant));
    });
  }

  update({ category: "전체", sort: "name" });

  return { container, update };
}
