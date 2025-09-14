const CATEGORY_ICON_SRC_MAP = {
  asian: "assets/category-asian.png",
  chinese: "assets/category-chinese.png",
  etc: "assets/category-etc.png",
  japanese: "assets/category-japanese.png",
  korean: "assets/category-korean.png",
  western: "assets/category-western.png",
};

export class RestaurantItem {
  constructor({ title, category, distance, description }) {
    this.title = title;
    this.category = category;
    this.distance = distance;
    this.description = description;
  }

  getTemplate() {
    return /* HTML */ `
      <li class="restaurant">
        <div class="restaurant__category">
          <img
            src=${CATEGORY_ICON_SRC_MAP[this.category]}
            alt=${this.category}
            class="category-icon"
          />
        </div>
        <div class="restaurant__info">
          <h3 class="restaurant__name text-subtitle">${this.title}</h3>
          <span class="restaurant__distance text-body"
            >캠퍼스부터 ${this.distance}분 내</span
          >
          <p class="restaurant__description text-body">${this.description}</p>
        </div>
      </li>
    `;
  }
}
