import { CategoryFilter } from "./components/CategoryFilter.js";
import { createRestaurantListItem } from "./components/RestaurantListItem.js";
import { RESTAURANTS } from "./constants/restaurants.js";
import { CATEGORIES } from "./constants/categories.js";
import { SortingFilter } from "./components/SortingFilter.js";

console.log("npm run dev 명령어를 통해 점심 뭐 먹지 미션을 시작하세요");
console.log(
  "%c ___       ___  ___  ________   ________  ___  ___     \n" +
    "|\\  \\     |\\  \\|\\  \\|\\   ___  \\|\\   ____\\|\\  \\|\\  \\    \n" +
    "\\ \\  \\    \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\___|\\ \\  \\\\\\  \\   \n" +
    " \\ \\  \\    \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\    \\ \\   __  \\  \n" +
    "  \\ \\  \\____\\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\____\\ \\  \\ \\  \\ \n" +
    "   \\ \\_______\\ \\_______\\ \\__\\\\ \\__\\ \\_______\\ \\__\\ \\__\\\n" +
    "    \\|_______|\\|_______|\\|__| \\|__|\\|_______|\\|__|\\|__|",
  "color: #d81b60; font-size: 14px; font-weight: bold;"
);

// 자바스크립트 코드에서 이미지 리소스 로드 테스트
// index.html 파일의 html 구조를 수정하셔도 됩니다.
addEventListener("load", () => {
  const body = document.querySelector("body");

  const filterContainer = body.querySelector(".restaurant-filter-container");
  const categoryFilter = new CategoryFilter({
    id: "category-filter",
    name: "category",
    options: CATEGORIES,
    onChange: (category) => {
      renderRestaurantList({ category, sorting: sortingFilter.sorting });
    },
  });
  const sortingFilter = new SortingFilter({
    id: "sorting-filter",
    name: "sorting",
    options: ["기본순", "이름순", "거리순"],
    onChange: (sorting) => {
      renderRestaurantList({ category: categoryFilter.category, sorting });
    },
  });
  filterContainer.append(categoryFilter.element, sortingFilter.element);

  const restaurantList = body.querySelector(".restaurant-list");
  const restaurantItems = RESTAURANTS.map((restaurant) =>
    createRestaurantListItem(restaurant)
  );

  restaurantList.append(...restaurantItems);
});

function renderRestaurantList({ category, sorting }) {
  const body = document.querySelector("body");
  const restaurantList = body.querySelector(".restaurant-list");

  const restaurantItems = RESTAURANTS.filter((restaurant) =>
    category === "전체" ? true : restaurant.category === category
  )
    .sort((a, b) => {
      if (sorting === "이름순") {
        return a.name.localeCompare(b.name);
      }
      if (sorting === "거리순") {
        return a.distanceTime - b.distanceTime;
      }

      return 0;
    })
    .map((restaurant) => createRestaurantListItem(restaurant));

  restaurantList.replaceChildren(...restaurantItems);
}
