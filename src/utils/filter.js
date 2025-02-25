import { restaurantData } from '../data/restaurantData';

export const filterByCategory = (category) => {
  if (category === "전체") return restaurantData;

  return restaurantData.filter(
    (restaurant) => restaurant.category === category,
  );
};
