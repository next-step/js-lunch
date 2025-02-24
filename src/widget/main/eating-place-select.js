import { EATING_PLACE_TYPE } from "../../shared/constant";

const EatingPlaceSelect = () => {
  const container = document.createElement("select");
  container.classList.add("eating-place-select");

  const render = () => {
    const html = /* html */ `
      <option value=${EATING_PLACE_TYPE.ALL.name}>먹고 싶은 음식을 골라줘</option>
      <option value=${EATING_PLACE_TYPE.ALL.name}>전체</option>
      <option value=${EATING_PLACE_TYPE.KOREAN.name}>한식</option>
      <option value=${EATING_PLACE_TYPE.CHINESE.name}>중식</option>
      <option value=${EATING_PLACE_TYPE.JAPANESE.name}>일식</option>
      <option value=${EATING_PLACE_TYPE.WESTERN.name}>양식</option>
      <option value=${EATING_PLACE_TYPE.ASIAN.name}>아시안</option>
      <option value=${EATING_PLACE_TYPE.ETC.name}>기타</option>
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
