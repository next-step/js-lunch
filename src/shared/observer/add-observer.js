import { EVENT_TYPE } from "../constant";
import { createObserver } from "./observer";

export const addObserver = () => {
  createObserver({
    publisher: document.querySelector(".eating-place-drawer"),
    subscribers: [document.querySelector(".eating-place-list")],
    event: EVENT_TYPE.ADD_TO_LIST,
    attributeName: "data-result",
  });

  createObserver({
    publisher: document.querySelector(".drawer-button"),
    subscribers: [document.querySelector(".eating-place-drawer")],
    event: EVENT_TYPE.TO_DRAWER,
    attributeName: "data-open",
  });

  createObserver({
    publisher: document.querySelector(".eating-place-radio-group"),
    subscribers: [document.querySelector(".eating-place-list")],
    event: EVENT_TYPE.TO_LIST,
    attributeName: "data-radio",
  });

  createObserver({
    publisher: document.querySelector(".eating-place-select"),
    subscribers: [document.querySelector(".eating-place-list")],
    event: EVENT_TYPE.TO_LIST,
    attributeName: "data-select",
  });
};
