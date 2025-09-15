const RESTAURANT_CATEGORY_IMAGES = {
  한식: "/assets/category-korean.png",
  중식: "/assets/category-chinese.png",
  일식: "/assets/category-japanese.png",
  양식: "/assets/category-western.png",
  아시안: "/assets/category-asian.png",
  기타: "/assets/category-etc.png",
};

export function createRestaurantListItem({
  category,
  name,
  distance,
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
      >캠퍼스부터 ${distance} 내</span
    >
    <p class="restaurant__description text-body">
      ${description}
    </p>
  </div>`;

  return restaurantListItem;
}
