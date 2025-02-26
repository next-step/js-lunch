export function headerRender(name) {
  const body = document.querySelector("body");
  const header = createHeader(name);
  body.prepend(header);
}
function createHeader(name) {
  const header = document.createElement("header");
  header.classList.add("gnb");

  header.innerHTML = /*html*/ `
        <h1 class="gnb__title text-title">점심 뭐 먹지</h1>
        <button type="button" class="gnb__button" aria-label="음식점 추가">
          <img src="./templates/add-button.png" alt="음식점 추가">
        </button>
      `;
  return header;
}
