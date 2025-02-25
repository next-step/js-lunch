import EatingPlaceListItem from "../widget/main/eating-place-list-item";
import { EATING_PLACE_TYPE } from "./constant";
import { eatingPlaceListData } from "./data";

export const LOCAL_STORAGE_KEY = "eatingPlaceList";

export const VALIDATION = {
  START: 0,
  END: 3,
};

export const makeEatingPlaceList = (data) => {
  const newData = [...data];
  const imageType = Object.values(EATING_PLACE_TYPE)
    .filter((value) => value.name === newData.at(0))
    .map((value) => value.image)[0];
  const newPlaceLists = [
    ...eatingPlaceListData,
    {
      type: newData.at(0),
      imageType,
      title: newData.at(1),
      timeToGo: newData.at(2),
      description: newData.at(3),
      referenceLink: newData.at(4),
    },
  ];
  return JSON.stringify(newPlaceLists);
};

export const filterEatingPlaceList = ({
  filterState = "",
  radioState = "",
}) => {
  const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
  const data = JSON.parse(localStorageData) || eatingPlaceListData;

  return data
    .filter((data1) => {
      if (filterState === "전체" || filterState === "") return true;
      return filterState === data1.type;
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
    .map((data1) => {
      const { imageType, title, timeToGo, description } = data1;
      return EatingPlaceListItem({
        imageType,
        title,
        timeToGo,
        description,
      });
    });
};
