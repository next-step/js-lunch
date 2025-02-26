import { CATEGORY_IMG_SRC } from "../utils/constants";

export const createRestaurantListItem = ({
  category,
  name,
  distance,
  description,
}) => {
  const restaurantListItem = document.createElement("li");
  restaurantListItem.classList.add("restaurant");

  restaurantListItem.innerHTML = /*html*/ `
        <div class="restaurant__category">
            <img src= "${
              CATEGORY_IMG_SRC[category] || CATEGORY_IMG_SRC.기타
            } " alt="${category}" class="category-icon">
        </div>
        <div class="restaurant__info">
            <h3 class="restaurant__name text-subtitle">${name}</h3>
            <span class="restaurant__distance text-body">캠퍼스부터 ${distance}분 내</span>
            <p class="restaurant__description text-body">
            ${description}
            </p>
        </div>
        `;

  return restaurantListItem;
};
