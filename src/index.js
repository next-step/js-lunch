import { createHeaderComponent } from "./components/header/header";
import { createRestaurantListComponent } from "./components/restaurantList./createRestaurantList";
import { RESTAURANT_LIST } from "./components/restaurantList./constant";
import { createSelectComponent } from "./components/select/select";
import {
  RESTAURANT_CATEGORY_LIST,
  SORT_OPTION_LIST,
} from "./components/select/constant";
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
  const app = document.querySelector("main");
  app.prepend(createHeaderComponent());

  const section = document.querySelector(".restaurant-filter-container");
  section.appendChild(
    createSelectComponent({
      attName: "category",
      className: "restaurant-filter",
      id: "category-filter",
      options: RESTAURANT_CATEGORY_LIST,
    })
  );

  section.appendChild(
    createSelectComponent({
      attName: "sorting",
      className: "restaurant-filter",
      id: "sorting-filter",
      options: SORT_OPTION_LIST,
    })
  );

  const restaurantList = document.querySelector(".restaurant-list");

  RESTAURANT_LIST.forEach((restaurant) => {
    restaurantList.appendChild(createRestaurantListComponent(restaurant));
  });
});
