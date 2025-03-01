import { CATEGORIES } from "src/entities/category";

export const filterListByCategory = (list, category) => {
  return list.filter((item) => item.category === CATEGORIES[category]);
};

export const sortingList = (list, sorting) => {
  switch (sorting) {
    case "name":
      return list.sort((a, b) => a.name.localeCompare(b.name, "ko"));
    case "distance":
      return list.sort((a, b) => a.distanceMinutes - b.distanceMinutes);
    default:
      return list;
  }
};
