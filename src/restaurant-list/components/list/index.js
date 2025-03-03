import { createList } from "src/ui/list";
import { createIcon } from "src/ui/icon";

import { CATEGORIES } from "src/entities/category";

const IMAGE_PATHS = {
  [CATEGORIES.korean]: "category-korean.png",
  [CATEGORIES.chinese]: "category-chinese.png",
  [CATEGORIES.japanese]: "category-japanese.png",
  [CATEGORIES.western]: "category-western.png",
  [CATEGORIES.asian]: "category-asian.png",
  [CATEGORIES.etc]: "category-etc.png",
};

const createRestaurantCategoryImage = (category) => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("restaurant__category");

  const categoryImage = createIcon({
    src: `../public/assets/${IMAGE_PATHS[category]}`,
    alt: category,
  });

  imageContainer.append(categoryImage);
  return imageContainer;
};

const createRestaurantNameText = (name) => {
  const subtitle = document.createElement("h3");
  subtitle.classList.add("restaurant__name", "text-subtitle");
  subtitle.textContent = name;
  return subtitle;
};

const createRestaurantDistanceText = (distance) => {
  const body = document.createElement("span");
  body.classList.add("restaurant__distance", "text-body");
  body.textContent = `캠퍼스로부터 ${distance}분 내`;
  return body;
};

const createRestaurantDescriptionText = (description) => {
  const body = document.createElement("p");
  body.classList.add("restaurant__description", "text-body");
  body.textContent = description;
  return body;
};

const createRestaurantInfoSection = (restaurant) => {
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("restaurant__info");

  const name = createRestaurantNameText(restaurant.name);
  const distance = createRestaurantDistanceText(restaurant.distanceMinutes);
  const description = createRestaurantDescriptionText(restaurant.description);

  infoContainer.append(name, distance, description);

  return infoContainer;
};

export const createRestaurantListItem = (restaurant) => {
  const restaurantElement = createList();

  const categoryImage = createRestaurantCategoryImage(restaurant.category);
  restaurantElement.append(categoryImage);

  const infoContainer = createRestaurantInfoSection(restaurant);
  restaurantElement.append(infoContainer);

  return restaurantElement;
};

export const createRestaurantListGroup = () => {
  const restaurantListGroup = document.createElement("ul");
  restaurantListGroup.classList.add("restaurant-list");
  return restaurantListGroup;
};

export const createRestaurantListContainer = () => {
  const restaurantListContainer = document.createElement("section");
  restaurantListContainer.classList.add("restaurant-list-container");

  return restaurantListContainer;
};
