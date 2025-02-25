import { sortingByDistance, sortingByName } from './sorting';
import { filterByCategory } from './filter';

export const sortingBy = (value) => {
  if (value === "distance") return sortingByDistance();
  if (value === "name") return sortingByName();
};

export const filterBy = (value) => {
  if (value === "전체") return filterByCategory();
  return filterByCategory(value);
};
