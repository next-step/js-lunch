export function createRestaurantItem({ name, distance, description }) {
  const item = document.createElement("li");
  item.classList.add("restaurant");

  item.innerHTML = /*html*/ `
  <div class="restaurant__category">
    <img
      src="./public/assets/category-korean.png"
      alt="한식"
      class="category-icon"
    />
  </div>
  <div class="restaurant__info">
    <h3 class="restaurant__name text-subtitle">${name}</h3>
    <span class="restaurant__distance text-body"
      >캠퍼스부터 ${distance}분 내</span
    >
    <p class="restaurant__description text-body">
      ${description}
    </p>
  </div>`;

  return item;
}
