describe("헤더 컴포넌트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("헤더 컴포넌트 로딩 확인", () => {
    cy.get(".gnb").should("exist");
    cy.get(".gnb__title").contains("점심 뭐 먹지");
  });
});

describe("정적 콘텐츠 테스트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("카테고리 필터가 올바르게 렌더 된다.", () => {
    cy.get("#category-filter").should("exist").and("have.value", "전체");

    const categories = [
      "전체",
      "한식",
      "중식",
      "일식",
      "양식",
      "아시안",
      "기타",
    ];

    categories.forEach((category) => {
      cy.get("#category-filter")
        .find("option")
        .contains(category)
        .should("exist");
    });
  });

  it("정렬 필터가 올바르게 렌더 된다.", () => {
    cy.get("#sorting-filter").should("exist").and("have.value", "name");

    const sortingOptions = ["이름순", "거리순"];
    sortingOptions.forEach((option) =>
      cy.get("#sorting-filter").find("option").contains(option).should("exist"),
    );
  });
});
