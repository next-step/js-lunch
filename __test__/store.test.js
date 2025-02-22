import data from "../example.json";

describe("음식점 목록이 있을때", () => {
  const storeList = data.storeList;

  test("음식점 목록이 거리순으로 오름차순으로 정렬된다.", () => {
    const storeNameLsit = storeList
      .slice()
      .sort((a, b) => a.distance - b.distance)
      .map((item) => item.name);

    expect(storeNameLsit.join(", ")).toBe(
      "이태리 키친, 호아빈 삼성점, 피양콩 할머니, 친친, 잇쇼우"
    );
  });
  test("음식점 목록이 이름순순으로 오름차순으로 정렬된다.", () => {
    const storeNameLsit = storeList
      .sort((a, b) => a.name - b.name)
      .map((item) => item.name);

    expect(storeNameLsit.join(", ")).toBe(
      "피양콩 할머니, 친친, 잇쇼우, 이태리 키친, 호아빈 삼성점"
    );
  });
  test("음식점 목록이 카테고리 별로 필터링된다.", () => {
    const storeNameLsit = storeList
      .filter((item) => item.category === "한식")
      .map((item) => item.name);

    expect(storeNameLsit.join(", ")).toBe("피양콩 할머니");
  });
});
