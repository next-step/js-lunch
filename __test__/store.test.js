import data from "../example.json";
import {
  sortingByDistance,
  sortingByName,
  filteringByCategory,
} from "../src/store";

describe("음식점 목록이 있을때", () => {
  let storeList;

  beforeAll(() => {
    storeList = data.storeList;
  });

  test("음식점 목록이 거리순으로 오름차순으로 정렬된다.", () => {
    const newStoreList = sortingByDistance(storeList);

    expect(newStoreList.map((item) => item.name).join(", ")).toBe(
      "이태리 키친, 호아빈 삼성점, 피양콩 할머니, 친친, 잇쇼우"
    );
  });
  test("음식점 목록이 이름순으로 오름차순으로 정렬된다.", () => {
    const newStoreList = sortingByName(storeList);

    expect(newStoreList.map((item) => item.name).join(", ")).toBe(
      "피양콩 할머니, 친친, 잇쇼우, 이태리 키친, 호아빈 삼성점"
    );
  });
  test("음식점 목록이 카테고리 별로 필터링된다.", () => {
    const newStoreList = filteringByCategory(storeList);
    expect(newStoreList.map((item) => item.name).join(", ")).toBe(
      "피양콩 할머니"
    );
  });
});
