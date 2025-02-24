import { ICON_TYPE } from "../shared/constant";
import { getFragment } from "../shared/createDOM";
import { createState } from "../shared/state";

const Header = () => {
  const state = createState(true);

  const handleClick = (event) => {
    if (event.target && event.target.closest(".drawer-button")) {
      state.setState(!state.getState());
    }
  };

  const render = () => {
    const drawerButton = document.querySelector(".drawer-button");
    if (drawerButton) {
      drawerButton.setAttribute("data-drawer-state", state.getState());
    }
  };

  state.addListener(() => {
    render();
  });

  const container = getFragment();
  const header = document.createElement("header");

  const html = /* html */ `
    <div>
    점심 뭐먹지
    </div>
    <div data-drawer-state="${state.getState()}" class="drawer-button">
      <img src=${ICON_TYPE.ADD_BUTTON_ICON} alt="header-drawer-img"/>
    </div>
  `;

  header.innerHTML = html;
  header.addEventListener("click", handleClick);
  container.appendChild(header);

  return container;
};

export default Header;
