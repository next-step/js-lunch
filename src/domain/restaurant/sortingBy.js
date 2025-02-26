export const sortingBy = (value, restaurants) => {
  const dataToSort = [...restaurants];

  if (value === "distance") {
    return dataToSort.sort(
      (restaurantA, restaurantB) => restaurantA.distance - restaurantB.distance,
    );
  }

  if (value === "name") {
    return dataToSort.sort((restaurantA, restaurantB) =>
      restaurantA.name.localeCompare(restaurantB.name),
    );
  }
};
