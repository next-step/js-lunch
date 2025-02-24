import { EATING_PLACE_TYPE } from "./constant";

export const eatingPlaceListData = [
  {
    type: EATING_PLACE_TYPE.CHINESE.name,
    imageType: EATING_PLACE_TYPE.CHINESE.image,
    title: "현지 느낌 그대로 중식당",
    timeToGo: "2분 내 도착 가능",
    description: "풍미 가득한 정통 중화요리와 시그니처 요리를 경험하세요",
  },
  {
    type: EATING_PLACE_TYPE.JAPANESE.name,
    imageType: EATING_PLACE_TYPE.JAPANESE.image,
    title: "신선한 초밥과 일식 요리",
    timeToGo: "4분이면 도착!",
    description: "싱싱한 해산물과 정성 가득한 일본 요리를 제공합니다",
  },
  {
    type: EATING_PLACE_TYPE.ETC.name,
    imageType: EATING_PLACE_TYPE.ETC.image,
    title: "색다른 미식 탐험",
    timeToGo: "3분 거리",
    description: "이국적인 메뉴와 독창적인 맛을 즐길 수 있는 곳",
  },
  {
    type: EATING_PLACE_TYPE.ASIAN.name,
    imageType: EATING_PLACE_TYPE.ASIAN.image,
    title: "정통 아시아의 맛",
    timeToGo: "도보 1분 거리",
    description: "고급 양갈비와 다채로운 아시아 요리를 한자리에서",
  },
  {
    type: EATING_PLACE_TYPE.KOREAN.name,
    imageType: EATING_PLACE_TYPE.KOREAN.image,
    title: "정통 한식 맛집",
    timeToGo: "5분 거리",
    description: "직접 담근 김치와 깊은 맛의 한식 요리를 맛볼 수 있는 곳",
  },
  {
    type: EATING_PLACE_TYPE.WESTERN.name,
    imageType: EATING_PLACE_TYPE.WESTERN.image,
    title: "분위기 좋은 서양식 레스토랑",
    timeToGo: "10분 걸려요",
    description: "스테이크부터 파스타까지, 품격 있는 서양 요리를 만나보세요",
  },
];
