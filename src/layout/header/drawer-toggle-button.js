import { ICON_TYPE } from "../../shared/constant";

export const DrawerToggleButton = () => {
  const container = document.createDocumentFragment();
  const divElement = document.createElement("div");
  divElement.classList.add("drawer-button");

  const handleClick = (event) => {
    if (event.target && event.target.closest(".drawer-button")) {
      const isOpen = divElement.dataset.open;
      divElement.dataset.open = isOpen === "true" ? "false" : "true";
    }
  };

  const html = /* html */ `
      <img
        src=${ICON_TYPE.ADD_BUTTON_ICON}
        alt="header-drawer-img"/>
  `;

  divElement.innerHTML = html;
  divElement.addEventListener("click", handleClick);
  container.appendChild(divElement);

  return container;
};
