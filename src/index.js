import { createHeader } from "./components/Header";
import { restaurantManagerInstance } from './domain/restaurant/restaurantManager';
import { addEvent } from "./utils/addEvent";

addEventListener("load", () => {
  const body = document.querySelector("body");
  const header = createHeader();
  body.prepend(header);

  restaurantManagerInstance.renderRestaurantList();

  addEvent();
});
