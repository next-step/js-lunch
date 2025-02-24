import EatingPlaceListItem from "../widget/main/eating-place-list-item";
import { eatingPlaceListData } from "./data";

export const handleClassList = (classesToCheck, target, newClass) => {
  if (!classesToCheck.includes(newClass)) {
    return;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const cls of classesToCheck) {
    if (target.classList.contains(cls)) {
      target.classList.remove(cls);
      break;
    }
  }

  // 새로운 클래스를 추가
  target.classList.add(newClass);
};

const hr = () => /* html */ `<hr />`;

export const filterEatingPlaceList = ({
  filterState = "",
  radioState = "",
}) => {
  const localStorageData = localStorage.getItem("eatingPlaceList");
  const data = JSON.parse(localStorageData) || eatingPlaceListData;

  return data
    .filter((data) => {
      if (filterState === "전체" || filterState === "") return true;
      return filterState === data.type;
    })
    .sort((data1, data2) => {
      if (radioState === "name") {
        return data1.title.localeCompare(data2.title, "ko");
      }
      if (radioState === "distance") {
        const data1Number = Number(data1.timeToGo.replace(/\D/g, ""));
        const data2Number = Number(data2.timeToGo.replace(/\D/g, ""));
        return data1Number - data2Number;
      }
      return 1;
    })
    .map((data) => {
      const { imageType, title, timeToGo, description } = data;
      return EatingPlaceListItem({
        imageType,
        title,
        timeToGo,
        description,
      }).outerHTML;
    })
    .join(hr());
};
