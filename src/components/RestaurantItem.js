import { toHTML } from "../utils/dom.js";
import { categories } from "../data/filters.js";

const CATEGORY_IMAGE_RESOURCES = {
  [categories.KOREAN]: "./src/assets/category-korean.png",
  [categories.ASIAN]: "./src/assets/category-chinese.png",
  [categories.CHINESE]: "./src/assets/category-chinese.png",
  [categories.JAPANESE]: "./src/assets/category-japanese.png",
  [categories.WESTERN]: "./src/assets/category-western.png",
  [categories.ETC]: "./src/assets/category-etc.png",
};

export function RestaurantItem({ category, name, distance, description }) {
  return toHTML(`
    <li class="restaurant">
      <div class="restaurant__category">
        <img
          src="${CATEGORY_IMAGE_RESOURCES[category] || CATEGORY_IMAGE_RESOURCES.기타}"
          alt="${category}"
          class="category-icon"
        />
      </div>
      <div class="restaurant__info">
        <h3 class="restaurant__name text-subtitle">${name}</h3>
        <span class="restaurant__distance text-body">캠퍼스부터 ${distance}분 내</span>
        <p class="restaurant__description text-body">${description}</p>
      </div>
    </li>
  `);
}
