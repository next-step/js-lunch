import { createSelectContainer } from "src/ui/select";

import { createCategoryFilter } from "./components/category-filter";
import { createSortingFilter } from "./components/sorting-filter";
import {
  createRestaurantListItem,
  createRestaurantListGroup,
  createRestaurantListContainer,
} from "./components/list";
import { filterListByCategory, sortingList } from "./lib";

const createRestaurantFilterPanel = ({
  onCategoryFilterChange,
  onSortingFilterChange,
}) => {
  const restaurantFilterContainer = createSelectContainer();

  const categoryFilter = createCategoryFilter({
    onChange: (e) => onCategoryFilterChange?.(e),
  });
  const sortingFilter = createSortingFilter({
    onChange: (e) => onSortingFilterChange?.(e),
  });

  restaurantFilterContainer.append(categoryFilter, sortingFilter);

  return restaurantFilterContainer;
};

const createRestaurantListView = (data) => {
  const restaurantListContainer = createRestaurantListContainer();
  const restaurantListGroup = createRestaurantListGroup();

  const restaurantElements = data.map((restaurant) => {
    return createRestaurantListItem(restaurant);
  });

  restaurantListGroup.append(...restaurantElements);
  restaurantListContainer.append(restaurantListGroup);

  return restaurantListContainer;
};

const updateRestaurantList = (data) => {
  const restaurantList = document.querySelector(".restaurant-list");

  restaurantList.replaceChildren();

  const restaurantElements = data.map((restaurant) => {
    return createRestaurantListItem(restaurant);
  });

  restaurantList.append(...restaurantElements);
};

export const createRestaurantListSection = (data) => {
  let filteredData = data;

  const restaurantFilter = createRestaurantFilterPanel({
    onCategoryFilterChange: (e) => {
      filteredData = filterListByCategory(data, e.target.value);
      updateRestaurantList(filteredData);
    },
    onSortingFilterChange: (e) => {
      const sortedData = sortingList(filteredData, e.target.value);
      updateRestaurantList(sortedData);
    },
  });

  const restaurantList = createRestaurantListView(data);

  return [restaurantFilter, restaurantList];
};
