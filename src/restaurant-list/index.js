import { createSelectContainer } from "src/ui/select";

import { createCategoryFilter } from "./components/category-filter";
import { createSortingFilter } from "./components/sorting-filter";
import {
  createRestaurantList,
  createRestaurantListContainer,
} from "./components/list";

export const createRestaurantFilter = () => {
  const restaurantFilterContainer = createSelectContainer();

  const categoryFilter = createCategoryFilter();
  const sortingFilter = createSortingFilter();

  restaurantFilterContainer.append(categoryFilter, sortingFilter);

  return restaurantFilterContainer;
};

export const createRestaurantListSection = (data) => {
  const restaurantListContainer = createRestaurantListContainer();

  const restaurantList = document.createElement("ul");
  restaurantList.classList.add("restaurant-list");
  restaurantListContainer.append(restaurantList);

  const restaurantElements = data.map((restaurant) => {
    return createRestaurantList(restaurant);
  });

  restaurantList.append(...restaurantElements);
  return restaurantListContainer;
};
