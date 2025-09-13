export function restaurantItem({ title, category, distance, description }) {
  return /* HTML */ `
    <li class="restaurant">
      <div class="restaurant__category">
        <img
          src=${CATEGORY_ICON_SRC_MAP[category]}
          alt=${category}
          class="category-icon"
        />
      </div>
      <div class="restaurant__info">
        <h3 class="restaurant__name text-subtitle">${title}</h3>
        <span class="restaurant__distance text-body"
          >캠퍼스부터 ${distance}분 내</span
        >
        <p class="restaurant__description text-body">${description}</p>
      </div>
    </li>
  `;
}

const CATEGORY_ICON_SRC_MAP = {
  asian: "../../public/assets/category-asian.png",
  chinese: "../../public/assets/category-chinese.png",
  etc: "../../public/assets/category-etc.png",
  japanese: "../../public/assets/category-japanese.png",
  korean: "../../public/assets/category-korean.png",
  western: "../../public/assets/category-western.png",
};
