export function filterRestaurant({ restaurant, category }) {
  if (category === "all") {
    return true;
  }

  return restaurant.category === category;
}
