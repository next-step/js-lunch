import EatingPlaceListItem from "./eating-place-list-item";

const eatingPlaceListData = [
  {
    title: "맛집 1",
    timeToGo: "5분 내",
    description: "품질 좋은 양갈비와 다양한 메뉴로 즐기는 식사",
  },
  {
    title: "맛집 1",
    timeToGo: "5분 내",
    description: "품질 좋은 양갈비와 다양한 메뉴로 즐기는 식사",
  },
  {
    title: "맛집 1",
    timeToGo: "5분 내",
    description: "품질 좋은 양갈비와 다양한 메뉴로 즐기는 식사",
  },
  {
    title: "맛집 1",
    timeToGo: "5분 내",
    description: "품질 좋은 양갈비와 다양한 메뉴로 즐기는 식사",
  },
  {
    title: "맛집 1",
    timeToGo: "5분 내",
    description: "품질 좋은 양갈비와 다양한 메뉴로 즐기는 식사",
  },
  {
    title: "맛집 1",
    timeToGo: "5분 내",
    description: "품질 좋은 양갈비와 다양한 메뉴로 즐기는 식사",
  },
];

const EatingPlaceList = () => {
  return /* html */ `<div
      
    class="eating-place-list"
    >
      ${eatingPlaceListData
        .map((val) => {
          const { title, timeToGo, description } = val;
          return EatingPlaceListItem({
            title,
            timeToGo,
            description,
          });
        })
        .join("")}
    </div>
    `;
};

export default EatingPlaceList;
