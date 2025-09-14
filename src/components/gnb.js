export class Gnb {
  getTemplate() {
    return /* HTML */ `
      <header class="gnb">
        <h1 class="gnb__title text-title">점심 뭐 먹지</h1>
        <button type="button" class="gnb__button" aria-label="음식점 추가">
          <img src="../src/assets/add-button.png" alt="음식점 추가" />
        </button>
      </header>
    `;
  }
}
