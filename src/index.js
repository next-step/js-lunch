import { createHeader } from "./components/header";
import { createSelect } from "./components/select";

const createCategoryFilter = () => {
  return createSelect({
    name: "category",
    id: "category-filter",
    className: "restaurant-filter",
    values: ["전체", "한식", "중식", "일식", "양식", "아시안", "기타"],
    labels: {
      전체: "전체",
      한식: "한식",
      중식: "중식",
      일식: "일식",
      양식: "양식",
      아시안: "아시안",
      기타: "기타",
    },
  });
};

const createSortingFilter = () => {
  return createSelect({
    name: "sorting",
    id: "sorting-filter",
    className: "restaurant-filter",
    values: ["name", "distance"],
    labels: {
      name: "이름순",
      distance: "거리순",
    },
  });
};

addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");

  const header = createHeader();
  app.prepend(header);

  const categoryFilter = createCategoryFilter();
  const sortingFilter = createSortingFilter();

  const restaurantFilterContainer = document.createElement("section");
  restaurantFilterContainer.classList.add("restaurant-filter-container");
  restaurantFilterContainer.append(categoryFilter, sortingFilter);
  app.append(restaurantFilterContainer);
});
