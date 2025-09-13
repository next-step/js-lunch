import { restaurantList } from "./components/restaurant-list.js";
import { RESTAURANTS_MOCK } from "./data/restaurant.js";

main();

function main() {
  render();
  initEvents();
}

function render() {
  const app = document.querySelector("#app");

  const filter = document.querySelector("#category-filter").value;
  const sorting = document.querySelector("#sorting-filter").value;

  const restaurants = RESTAURANTS_MOCK.filter((restaurant) => {
    if (filter === "all") {
      return true;
    }

    return restaurant.category === filter;
  }).sort((a, b) => {
    if (sorting === "name") {
      return a.title.localeCompare(b.title, "ko-KR");
    }

    if (sorting === "distance") {
      return a.distance - b.distance;
    }

    return 0;
  });

  const htmlString = `${restaurantList({ restaurants })}`;

  app.insertAdjacentHTML("beforeend", htmlString);
}

function initEvents() {
  const filterSelectBox = document.querySelector("#category-filter");
  const sortingSelectBox = document.querySelector("#sorting-filter");

  filterSelectBox.addEventListener("change", (event) => {
    console.log(event.target.value);

    render();
  });
  sortingSelectBox.addEventListener("change", (event) => {
    console.log(event.target.value);

    render();
  });
}
