import { createHeader } from "./components/Header";
import { restaurantManager } from './domain/restaurant/restaurantManager';

import { addEvent } from "./utils/addEvent";

addEventListener("load", () => {
  const body = document.querySelector("body");
  const header = createHeader();
  body.prepend(header);

  restaurantManager.renderRestaurantList();

  addEvent();
});
