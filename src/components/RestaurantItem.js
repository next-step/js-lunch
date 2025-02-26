const CATEGORY_IMAGE_RESOURCES = {
  한식: "./public/assets/category-korean.png",
  아시안: "./public/assets/category-chinese.png",
  중식: "./public/assets/category-chinese.png",
  일식: "./public/assets/category-japanese.png",
  양식: "./public/assets/category-western.png",
  기타: "./public/assets/category-etc.png",
};

export function createRestaurantItem({ category, name, distance, description }) {
  const item = document.createElement("li");
  item.classList.add("restaurant");

  item.innerHTML = /*html*/ `
  <div class="restaurant__category">
    <img
      src="${
        CATEGORY_IMAGE_RESOURCES[category] || CATEGORY_IMAGE_RESOURCES.기타
      }"
      alt="${category}"
      class="category-icon"
    />
  </div>
  <div class="restaurant__info">
    <h3 class="restaurant__name text-subtitle">${name}</h3>
    <span class="restaurant__distance text-body"
      >${distance}</span
    >
    <p class="restaurant__description text-body">
      ${description}
    </p>
  </div>`;

  return item;
}
