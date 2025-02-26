import data from "../data.js";

export const sortingByDistance = () => {
  return data.storeList.slice().sort((a, b) => a.distance - b.distance);
};

export const sortingByName = () => {
  return data.storeList.slice().sort((a, b) => a.name - b.name);
};

export const filteringByCategory = (category) => {
  if (!category.length) return data.storeList;
  return data.storeList.slice().filter((item) => item.category === category);
};
