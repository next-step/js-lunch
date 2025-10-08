import asianCategoryIcon from "../../images/category-asian.png";
import chineseCategoryIcon from "../../images/category-chinese.png";
import etcCategoryIcon from "../../images/category-etc.png";
import japaneseCategoryIcon from "../../images/category-japanese.png";
import koreanCategoryIcon from "../../images/category-korean.png";
import westernCategoryIcon from "../../images/category-western.png";

export function getRestaurantCategoryIcon(category) {
  const iconMap = {
    기타: etcCategoryIcon,
    양식: westernCategoryIcon,
    일식: japaneseCategoryIcon,
    중식: chineseCategoryIcon,
    한식: koreanCategoryIcon,
    아시안: asianCategoryIcon,
  };

  return iconMap[category] ?? etcCategoryIcon;
}
