import CategoryListModel from "../src/domain/CategoryListModel.js";

describe("RestaurantList Class 테스트", () => {
  it("레스토랑 정보를 초기세팅 한다.", () => {
    const categogryList = new CategoryListModel();
    const categorys = categogryList.categorys;

    expect(categorys).toEqual([
      "한식",
      "중식",
      "일식",
      "양식",
      "아시안",
      "기타",
    ]);
  });
});
