import { DrawerToggleButton } from "./header/drawer-toggle-button";

const Header = () => {
  const container = document.createDocumentFragment();
  const header = document.createElement("header");

  const html = /* html */ `
    <div>
    점심 뭐먹지
    </div>
  `;

  header.innerHTML = html;
  const drawerToggleButton = DrawerToggleButton();
  header.appendChild(drawerToggleButton);
  container.appendChild(header);

  return container;
};

export default Header;
