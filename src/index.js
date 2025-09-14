import { Gnb } from "./components/gnb.js";
import { RestaurantFilterContainer } from "./components/restaurant-filter-container.js";
import { RestaurantList } from "./components/restaurant-list.js";

import { restaurantStore } from "./data/restaurant-store.js";
import { categoryFilterStore } from "./data/category-filter-store.js";
import { sortingFilterStore } from "./data/sorting-filter-store.js";

import { $ } from "./utils/dom.js";

main();

function main() {
  render();

  restaurantStore.subscribe(render);
  categoryFilterStore.subscribe(render);
  sortingFilterStore.subscribe(render);
}

function render() {
  const app = $("#app");

  const gnb = new Gnb();
  const restaurantFilterContainer = new RestaurantFilterContainer();
  const restaurantList = new RestaurantList();

  const htmlString = `
  ${gnb.getTemplate()}
  ${restaurantFilterContainer.getTemplate()}
  ${restaurantList.getTemplate()}
  `;

  app.innerHTML = htmlString;

  restaurantFilterContainer.bindEvents();
}
