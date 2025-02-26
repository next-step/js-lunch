import {makeModalContent} from "../view/modal.js"

export const showModalContent = (restaurant) => {
    const modal = document.querySelector(".modal");
    modal.classList.add("modal__open");
    const modalContainer = document.querySelector(".modal-container");
    const modalContent = makeModalContent(restaurant);
  
    modalContainer.appendChild(modalContent)
  };
  
  
const removeModalContent = () => {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.innerHTML = "";
};
  
export  const removeModal = () => {
    const modal = document.querySelector(".modal");
    modal.classList.remove("modal__open");
    removeModalContent();
};
  