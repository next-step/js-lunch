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

export function restaurantRender(restaurants) {
  const restaurantList = document.querySelector(".restaurant-list");
  restaurantList.innerHTML = "";

  const fragment = document.createDocumentFragment();

  restaurants.forEach((restaurant) => {
    const restaurantElement = createRestaurant(restaurant);
    fragment.appendChild(restaurantElement);
  });

  restaurantList.appendChild(fragment);
}

function createRestaurant(restaurant) {
  const item = document.createElement("li");
  item.classList.add("restaurant");

  const imageSrc = categoryImages[restaurant.category] || categoryImages.기타;
  const favoriteSrc = favoriteImages[restaurant.favorite];

  item.innerHTML = /*html*/ `
        <input hidden id="id" value="${restaurant.id}">
        <div class="restaurant__category">
            <img src="${imageSrc}" alt="${restaurant.category}" class="category-icon">
        </div>
        <div class="restaurant__info">
            <h3 class="restaurant__name text-subtitle">${restaurant.name}</h3>
            <span class="restaurant__distance text-body">캠퍼스부터 ${restaurant.time}분 내</span>
            <p class="restaurant__description text-body">${restaurant.description}</p>
        </div>
        <div class="restaurant__favorite">
          <img src="${favoriteSrc}" alt="${restaurant.favorite}" class="favorite-icon">
        </div>
    `;
  return item;
}

export function filterRestaurant(restaurantListInstance) {
  const categoryValue = document.getElementById("category-filter").value;
  const sortingValue = document.getElementById("sorting-filter").value;

  restaurantListInstance.filterByCategory(categoryValue);
  restaurantListInstance.sortBy(sortingValue);
}
