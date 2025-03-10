import { RestaurantItem } from "./RestaurantItem.js";
import { toHTML } from "../utils/dom.js";

// 기본 상수
const DEFAULT_CATEGORY = "전체";
const DEFAULT_SORT = "name";

const CATEGORY_OPTIONS = [
  "전체",
  "한식",
  "중식",
  "일식",
  "양식",
  "아시안",
  "기타",
];
const SORT_OPTIONS = [
  { value: "name", text: "이름순" },
  { value: "distance", text: "거리순" },
];

export function RestaurantList(restaurantsData) {
  const state = { category: DEFAULT_CATEGORY, sort: DEFAULT_SORT };

  const restaurantList = document.createElement("section");
  restaurantList.classList.add("restaurant-list-container");

  const filterHTML = `
    <section class="restaurant-filter-container">
      <select id="category-filter" class="restaurant-filter">
        ${CATEGORY_OPTIONS.map(
          (value) =>
            `<option value="${value}" ${value === state.category ? "selected" : ""}>${value}</option>`,
        ).join("")}
      </select>
      <select id="sorting-filter" class="restaurant-filter">
        ${SORT_OPTIONS.map(
          ({ value, text }) =>
            `<option value="${value}" ${value === state.sort ? "selected" : ""}>${text}</option>`,
        ).join("")}
      </select>
    </section>
  `;
  const filterElement = toHTML(filterHTML);
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
    const data = sortedData();
    listElement.innerHTML = "";
    data.forEach((restaurant) => {
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

  return {
    restaurantList,
  };
}
