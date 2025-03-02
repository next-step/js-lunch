import { detailRender } from "./components/Detail.js";
import { restaurantRender } from "./components/Restaurant.js";

class DetailModal {
  #restaurantListInstance;
  #id;

  constructor(restaurantListInstance) {
    this.#restaurantListInstance = restaurantListInstance;
    this.#init();
  }

  openModal(id) {
    this.#id = id;
    this.#detailRender();
    const modal = document.querySelector(".detail");
    modal.classList.add("modal--open");
  }

  #detailRender() {
    detailRender(this.#restaurantListInstance, this.#id);
    this.#favoriteIconClick();
  }

  #init() {
    this.#clickEvent();
  }

  #clickEvent() {
    this.#cancelButtonClick();
    this.#removeButtionClick();
  }

  #cancelButtonClick() {
    document
      .getElementById("cancel__button__detail")
      .addEventListener("click", () => {
        this.#closeModal();
      });
  }

  #removeButtionClick() {
    document
      .getElementById("remove__button_detail")
      .addEventListener("click", () => {
        this.#restaurantListInstance.remove(this.#id);
        this.#closeModal();
        console.log(this.#restaurantListInstance);
      });
  }

  #closeModal() {
    document.querySelector(".detail").classList.remove("modal--open");
    document.dispatchEvent(new Event("modalClosed"));
  }

  #favoriteIconClick() {
    document
      .querySelector(".favorite-detail-icon")
      .addEventListener("click", () => {
        this.#restaurantListInstance.changeFavorite(this.#id);
        this.#detailRender();
      });
  }
}

export default DetailModal;
