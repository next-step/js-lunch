import { createHeader } from "./components/Header";
import { createRestaurantListSection } from "./components/RestaurantListSection";
import { addEvent } from "./utils/addEvent";

addEventListener("load", () => {
  const body = document.querySelector("body");
  const header = createHeader();
  body.prepend(header);

  const main = document.querySelector("main");
  const restaurantListSection = createRestaurantListSection();
  main.appendChild(restaurantListSection);

  addEvent();
});
