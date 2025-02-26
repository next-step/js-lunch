class CategoryListModel {
  #categorys;

  constructor() {
    this.#initData();
  }

  #initData() {
    this.#categorys = [
      "전체",
      "한식",
      "중식",
      "일식",
      "양식",
      "아시안",
      "기타",
    ];
  }

  get categorys() {
    return this.#categorys;
  }
}

export default CategoryListModel;
