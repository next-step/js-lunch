import asianCategoryIcon from "../../images/category-asian.png";
import chineseCategoryIcon from "../../images/category-chinese.png";
import etcCategoryIcon from "../../images/category-etc.png";
import japaneseCategoryIcon from "../../images/category-japanese.png";
import koreanCategoryIcon from "../../images/category-korean.png";
import westernCategoryIcon from "../../images/category-western.png";

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

export function createRestaurantCategoryIcon({ icon, category }) {
  const container = document.createElement("div");
  container.className = "restaurant__category";

  const image = document.createElement("img");
  image.className = "category-icon";
  image.src = icon;
  image.alt = category;

  container.appendChild(image);

  return container;
}

export function getRestaurantCategoryIcon(category) {
  const iconMap = {
    기타: etcCategoryIcon,
    양식: westernCategoryIcon,
    일식: japaneseCategoryIcon,
    중식: chineseCategoryIcon,
    한식: koreanCategoryIcon,
    아시안: asianCategoryIcon,
  };

  return iconMap[category] ?? "category-etc.png";
}
