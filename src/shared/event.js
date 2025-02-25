import { EVENT_TYPE } from "./constant";
import { ERROR_MESSAGE } from "./error";
import { MESSAGE } from "./message";
import {
  filterEatingPlaceList,
  LOCAL_STORAGE_KEY,
  makeEatingPlaceList,
  VALIDATION,
} from "./util";

export const addEvent = () => {
  const eatingPlaceList = document.querySelector(".eating-place-list");
  eatingPlaceList.addEventListener(EVENT_TYPE.TO_LIST, () => {
    const radioElement = document.querySelector(".eating-place-radio-group");
    const radioValue = radioElement.dataset.radio;

    const selectElement = document.querySelector(".eating-place-select");
    const selectValue = selectElement.dataset.select;

    eatingPlaceList.innerHTML = "";
    const items = filterEatingPlaceList({
      filterState: selectValue,
      radioState: radioValue,
    });
    items.forEach((item) => {
      eatingPlaceList.appendChild(item);
    });
  });

  eatingPlaceList.addEventListener(EVENT_TYPE.ADD_TO_LIST, () => {
    const drawerElement = document.querySelector(".eating-place-drawer");
    const drawerValue = drawerElement.dataset.result;
    const data = drawerValue.split(",");

    const validation = data
      .slice(VALIDATION.START, VALIDATION.END)
      .every((value) => value !== "");
    if (validation) {
      localStorage.setItem(LOCAL_STORAGE_KEY, makeEatingPlaceList(data));
      eatingPlaceList.innerHTML = "";
      const items = filterEatingPlaceList({});
      items.forEach((item) => {
        eatingPlaceList.appendChild(item);
      });
      alert(MESSAGE.DATA_INPUT_OK);
    } else {
      alert(ERROR_MESSAGE.NOT_ENOUGH_DATA_INPUT);
    }
  });

  const eatingPlaceDrawer = document.querySelector(".eating-place-drawer");
  eatingPlaceDrawer.addEventListener(EVENT_TYPE.TO_DRAWER, () => {
    const isOpen = eatingPlaceDrawer.dataset.open;
    eatingPlaceDrawer.dataset.open = isOpen === "true" ? "false" : "true";
  });

  const eatingPlaceDetailDrawer = document.querySelector(
    ".eating-place-detail-drawer",
  );
  eatingPlaceDetailDrawer.addEventListener(EVENT_TYPE.SHOW_DETAIL, () => {
    const isOpen = eatingPlaceDetailDrawer.dataset.open;
    eatingPlaceDetailDrawer.dataset.open = isOpen === "true" ? "false" : "true";
  });
};
