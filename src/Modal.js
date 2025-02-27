import CategoryListModel from "./domain/CategoryListModel.js";
import { categoryRender } from "./components/Category.js";
import { restaurantRender } from "./components/Restaurant.js";

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
    this.#submitButtionClick();
  }

  #cancelButtonClick() {
    document.getElementById("cancelButton").addEventListener("click", () => {
      const modal = document.querySelector(".modal");
      modal.classList.remove("modal--open");
    });
  }

  #submitButtionClick() {
    document
      .querySelector(".button--primary")
      .addEventListener("click", (event) => {
        const category = this.#validationCategory();
        const name = this.#validationName();
        const time = this.#validationTime();
        const description = document.getElementById("description").value;
        const link = document.getElementById("link").value;

        if (category && name && time) {
          this.#restaurantListInstance.addRestaurant(
            category,
            name,
            time,
            description,
            link
          );
          this.#closeModal();
        }
      });
  }

  #closeModal() {
    const modal = document.querySelector(".modal");
    modal.classList.remove("modal--open");
    restaurantRender(this.#restaurantListInstance);
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
