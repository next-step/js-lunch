import { filterEatingPlaceList } from "../../shared/util";

const EatingPlaceList = () => {
  const container = document.createDocumentFragment();
  const divElement = document.createElement("div");
  divElement.classList.add("eating-place-list");

  const html = /* html */ `${filterEatingPlaceList({})}`;
  divElement.innerHTML = html;
  container.appendChild(divElement);

  return container;
};

export default EatingPlaceList;
