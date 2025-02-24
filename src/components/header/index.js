export function createHeader() {
  const header = document.createElement("header");
  header.innerHTML = /*html*/ `
    <header class="gnb">
      <h1 class="gnb__title text-title">점심 뭐 먹지</h1>
      <button type="button" class="gnb__button" aria-label="음식점 추가">
      <img src="./public/assets/add-button.png" alt="음식점 추가">
      </button>
    </header>
  `;

  return header;
}
