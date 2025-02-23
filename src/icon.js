import ASIAN_IMG from "./assets/category-asian.png";
import CHINESE_IMG from "./assets/category-chinese.png";
import JAPANESE_IMG from "./assets/category-japanese.png";
import KOREAN_IMG from "./assets/category-korean.png";
import WESTERN_IMG from "./assets/category-western.png";
import ETC_IMG from "./assets/category-etc.png";

export const makeIcon = (category) => {
  const iconContainer = document.createElement("div");

  iconContainer.setAttribute("class", "restaurant__category");

  const icon = document.createElement("img");

  iconContainer.appendChild(icon);

  icon.setAttribute("class", "category-icon");
  icon.setAttribute("src", setIconUrl(category));

  return iconContainer;
};

const setIconUrl = (category) => {
  switch (category) {
    case "한식":
      return KOREAN_IMG;

    case "중식":
      return CHINESE_IMG;

    case "일식":
      return JAPANESE_IMG;

    case "양식 ":
      return WESTERN_IMG;

    case "아시안":
      return ASIAN_IMG;

    default:
      return ETC_IMG;
  }
};
