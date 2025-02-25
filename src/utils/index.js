import { restaurantData } from "../data/restaurantData";

export const createFragment = () => document.createDocumentFragment();

export const filterByCategory = (category) => {
  if (category === "") return restaurantData;
  return restaurantData.filter(
    (restaurant) => restaurant.category === category,
  );
};
