import { EVENT_TYPE } from "../constant";
import { createObserver } from "./observer";

export const addObserver = () => {
  createObserver({
    publishers: document.querySelectorAll(".eating-place-drawer"),
    subscribers: [document.querySelector(".eating-place-list")],
    event: EVENT_TYPE.ADD_TO_LIST,
    attributeName: "data-result",
  });

  createObserver({
    publishers: document.querySelectorAll(".drawer-button"),
    subscribers: [document.querySelector(".eating-place-drawer")],
    event: EVENT_TYPE.TO_DRAWER,
    attributeName: "data-open",
  });

  createObserver({
    publishers: document.querySelectorAll(".eating-place-radio-group"),
    subscribers: [document.querySelector(".eating-place-list")],
    event: EVENT_TYPE.TO_LIST,
    attributeName: "data-radio",
  });

  createObserver({
    publishers: document.querySelectorAll(".eating-place-select"),
    subscribers: [document.querySelector(".eating-place-list")],
    event: EVENT_TYPE.TO_LIST,
    attributeName: "data-select",
  });

  createObserver({
    publishers: document.querySelectorAll(".eating-place-list-item"),
    subscribers: [document.querySelector(".eating-place-detail-drawer")],
    event: EVENT_TYPE.SHOW_DETAIL,
    attributeName: "data-open",
    isData: true,
  });
};
