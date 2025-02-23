import { makeIcon } from "./icon";
import { makeTitle, makeDistance } from "./card";
export const makeModalContent = (restaurant) => {
  const modalContent = document.createElement("div");

  modalContent.setAttribute("class", "modal-restaurant");

  const info = document.createElement("div");
  info.setAttribute("class", "restaurant__info");

  const icon = makeIcon(restaurant.category);
  modalContent.appendChild(icon);
  const title = makeTitle(restaurant.name);
  modalContent.appendChild(title);

  const distance = makeDistance(restaurant.distance);
  modalContent.appendChild(distance);

  const description = makeDescription(restaurant.description);
  modalContent.appendChild(description);

  const bottomBtns = makeModalBottomBtns();

  modalContent.append(title, distance, description, bottomBtns);
  modalContent.appendChild(info);

  return modalContent;
};

const makeDescription = (desc) => {
  const element = document.createElement("p");
  element.classList.add("text-body");
  element.innerText = desc;
  return element;
};

const makeModalBottomBtns = () => {
  const btnContainer = document.createElement("div");
  const leftBtn = document.createElement("button");
  const rightBtn = document.createElement("button");

  btnContainer.classList.add("button-container");
  leftBtn.classList.add("button", "button--secondary");
  rightBtn.classList.add("button", "button--primary");

  leftBtn.innerText = "삭제하기";
  rightBtn.innerText = "닫기";

  rightBtn.addEventListener("click", () => removeModal());

  btnContainer.append(leftBtn, rightBtn);

  return btnContainer;
};

export const showModalContent = (restaurant) => {
  const modalContainer = document.querySelector(".modal-container");

  const modalContent = makeModalContent(restaurant);

  modalContainer.appendChild(modalContent);

  const main = document.querySelector("main");
};

const removeModalContent = () => {
  const modalContainer = document.querySelector(".modal-container");
  modalContainer.innerHTML = "";
};

const removeModal = () => {
  const modal = document.querySelector(".modal");
  modal.classList.remove("modal__open");
  removeModalContent();
};
