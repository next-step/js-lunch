export function createRestaurantTitle({ name, distance }) {
  const container = document.createElement("div");
  container.className = "restaurant__title";

  const nameItem = document.createElement("h3");
  nameItem.className = "restaurant__name text-subtitle";
  nameItem.textContent = name;

  const distanceItem = document.createElement("span");
  distanceItem.className = "restaurant__distance text-body";
  distanceItem.textContent = `캠퍼스부터 ${distance}분 내`;

  container.append(nameItem, distanceItem);

  return container;
}

export function createRestaurantDescription({
  showFullDescription,
  description,
}) {
  const container = document.createElement("p");
  container.className = showFullDescription
    ? "restaurant__description.no-clamp text-body"
    : "restaurant__description text-body";
  container.textContent = description;

  return container;
}

export function createRestaurantLink(link) {
  const container = document.createElement("a");
  container.textContent = link;
  container.href = link;
  container.target = "_blank";

  return container;
}
