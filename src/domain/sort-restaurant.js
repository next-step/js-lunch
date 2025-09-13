export function sortRestaurant({ a, b, sorting }) {
  if (sorting === "name") {
    return a.title.localeCompare(b.title, "ko-KR");
  }

  if (sorting === "distance") {
    return a.distance - b.distance;
  }

  return 0;
}
