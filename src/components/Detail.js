const categoryImages = {
  한식: "./templates/category-korean.png",
  일식: "./templates/category-japanese.png",
  중식: "./templates/category-chinese.png",
  아시안: "./templates/category-asian.png",
  양식: "./templates/category-western.png",
  기타: "./templates/category-etc.png",
};

const favoriteImages = {
  true: "./templates/favorite-icon-filled.png",
  false: "./templates/favorite-icon-lined.png",
};

export function detailRender(restaurantListInstance, id) {
  const detailContainer = document.querySelector(".modal-detail-container");
  detailContainer.innerHTML = ""; // 기존 내용을 지워서 빈 상태로 만듭니다.

  const restaurant = restaurantListInstance.findById(id);
  detailContainer.appendChild(createDetail(restaurant)); // createDetail로 이름 변경
}

function createDetail(restaurant) {
  const imageSrc = categoryImages[restaurant.category] || categoryImages.기타;
  const favoriteSrc = favoriteImages[restaurant.favorite];

  const template = document.createElement("template");
  template.innerHTML = /*html*/ `
      <div class="restaurant__detail__category">
        <img src="${imageSrc}" alt="${restaurant.category}" class="category-icon">
      </div>
      <div class="restaurant__detail__info">
        <h3 class="restaurant__name text-subtitle">${restaurant.name}</h3>
        <span class="restaurant__distance text-body">캠퍼스부터 ${restaurant.time}분 내</span>
        <p class="restaurant__detail__description text-body">${restaurant.description}</p>
      </div>
      <div class="restaurant__detail__favorite">
        <img src="${favoriteSrc}" alt="${restaurant.favorite}" class="favorite-detail-icon">
      </div>
    `;

  return template.content.cloneNode(true);
}

export function filterRestaurant(restaurantListInstance) {
  const categoryValue = document.getElementById("category-filter").value;
  const sortingValue = document.getElementById("sorting-filter").value;

  restaurantListInstance.filterByCategory(categoryValue);
  restaurantListInstance.sortBy(sortingValue);
}
