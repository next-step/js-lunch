import { toHTML } from "../utils/dom.js";

export default class DetailModal {
  #container;
  #opened = false;

  constructor() {
    this.#container = toHTML(`
      <div class="modal detail-modal">
        <div class="modal-backdrop"></div>
        <div class="modal-container">
          <h2 class="modal-title text-title" id="detail-title"></h2>
          <p class="detail-distance text-body" id="detail-distance"></p>
          <p class="detail-description text-body" id="detail-description"></p>
          <a class="detail-link text-body" id="detail-link" target="_blank" rel="noopener"></a>
          <div class="button-container">
            <button type="button" class="button button--secondary text-caption" id="close-btn">닫기</button>
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
  }

  setRestaurant(restaurant) {
    const titleEl = this.#container.querySelector("#detail-title");
    const distanceEl = this.#container.querySelector("#detail-distance");
    const descEl = this.#container.querySelector("#detail-description");
    const linkEl = this.#container.querySelector("#detail-link");

    titleEl.textContent = restaurant.name || "이름 없음";
    distanceEl.textContent = `캠퍼스부터 ${restaurant.distance}분 내`;
    descEl.textContent = restaurant.description || "";

    if (restaurant.link) {
      linkEl.textContent = restaurant.link;
      linkEl.href = restaurant.link;
      linkEl.style.display = "block";
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

  close() {
    if (this.#opened) this.toggle();
  }

  get container() {
    return this.#container;
  }
}
