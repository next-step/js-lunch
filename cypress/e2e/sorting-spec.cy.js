describe("레스토랑 정렬  테스트", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });

  it("정렬 카테고리 필터가 렌더링 되어야 한다.", () => {
    cy.get("#sorting-filter").should("exist");
  });

  it("정렬 카테고리 필터의 옵션은 이름순, 거리순이다.", () => {
    const filterOptions = ["이름순", "거리순"];

    filterOptions.forEach((option, index) => {
      cy.get("#sorting-filter option").eq(index).should("have.text", option);
    });
  });

  it("정렬 방식 선택 시 값이 변경되어야 한다.", () => {
    cy.get("#sorting-filter").select("name");
    cy.get("#sorting-filter option:selected").should("have.text", "이름순");
    cy.get("#sorting-filter").select("distance");
    cy.get("#sorting-filter option:selected").should("have.text", "거리순");
  });

  it("거리순 정렬 시 레스토랑 거리 순으로 정렬되어야 한다.", () => {
    cy.get("#sorting-filter").select("distance");

    cy.get(".restaurant-list .restaurant__name")
      .first()
      .should("have.text", "도스타코스 선릉점");
    cy.get(".restaurant-list .restaurant__name")
      .last()
      .should("have.text", "이태리키친");
  });

  it("이름순 정렬 시 레스토랑 이름 순으로 정렬되어야 한다.", () => {
    cy.get("#sorting-filter").select("name");

    cy.get(".restaurant-list .restaurant__name")
      .first()
      .should("have.text", "도스타코스 선릉점");
    cy.get(".restaurant-list .restaurant__name")
      .last()
      .should("have.text", "호아빈 삼성점");
  });
});
