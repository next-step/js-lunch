import EatingPlaceListItem from "./eating-place-list-item";
import { eatingPlaceListData } from "../../shared/data";
import { useState } from "../../shared/state";

const hr = () => /* html */ `<hr />`;

const EatingPlaceList = () => {
  const container = document.createElement("div");
  container.classList.add("eating-place-list");
  const [state, setState] = useState("");
  container.addEventListener("list-state", (event) => {
    setState({ ...state.value, ...event.detail });
    const { radioState, filterState } = state.value;
    // eslint-disable-next-line no-use-before-define
    render({
      radioState,
      filterState,
    });
  });

  const render = ({ radioState, filterState }) => {
    const html = /* html */ `
      ${eatingPlaceListData
        .filter((data) => {
          if (!filterState) return true;
          if (filterState === "전체") return true;
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
        .join(hr())}
    `;

    container.innerHTML = html;

    return container;
  };

  render({ radioState: "", filerState: "전체" });

  return container;
};

export default EatingPlaceList;
