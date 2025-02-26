export const filterByCategory = (category, restaurants) => {
  if (category === "전체") return restaurants;

  return restaurants.filter((restaurant) => restaurant.category === category);
};
