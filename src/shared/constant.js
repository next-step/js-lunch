import ASIAN_IMG from "../assets/category-asian.png";
import CHINESE_IMG from "../assets/category-chinese.png";
import JAPANESE_IMG from "../assets/category-japanese.png";
import KOREAN_IMG from "../assets/category-korean.png";
import WESTERN_IMG from "../assets/category-western.png";
import ETC_IMG from "../assets/category-etc.png";
import ADD_BUTTON_ICON from "../assets/add-button.png";

export const IMAGE_TYPE = {
  ASIAN: ASIAN_IMG,
  CHINESE: CHINESE_IMG,
  JAPANESE: JAPANESE_IMG,
  KOREAN: KOREAN_IMG,
  WESTERN: WESTERN_IMG,
  ETC: ETC_IMG,
};

export const EATING_PLACE_TYPE = {
  아시안: IMAGE_TYPE.ASIAN,
  중식: IMAGE_TYPE.CHINESE,
  일식: IMAGE_TYPE.JAPANESE,
  한식: IMAGE_TYPE.KOREAN,
  양식: IMAGE_TYPE.WESTERN,
  기타: IMAGE_TYPE.ETC,
  전체: "전체",
};

export const ICON_TYPE = {
  ADD_BUTTON_ICON,
};
