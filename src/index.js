import "./styles/common.css";
import "./styles/drawer.css";
import "./styles/footer.css";
import "./styles/header.css";
import "./styles/main.css";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { addEvent } from "./shared/event";
import { addObserver } from "./shared/observer/add-observer";
import EatingPlaceDrawer from "./widget/drawer/eating-place-drawer";

window.addEventListener("load", () => {
  const app = document.querySelector("#app");

  const header = Header();
  const main = Main();
  const footer = Footer();
  const drawer = EatingPlaceDrawer();

  app.appendChild(header);
  app.appendChild(main);
  app.appendChild(footer);
  app.appendChild(drawer);

  addObserver();

  addEvent();
});
