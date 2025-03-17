import { toHTML } from "../utils/dom.js";
import { CATEGORIES, DISTANCE } from "../data/filters.js";

class Modal {
  #container;
  #opened = false;

  constructor() {
    this.#container = toHTML(`
    <div class="modal">
      <div class="modal-backdrop"></div>
      <div class="modal-container">
        <h2 class="modal-title text-title">새로운 음식점</h2>
        <form>
          <div class="form-item form-item--required">
            <label for="category text-caption">카테고리</label>
            <select name="category" id="category" required>
                <option value="">선택해 주세요</option>
                ${Object.values(CATEGORIES)
                  .map((value) => `<option value="${value}">${value}</option>`)
                  .join("")}
              </select>
          </div>
          <!-- 음식점 이름 -->
          <div class="form-item form-item--required">
            <label for="name text-caption">이름</label>
            <input type="text" name="name" id="name" required>
          </div>
          <div class="form-item form-item--required">
            <label for="distance text-caption">거리(도보 이동 시간)</label>
            <select name="distance" id="distance" required>
              <option value="">선택해 주세요</option>
              ${Object.values(DISTANCE)
                .map((value, key) => `<option value="${key}">${value}</option>`)
                .join("")}
            </select>
          </div>
          <!-- 설명 -->
          <div class="form-item">
            <label for="description text-caption">설명</label>
            <textarea name="description" id="description" cols="30" rows="5"></textarea>
            <span class="help-text text-caption">메뉴 등 추가 정보를 입력해 주세요.</span>
          </div>
          <div class="form-item">
            <label for="link text-caption">참고 링크</label>
            <input type="text" name="link" id="link">
            <span class="help-text text-caption">매장 정보를 확인할 수 있는 링크를 입력해 주세요.</span>
          </div>
          <!-- 버튼 -->
          <div class="button-container">
            <button type="button" class="button button--secondary text-caption" id="cancel-btn">취소하기</button>
            <button type="submit" class="button button--primary text-caption">추가하기</button>
          </div>
        </form>
      </div>
    </div>
    `);

    const $form = this.#container.querySelector("form");
    $form.addEventListener("submit", (e) => {
      e.preventDefault();
      const category = $form.category.value;
      const name = $form.name.value;
      const distance = $form.distance.value;
      const description = $form.description.value;
      const link = $form.link.value;

      if (!category || !name || !distance) {
        alert("카테고리, 이름, 거리 는 필수입니다.");
        return;
      }

      const newRestaurant = { category, name, distance, description, link };
      if (this.onAdd) {
        this.onAdd(newRestaurant);
      }
      this.toggle();
      $form.reset();
    });

    this.#container
      .querySelector(".modal-backdrop")
      .addEventListener("click", () => this.toggle());
    this.#container
      .querySelector("#cancel-btn")
      .addEventListener("click", () => this.toggle());
  }

  toggle() {
    this.#opened = !this.#opened;
    this.rendered.classList.toggle("modal--open");
  }

  get rendered() {
    return this.#container;
  }
}

export default Modal;
