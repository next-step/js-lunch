import ASIAN_IMG from "../assets/category-asian.png";
import CHINESE_IMG from "../assets/category-chinese.png";
import JAPANESE_IMG from "../assets/category-japanese.png";
import KOREAN_IMG from "../assets/category-korean.png";
import WESTERN_IMG from "../assets/category-western.png";
import ETC_IMG from "../assets/category-etc.png";
import ADD_BUTTON_ICON from "../assets/add-button.png";

export const NAME_OR_DISTANCE = {
  NAME: "name",
  DISTANCE: "distance",
};
export const RADIO_CLASSES = Object.values(NAME_OR_DISTANCE);

export const EATING_PLACE_TYPE = {
  ASIAN: {
    name: "아시안",
    image: ASIAN_IMG,
  },
  CHINESE: {
    name: "중식",
    image: CHINESE_IMG,
  },
  JAPANESE: {
    name: "일식",
    image: JAPANESE_IMG,
  },
  KOREAN: {
    name: "한식",
    image: KOREAN_IMG,
  },
  WESTERN: {
    name: "양식",
    image: WESTERN_IMG,
  },
  ETC: {
    name: "기타",
    image: ETC_IMG,
  },
  ALL: {
    name: "전체",
    image: ETC_IMG,
  },
};

export const EATING_PLACE_TYPE_CLASSES = Object.values(EATING_PLACE_TYPE).map(
  (obj) => obj.name,
);

export const ICON_TYPE = {
  ADD_BUTTON_ICON,
};

export const EVENT_TYPE = {
  TO_LIST: "TO_LIST",
  TO_DRAWER: "TO_DRAWER",
  ADD_TO_LIST: "ADD_TO_LIST",
  SHOW_DETAIL: "SHOW_DETAIL",
};

export const TIME_TO_GO = {
  FIVE: 5,
  TEN: 10,
  FIFTEEN: 15,
  TWENTY: 20,
  THIRTY: 30,
};
