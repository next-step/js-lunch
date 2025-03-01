import CategoryListModel from "./domain/CategoryListModel.js";
import { categoryRender } from "./components/Category.js";

class Modal {
  #restaurantListInstance;

  constructor(restaurantListInstance) {
    this.#restaurantListInstance = restaurantListInstance;
    this.#init();
  }

  openModal() {
    const modal = document.querySelector(".modal");
    modal.classList.add("modal--open");
  }

  #init() {
    categoryRender("선택해 주세요", "#category", new CategoryListModel());
    this.#clickEvent();
  }

  #clickEvent() {
    this.#cancelButtonClick();
    this.#submitButtonClick();
  }

  #cancelButtonClick() {
    document.getElementById("cancelButton").addEventListener("click", () => {
      const modal = document.querySelector(".modal");
      modal.classList.remove("modal--open");
    });
  }

  #submitButtonClick() {
    document
      .querySelector(".button--primary")
      .addEventListener("click", (event) => {
        this.#addRestaurant();
      });
  }

  #addRestaurant() {
    const restaurantData = this.#validateRestaurantData();

    if (!restaurantData) {
      return;
    }

    this.#restaurantListInstance.addRestaurant(
      restaurantData.category,
      restaurantData.name,
      restaurantData.time,
      restaurantData.description,
      restaurantData.link
    );

    this.#closeModal();
  }

  #validateRestaurantData() {
    const category = this.#validationCategory();
    const name = this.#validationName();
    const time = this.#validationTime();
    const description = document.getElementById("description").value;
    const link = document.getElementById("link").value;

    if (!category || !name || !time) {
      return null;
    }

    return {
      category,
      name,
      time,
      description,
      link,
    };
  }

  #closeModal() {
    const modal = document.querySelector(".modal");
    modal.classList.remove("modal--open");
    document.dispatchEvent(new Event("modalClosed"));
  }

  #validationCategory() {
    const category = document.getElementById("category").value;
    if (category === "") {
      alert("카테고리를 입력하십시오");
      return null;
    }
    return category;
  }

  #validationName() {
    const name = document.getElementById("name").value;
    if (name === "") {
      alert("음식점명을 입력하십시오");
      return null;
    }
    return name;
  }

  #validationTime() {
    const time = document.getElementById("time").value;
    if (time === "") {
      alert("소요 시간을 입력하십시오");
      return null;
    }
    return time;
  }
}

export default Modal;
