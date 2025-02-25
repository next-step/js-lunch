import { EATING_PLACE_TYPE, TIME_TO_GO } from "../../shared/constant";
import { Input, Label, Select } from "../../shared/ui";

const EatingPlaceDrawer = () => {
  const container = document.createDocumentFragment();
  const divElement = document.createElement("div");
  divElement.classList.add("eating-place-drawer");

  const handleClick = () => {
    const inputDataArray = divElement.querySelectorAll(
      ".eating-place-drawer-content .data",
    );
    const results = [...inputDataArray].map((data) => data.value);
    divElement.dataset.result = results;
    divElement.dataset.open = false;
  };

  const html = /* html */ `
      <div class="eating-place-drawer-backdrop"></div>
      <div class="eating-place-drawer-content" data-result=''>
        <h3>새로운 음식점</h3>
        <div class="category-box">
          ${Label({
            name: "카테고리",
            htmlFor: "카테고리",
            className: "category required",
          })}
          ${Select({
            name: "카테고리",
            className: "category data",
            children: `
                <option value=${EATING_PLACE_TYPE.KOREAN.name}>한식</option>
                <option value=${EATING_PLACE_TYPE.CHINESE.name}>중식</option>
                <option value=${EATING_PLACE_TYPE.JAPANESE.name}>일식</option>
                <option value=${EATING_PLACE_TYPE.WESTERN.name}>양식</option>
                <option value=${EATING_PLACE_TYPE.ASIAN.name}>아시안</option>
              `,
          })}
        </div>
        <div class="name-box">
          ${Label({ name: "이름", htmlFor: "이름", className: "name required" })}
          ${Input({
            name: "이름",
            className: "name data",
            placeholder: "이름을 입력해주세요",
          })}
        </div>
      
        <div class="distance-box">
          ${Label({
            name: "거리(도보 이동 시간)",
            htmlFor: "거리(도보 이동 시간)",
            className: "distance required",
          })}
          ${Select({
            name: "거리(도보 이동 시간)",
            className: "distance data",
            children: `
                <option value=${TIME_TO_GO.FIVE}>5분</option>
                <option value=${TIME_TO_GO.TEN}>10분</option>
                <option value=${TIME_TO_GO.FIFTEEN}>15분</option>
                <option value=${TIME_TO_GO.TWENTY}>20분</option>
                <option value=${TIME_TO_GO.THIRTY}>30분</option>
              `,
          })}
        </div>
        <div class="description-box">
          ${Label({ name: "설명", htmlFor: "설명" })}
          ${Input({ name: "설명", className: "description data", required: true })}
          ${Label({ name: "메뉴 등 추가 정보를 입력해 주세요.", htmlFor: "설명" })}
        </div>
        <div class="reference-box">
          ${Label({ name: "참고 링크", htmlFor: "참고 링크" })}
          ${Input({ name: "참고 링크", className: "reference data" })}
          ${Label({ name: "매장 정보를 확인할 수 있는 링크를 입력해 주세요.", htmlFor: "참고 링크" })}
        </div>

        <button class="eating-place-drawer-submit-button">
          확인
        </button>
      </div>
    `;

  divElement.innerHTML = html;
  container.appendChild(divElement);

  const button = container.querySelector(".eating-place-drawer-submit-button");
  button.addEventListener("click", handleClick);

  return container;
};

export default EatingPlaceDrawer;
