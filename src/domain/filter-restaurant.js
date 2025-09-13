export function filterRestaurant({ restaurant, filter }) {
  if (filter === "all") {
    return true;
  }

  return restaurant.category === filter;
}
