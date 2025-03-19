import { RESTAURANT_DATA } from "./constants";

export const saveRestaurantData = (restaurants) => {
  localStorage.setItem(RESTAURANT_DATA, JSON.stringify(restaurants));
};

export const loadRestaurantData = () => {
  const storedRestaurants = localStorage.getItem(RESTAURANT_DATA);
  return JSON.parse(storedRestaurants);
};
