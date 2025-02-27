import EatingPlaceListItem from "../widget/main/eating-place-list-item";
import { EATING_PLACE_TYPE } from "./constant";
import { eatingPlaceListData } from "./data";

export const toggleElement = (element) => {
  const isOpen = element.dataset.open;
  element.dataset.open = isOpen === "true" ? "false" : "true";
};

export const clearInputData = (elements) => {
  elements.forEach((element) => {
    element.value = "";
  });
};

export const INPUT_FIELDS_VALIDATION_RANGE = {
  START: 0,
  END: 3,
};

export const checkValidationInputFields = (data) =>
  data
    .slice(
      INPUT_FIELDS_VALIDATION_RANGE.START,
      INPUT_FIELDS_VALIDATION_RANGE.END,
    )
    .every((value) => value !== "");

export const LOCAL_STORAGE_KEY = "eatingPlaceList";

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
      const { type, imageType, title, timeToGo, description, referenceLink } =
        data1;
      return EatingPlaceListItem({
        type,
        imageType,
        title,
        timeToGo,
        description,
        referenceLink,
      });
    });
};

export const makeEatingDetailInfo = ({
  type,
  title,
  timeToGo,
  description,
  referenceLink,
}) => /* html */ `
  <h3>${title}</h3>
  <div class="type">${type}</div>
  <div class="timeToGo">${timeToGo}</div>
  <div class="description">${description}</div>
  <div class="referenceLink">${referenceLink}</div>
`;
