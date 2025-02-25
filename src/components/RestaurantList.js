import { restaurantData } from "../data/restaurantData";
import { createFragment } from '../utils';
import { createRestaurantListItem } from "./RestaurantListItem";

export const createRestaurantList = (restaurants = restaurantData) => {
  const restaurantList = document.createElement("ul");
  restaurantList.classList.add("restaurant-list");

  const fragment = createFragment();

  restaurants.forEach((item) => {
    const listItem = createRestaurantListItem({
      category: item.category,
      name: item.name,
      distance: item.distance,
      description: item.description,
    });

    fragment.appendChild(listItem);
  });

  restaurantList.appendChild(fragment);

  return restaurantList;
};
