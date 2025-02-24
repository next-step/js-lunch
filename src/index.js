import { createHeader } from "./components/Header";
import { createRestaurantListSection } from './components/RestaurantListSection';

addEventListener("load", () => {
  const body = document.querySelector("body");
  const header = createHeader();
  body.prepend(header);

  const restaurantListSection = createRestaurantListSection();

  body.appendChild(restaurantListSection);
});
