import { showModalContent } from "./modal";

export const cardClickHandler = (restaurant) => {
  const modal = document.querySelector(".modal");
  modal.classList.add("modal__open");
  showModalContent(restaurant);
};
