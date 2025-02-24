import { EATING_PLACE_TYPE } from "../../shared/constant";

const EatingPlaceSelect = () => {
  const container = document.createDocumentFragment();
  const selectElement = document.createElement("select");
  selectElement.classList.add("eating-place-select");

  const handleChange = (event) => {
    if (event.target && event.target.closest(".eating-place-select")) {
      const classListsLength = selectElement.classList.length;
      if (classListsLength > 1) {
        selectElement.classList.replace(
          selectElement.classList[1],
          event.target.value,
        );
      } else {
        selectElement.classList.add(event.target.value);
      }
    }
  };

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

  selectElement.innerHTML = html;
  selectElement.addEventListener("change", handleChange);

  container.appendChild(selectElement);

  return container;
};

export default EatingPlaceSelect;
