import "./styles/common.css";
import "./styles/drawer.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/footer.css";

import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
// import EatingPlaceDrawer from "./widget/drawer/eating-place-drawer";
import { observer } from "./shared/observer";
import { createObserver } from "./shared/common-observer";
import {
  EATING_PLACE_TYPE_CLASSES,
  EVENT_TYPE,
  RADIO_CLASSES,
} from "./shared/constant";
import { filterEatingPlaceList, handleClassList } from "./shared/util";
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

  createObserver({
    publisher: document.querySelector(".drawer-button"),
    subscribers: [document.querySelector(".eating-place-drawer")],
    event: EVENT_TYPE.TO_DRAWER,
  });
  createObserver({
    publisher: document.querySelector(".eating-place-radio-group"),
    subscribers: [document.querySelector(".eating-place-list")],
    event: EVENT_TYPE.TO_LIST,
  });
  createObserver({
    publisher: document.querySelector(".eating-place-select"),
    subscribers: [document.querySelector(".eating-place-list")],
    event: EVENT_TYPE.TO_LIST,
  });

  const eatingPlaceList = document.querySelector(".eating-place-list");
  eatingPlaceList.addEventListener(EVENT_TYPE.TO_LIST, (event) => {
    handleClassList(RADIO_CLASSES, eatingPlaceList, event.detail);
    handleClassList(EATING_PLACE_TYPE_CLASSES, eatingPlaceList, event.detail);

    if (eatingPlaceList.classList.length >= 2) {
      const filtered = eatingPlaceList.classList.value;
      const filteredArray = filtered.split(" ").slice(1);
      const [radioState, filterState] = RADIO_CLASSES.includes(filteredArray[0])
        ? [filteredArray[0], filteredArray[1]]
        : [filteredArray[1], filteredArray[0]];
      eatingPlaceList.innerHTML = filterEatingPlaceList({
        filterState,
        radioState,
      });
    }
  });

  const eatingPlaceDrawer = document.querySelector(".eating-place-drawer");
  eatingPlaceDrawer.addEventListener(EVENT_TYPE.TO_DRAWER, (event) => {
    eatingPlaceDrawer.classList.toggle("open");
  });
});

window.addEventListener("unload", () => {
  observer.disconnect();
});
