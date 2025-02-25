export const createHeader = (title = "점심 뭐 먹지") => {
  const header = document.createElement("header");

  header.classList.add("gnb");
  header.innerHTML =
    /*html*/
    `
    <h1 class="gnb__title text-title">${title}</h1>
    <button type="button" class="gnb__button" aria-label="음식점 추가">
      <img src="./assets/add-button.png" alt="음식점 추가">
    </button>
  `;

  return header;
};
