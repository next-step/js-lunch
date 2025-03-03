import { createHeader } from "./ui/header";
import { createRestaurantListSection } from "./restaurant-list";

const getRestaurantList = async () => {
  return await fetch("../__mock__/db.json").then((res) => res.json());
};

addEventListener("DOMContentLoaded", async () => {
  const app = document.querySelector("#app");

  const restaurantList = await getRestaurantList();

  const header = createHeader();
  const restaurantListSection = createRestaurantListSection(restaurantList);

  app.append(header, ...restaurantListSection);
});
