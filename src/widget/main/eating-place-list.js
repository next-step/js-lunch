import { IMAGE_TYPE } from "../../shared/constant";
import EatingPlaceListItem from "./eating-place-list-item";

const eatingPlaceListData = [
  {
    imageType: IMAGE_TYPE.ASIAN,
    title: "정통 아시아의 맛",
    timeToGo: "도보 5분 거리",
    description: "고급 양갈비와 다채로운 아시아 요리를 한자리에서",
  },
  {
    imageType: IMAGE_TYPE.CHINESE,
    title: "현지 느낌 그대로 중식당",
    timeToGo: "5분 내 도착 가능",
    description: "풍미 가득한 정통 중화요리와 시그니처 요리를 경험하세요",
  },
  {
    imageType: IMAGE_TYPE.ETC,
    title: "색다른 미식 탐험",
    timeToGo: "바로 근처!",
    description: "이국적인 메뉴와 독창적인 맛을 즐길 수 있는 곳",
  },
  {
    imageType: IMAGE_TYPE.JAPANESE,
    title: "신선한 초밥과 일식 요리",
    timeToGo: "5분이면 도착!",
    description: "싱싱한 해산물과 정성 가득한 일본 요리를 제공합니다",
  },
  {
    imageType: IMAGE_TYPE.KOREAN,
    title: "정통 한식 맛집",
    timeToGo: "5분 거리",
    description: "직접 담근 김치와 깊은 맛의 한식 요리를 맛볼 수 있는 곳",
  },
  {
    imageType: IMAGE_TYPE.WESTERN,
    title: "분위기 좋은 서양식 레스토랑",
    timeToGo: "금방 도착!",
    description: "스테이크부터 파스타까지, 품격 있는 서양 요리를 만나보세요",
  },
];

const hr = () => {
  return /*html*/ `<hr />`;
};

const EatingPlaceList = () => {
  return /* html */ `<div
      
    class="eating-place-list"
    >
      ${eatingPlaceListData
        .map((val) => {
          const { imageType, title, timeToGo, description } = val;
          return EatingPlaceListItem({
            imageType,
            title,
            timeToGo,
            description,
          });
        })
        .join(hr())}
    </div>
    `;
};

export default EatingPlaceList;
