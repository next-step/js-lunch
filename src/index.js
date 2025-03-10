// 자바스크립트 코드에서 이미지 리소스 로드 테스트
// index.html 파일의 html 구조를 수정하셔도 됩니다.
import { Header } from "./components/Header.js";
import Modal from "./components/Modal.js";
import { restaurantsData } from "./data/restaurants.js";
import { RestaurantList } from "./components/RestaurantList.js";
import { RestaurantFilter } from "./components/RestaurantFilter.js";

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

function main() {
  const app = document.querySelector("main");
  const state = { category: "전체", sort: "name" };

  const header = Header("점심 뭐 먹지");
  app.append(header);
  const restaurantList = RestaurantList(restaurantsData);
  const filter = RestaurantFilter(state, (newState) => {
    state.category = newState.category;
    state.sort = newState.sort;
    restaurantList.update(state);
  });
  const modal = new Modal();
  app.append(filter, restaurantList.container);

  if (!document.querySelector(".modal")) {
    app.append(modal.rendered);
  }
}

document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", main)
  : main();
