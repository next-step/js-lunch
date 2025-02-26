import image from "../public/assets/favorite-icon-filled.png";

console.log("npm run dev 명령어를 통해 점심 뭐 먹지 미션을 시작하세요");
console.log(
  "%c ___       ___  ___  ________   ________  ___  ___     \n" +
    "|\\  \\     |\\  \\|\\  \\|\\   ___  \\|\\   ____\\|\\  \\|\\  \\    \n" +
    "\\ \\  \\    \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\___|\\ \\  \\\\\\  \\   \n" +
    " \\ \\  \\    \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\    \\ \\   __  \\  \n" +
    "  \\ \\  \\____\\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\____\\ \\  \\ \\  \\ \n" +
    "   \\ \\_______\\ \\_______\\ \\__\\\\ \\__\\ \\_______\\ \\__\\ \\__\\\n" +
    "    \\|_______|\\|_______|\\|__| \\|__|\\|_______|\\|__|\\|__|",
  "color: #d81b60; font-size: 14px; font-weight: bold;",
);

// 자바스크립트 코드에서 이미지 리소스 로드 테스트
// index.html 파일의 html 구조를 수정하셔도 됩니다.
import { createHeader } from "./components/Header.js";
import { createRestaurantItem } from "./components/RestaurantItem.js";
import Modal from "./components/Modal.js";
import { restaurantsData } from "./data/restaurants.js";

const modal = new Modal();

addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("main");

  const header = createHeader("점심 뭐 먹지");
  app.prepend(header);

  const restaurantAddButton = document.querySelector(".gnb__button");
  restaurantAddButton.addEventListener("click", () => {
    modal.toggle();
  });

  const restaurantList = document.querySelector(".restaurant-list");
  restaurantsData.forEach((restaurant) => {
    const restaurantItem = createRestaurantItem(restaurant);
    restaurantList.append(restaurantItem);
  });

  app.append(modal.rendered);
});
