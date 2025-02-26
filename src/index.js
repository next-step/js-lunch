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

const modal = new Modal();

addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("main");

  const header = createHeader();
  app.prepend(header);

  const restaurantAddButton = document.querySelector(".gnb__button");
  restaurantAddButton.addEventListener("click", () => {
    modal.toggle();
  });

  const restaurantList = document.querySelector(".restaurant-list");
  restaurantList.prepend(
    createRestaurantItem({
      category: "한식",
      name: "피양콩할마니",
      distance: 5,
      description:
        "평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩할마니. 두부를 빼지 않은 되비지를 맛볼 수 있는 곳으로, ‘피양’은 평안도 사투리로 ‘평양’을 의미한다. 딸과 함께 운영하는 이곳에선 맷돌로 직접 간 콩만을 사용하며, 일체의 조미료를 넣지 않은 건강식을 선보인다. 콩비지와 피양 만두가 이곳의 대표 메뉴지만, 할머니가 옛날 방식을 고수하며 만들어내는 비지전골 또한 이 집의 역사를 느낄 수 있는 특별한 메뉴다. 반찬은 손님들이 먹고 싶은",
    }),
  );
  restaurantList.append(
    createRestaurantItem({
      category: "중식",
      name: "친친",
      distance: 5,
      description:
        "Since 2004 편리한 교통과 주차, 그리고 관록만큼 깊은 맛과 정성으로 정통 중식의 세계를 펼쳐갑니다",
    }),
  );

  app.append(modal.rendered);
});
