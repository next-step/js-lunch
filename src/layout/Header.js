import { ICON_TYPE } from "../shared/constant";
import { useState } from "../shared/state";

const Header = () => {
  const [state, setState] = useState(false);

  const container = document.createElement("header");

  const handleClick = (event) => {
    if (event.target && event.target.closest(".drawer-button")) {
      setState(!state.value);
      // eslint-disable-next-line no-use-before-define
      render();
    }
  };

  const render = () => {
    const html = /* html */ `
      <div>
      점심 뭐먹지
      </div>
      <div data-drawer-state="${state.value}" class="drawer-button"
      >
          <img src=${ICON_TYPE.ADD_BUTTON_ICON} alt="header-drawer-img"/>
      </div>
    `;
    container.innerHTML = html;
    container.addEventListener("click", handleClick);
  };

  render();

  return container;
};

export default Header;
