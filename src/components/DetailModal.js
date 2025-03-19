import { toHTML } from "../utils/dom.js";
import { CATEGORY_IMAGE_RESOURCES } from "../data/restaurants.js";

export default class DetailModal {
  #container;
  #opened = false;

  constructor() {
    this.#container = toHTML(`
      <div class="modal detail-modal">
        <div class="modal-backdrop"></div>
        <div class="modal-container">
          <div class="restaurant__category">
            <img id="detail-image" class="category-icon" alt="카테고리 아이콘">
          </div>
          <h2 class="modal-title text-title" id="detail-title"></h2>
          <p class="detail-distance text-body" id="detail-distance"></p>
          <p class="detail-description text-body" id="detail-description"></p>
          <a class="detail-link text-body" id="detail-link" target="_blank" rel="noopener"></a>
          <div class="button-container">
            <button type="button" class="button button--secondary text-caption" id="delete-btn">삭제하기</button>
            <button type="button" class="button button--primary text-caption" id="close-btn">닫기</button>
          </div>
        </div>
      </div>
    `);

    this.#container
      .querySelector(".modal-backdrop")
      .addEventListener("click", () => this.toggle());

    this.#container
      .querySelector("#close-btn")
      .addEventListener("click", () => this.toggle());

    this.#container
      .querySelector("#delete-btn")
      .addEventListener("click", () => {
        if (this.currentRestaurant && this.onDelete) {
          this.onDelete(this.currentRestaurant);
        }
        this.toggle();
      });
  }

  setRestaurant(restaurant) {
    this.currentRestaurant = restaurant;
    const $image = this.#container.querySelector("#detail-image");
    const $title = this.#container.querySelector("#detail-title");
    const $distance = this.#container.querySelector("#detail-distance");
    const $description = this.#container.querySelector("#detail-description");
    const $link = this.#container.querySelector("#detail-link");

    const categoryImage = CATEGORY_IMAGE_RESOURCES[restaurant.category] || "";
    if (categoryImage) {
      $image.src = categoryImage;
      $image.style.display = "block";
    }
    $title.textContent = restaurant.name || "이름 없음";
    $distance.textContent = `캠퍼스부터 ${restaurant.distance}분 내`;
    $description.textContent = restaurant.description || "";

    if (restaurant.link) {
      $link.textContent = restaurant.link;
      $link.href = restaurant.link;
      $link.style.display = "block";
    }
  }

  toggle() {
    this.#opened = !this.#opened;
    this.container.classList.toggle("modal--open");
  }

  open(restaurant) {
    this.setRestaurant(restaurant);
    if (!this.#opened) {
      this.toggle();
    }
  }

  get container() {
    return this.#container;
  }
}
