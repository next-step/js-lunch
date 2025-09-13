import { restaurantList } from "./components/restaurant-list.js";
import { RESTAURANTS_MOCK } from "./data/restaurant.js";
import { filterRestaurant } from "./domain/filter-restaurant.js";
import { sortRestaurant } from "./domain/sort-restaurant.js";
import { $ } from "./utils/dom.js";

main();

function main() {
  render();
  initEvents();
}

function render() {
  const app = $("#app");

  const filter = $("#category-filter").value;
  const sorting = $("#sorting-filter").value;

  const restaurants = RESTAURANTS_MOCK.filter((restaurant) =>
    filterRestaurant({ restaurant, filter })
  ).sort((a, b) => sortRestaurant({ a, b, sorting }));

  const htmlString = `${restaurantList({ restaurants })}`;

  app.insertAdjacentHTML("beforeend", htmlString);
}

function initEvents() {
  const filterSelectBox = $("#category-filter");
  const sortingSelectBox = $("#sorting-filter");

  filterSelectBox.addEventListener("change", () => {
    render();
  });
  sortingSelectBox.addEventListener("change", () => {
    console.log(event.target.value);

    render();
  });
}
