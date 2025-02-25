import { filterEatingPlaceList } from "../../shared/util";

const EatingPlaceList = () => {
  const container = document.createDocumentFragment();
  const divElement = document.createElement("div");
  divElement.classList.add("eating-place-list");

  divElement.innerHTML = "";
  const items = filterEatingPlaceList({});
  items.forEach((item) => {
    divElement.appendChild(item);
  });

  container.appendChild(divElement);

  return container;
};

export default EatingPlaceList;
