import { Input, Label } from "../../shared/ui";

const EatingPlaceDrawer = () => {
  const container = document.createElement("div");
  container.classList.add("eating-place-drawer");
  container.addEventListener("drawer-state", () => {
    container.classList.toggle("open");
    // eslint-disable-next-line no-use-before-define
    render();
  });

  const render = () => {
    const html = /* html */ `
      <div class="eating-place-drawer-backdrop"></div>
      <div class="eating-place-drawer-content">
        <h3>새로운 음식점</h3>
        <div class="category-box">
          ${Label({
            name: "카테고리",
            htmlFor: "카테고리",
            className: "required",
          })}
          ${Input({
            name: "카테고리",
            className: "",
            placeholder: "카테고리를 입력해주세요",
          })}
        </div>
        <div class="naming-box">
          ${Label({ name: "이름", htmlFor: "이름", className: "required" })}
          ${Input({
            name: "이름",
            className: "",
            placeholder: "이름을 입력해주세요",
          })}
        </div>
      
        <div class="distance-box">
          ${Label({
            name: "거리(도보 이동 시간)",
            htmlFor: "거리(도보 이동 시간)",
            className: "required",
          })}
          ${Input({ name: "거리(도보 이동 시간)", className: "" })}
        </div>
        <div class="description-box">
          ${Label({ name: "설명", htmlFor: "설명" })}
          ${Input({ name: "설명", className: "", required: true })}
          ${Label({ name: "메뉴 등 추가 정보를 입력해 주세요.", htmlFor: "설명" })}
        </div>
        <div class="reference-box">
          ${Label({ name: "참고 링크", htmlFor: "참고 링크" })}
          ${Input({ name: "참고 링크", className: "" })}
          ${Label({ name: "매장 정보를 확인할 수 있는 링크를 입력해 주세요.", htmlFor: "참고 링크" })}
        </div>
      </div>
    `;

    container.innerHTML = html;

    return container;
  };
  render();
  return container;
};

export default EatingPlaceDrawer;
