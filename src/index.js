import "./styles/common.css";
import "./styles/drawer.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/footer.css";

import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import EatingPlaceDrawer from "./widget/drawer/eating-place-drawer";
import { config, observer } from "./shared/observer";

window.addEventListener("load", () => {
  const app = document.querySelector("#app");

  observer.observe(app, config);

  const header = Header();
  const main = Main();
  const footer = Footer();
  const eatingPlaceDrawer = EatingPlaceDrawer();

  app.appendChild(header); // Append the header to the app container
  app.appendChild(main); // Append the header to the app container
  app.appendChild(footer); // Append the header to the app container
  app.appendChild(eatingPlaceDrawer); // Append the header to the app container
});

window.addEventListener("unload", () => {
  observer.disconnect();
});
