import { render } from "./render.js";
import { sortingHandler, filteringHandler } from "../controller/cardController.js";

export const addSelectEvent = () => {
  const sort = document.querySelector("#sorting-filter");

  sort.addEventListener("change", (e) => {
    const targetValue = e.target.value;
    const sortingObj = sortingHandler(targetValue);
    render(sortingObj);
  });

  const filtering = document.querySelector("#category-filter");
  filtering.addEventListener("change", (e) => {
    const targetValue = e.target.value;
    const sortingObj = filteringHandler(targetValue);
    render(sortingObj);
  });
};
