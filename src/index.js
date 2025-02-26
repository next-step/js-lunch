import { createHeader } from "./components/Header";
import { createRestaurantListSection } from "./components/RestaurantListSection";
import { restaurantData } from './data/restaurantData';
import { addEvent } from "./utils/addEvent";

addEventListener("load", () => {
  const body = document.querySelector("body");
  const header = createHeader();
  body.prepend(header);

  const main = document.querySelector("main");
  const restaurantListSection = createRestaurantListSection(restaurantData);
  main.appendChild(restaurantListSection);

  addEvent();
});
