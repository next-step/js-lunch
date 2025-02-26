import {
  sortingByDistance,
  sortingByName,
  filteringByCategory,
} from "../domain/store.js";

export const sortingHandler = (value) => {
  if (value === "거리순") {
    return sortingByDistance();
  }

  if (value === "이름순") {
    return sortingByName();
  }
};

export const filteringHandler = (category) => {
  return filteringByCategory(category);
};
