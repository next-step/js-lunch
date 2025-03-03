describe("레스토랑 카테고리 필터 테스트", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });

  it("카테고리 필터가 렌더링 되어야 한다.", () => {
    cy.get("#category-filter").should("exist");
  });

  it("카테고리 필터의 옵션은 전체, 한식, 중식, 일식, 양식, 아시안, 기타이다.", () => {
    const filterOptions = [
      "전체",
      "한식",
      "중식",
      "일식",
      "양식",
      "아시안",
      "기타",
    ];

    filterOptions.forEach((option, index) => {
      cy.get("#category-filter option").eq(index).should("have.text", option);
    });
  });

  it("카테고리 필터 선택 시 값이 변경되어야 한다.", () => {
    cy.get("#category-filter").select("한식");
    cy.get("#category-filter option:selected").should("have.text", "한식");
  });

  it("카테고리 필터 선택 시 해당 카테고리 레스토랑만 보여야 한다.", () => {
    cy.get("#category-filter").select("한식");
    cy.get(".category-icon").each((icon) => {
      cy.wrap(icon).should("have.attr", "alt", "한식");
    });
    cy.get('.category-icon[alt="양식"]').should("not.exist");
  });
});
