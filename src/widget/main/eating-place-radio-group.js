import { useState } from "../../shared/state";

const EatingPlaceRadioGroup = () => {
  const container = document.createElement("div");
  container.classList.add("eating-place-radio-group");
  const [state, setState] = useState(false);

  const handleClick = (event) => {
    if (event.target && event.target.closest(".name")) {
      setState("name");
    }
    if (event.target && event.target.closest(".distance")) {
      setState("distance");
    }
    // eslint-disable-next-line no-use-before-define
    render();
  };

  const render = () => {
    const html = /* html */ `
      <div class="name">
        <input type="radio" id="name" name="criteria" value="name" 
        ${state.value === "name" ? "checked" : ""} />
        <label for="name">이름순</label>
      </div>

      <div class="distance">
        <input type="radio" id="distance" name="criteria" value="distance"
        ${state.value === "distance" ? "checked" : ""} />
        <label for="distance">거리순</label>
      </div>
    `;

    container.innerHTML = html;
    container.addEventListener("click", handleClick);

    return container;
  };

  render();

  return container;
};

export default EatingPlaceRadioGroup;
