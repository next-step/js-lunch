import { EVENT_TYPE } from "./constant";
import { ERROR_MESSAGE } from "./error";
import { MESSAGE } from "./message";
import {
  filterEatingPlaceList,
  LOCAL_STORAGE_KEY,
  makeEatingDetailInfo,
  makeEatingPlaceList,
  VALIDATION,
} from "./util";

export const addEvent = () => {
  // 데이터 필터링 이벤트 listener
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

  // 음식점 Drawer에서 데이터 입력 후, 확인 버튼 눌렀을 때 발생하는 이벤트 listener
  eatingPlaceList.addEventListener(EVENT_TYPE.ADD_TO_LIST, () => {
    const drawerElement = document.querySelector(".eating-place-drawer");
    const drawerValue = drawerElement.dataset.result;
    const data = drawerValue.split(",");

    const validation = data
      .slice(VALIDATION.START, VALIDATION.END)
      .every((value) => value !== "");

    // 유효성 검사
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

  // 음식점 등록 Drawer 열고 닫는 이벤트 listener
  const eatingPlaceDrawer = document.querySelector(".eating-place-drawer");
  eatingPlaceDrawer.addEventListener(EVENT_TYPE.TO_DRAWER, () => {
    const isOpen = eatingPlaceDrawer.dataset.open;
    eatingPlaceDrawer.dataset.open = isOpen === "true" ? "false" : "true";
  });

  // 음식점 상세 정보 보는 이벤트 listener
  const eatingPlaceDetailDrawer = document.querySelector(
    ".eating-place-detail-drawer",
  );
  eatingPlaceDetailDrawer.addEventListener(EVENT_TYPE.SHOW_DETAIL, () => {
    eatingPlaceDetailDrawer.dataset.open = "true";
    const eatingDetailItem = eatingPlaceDetailDrawer.dataset.item;
    const eatingPlaceDetailDrawerContent = document.querySelector(
      ".eating-place-detail-drawer .eating-place-drawer-content",
    );
    eatingPlaceDetailDrawerContent.innerHTML = makeEatingDetailInfo(
      JSON.parse(eatingDetailItem),
    );
  });
};
