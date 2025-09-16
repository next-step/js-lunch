const RESTAURANT_CATEGORY_IMAGES = {
  한식: `${import.meta.env.BASE_URL}assets/category-korean.png`,
  중식: `${import.meta.env.BASE_URL}assets/category-chinese.png`,
  일식: `${import.meta.env.BASE_URL}assets/category-japanese.png`,
  양식: `${import.meta.env.BASE_URL}assets/category-western.png`,
  아시안: `${import.meta.env.BASE_URL}assets/category-asian.png`,
  기타: `${import.meta.env.BASE_URL}assets/category-etc.png`,
};

export function createRestaurantListItem({
  category,
  name,
  distanceTime,
  description,
}) {
  const restaurantListItem = document.createElement("li");
  restaurantListItem.classList.add("restaurant");
  restaurantListItem.innerHTML = `
  <div class="restaurant__category">
    <img
      src="${
        RESTAURANT_CATEGORY_IMAGES[category] ||
        RESTAURANT_CATEGORY_IMAGES["기타"]
      }"
      alt="${category}"
      class="category-icon"
    />
  </div>
  <div class="restaurant__info">
    <h3 class="restaurant__name text-subtitle">${name}</h3>
    <span class="restaurant__distance text-body"
      >캠퍼스부터 ${distanceTime}분 내</span
    >
    <p class="restaurant__description text-body">
      ${description}
    </p>
  </div>`;

  return restaurantListItem;
}
