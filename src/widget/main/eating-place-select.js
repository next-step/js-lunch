const EatingPlaceSelect = () => {
  const container = document.createElement("select");
  container.classList.add("eating-place-select");

  const render = () => {
    const html = /* html */ `
      <option value="전체">먹고 싶은 음식을 골라줘</option>
      <option value="전체">전체</option>
      <option value="한식">한식</option>
      <option value="중식">중식</option>
      <option value="일식">일식</option>
      <option value="양식">양식</option>
      <option value="아시안">아시안</option>
      <option value="기타">기타</option>
    `;

    container.innerHTML = html;
    container.addEventListener("change", (e) => {
      const radioEvent = new CustomEvent("list-state", {
        detail: {
          filterState: e.target.value,
        },
      });

      const listElement = document.querySelector(".eating-place-list");
      listElement.dispatchEvent(radioEvent);
    });

    return container;
  };

  render();

  return container;
};

export default EatingPlaceSelect;
