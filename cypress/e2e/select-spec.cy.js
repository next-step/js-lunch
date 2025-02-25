describe("카테고리 필터 테스트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("카테고리 필터가 존재하는지 확인한다", () => {
    cy.get(".restaurant-filter-container").should("exist");
    cy.get("#category-filter").should("exist");
  });

  it("카테고리 필터의 기본값이 '전체'인지 확인한다", () => {
    cy.get("#category-filter").should("have.value", "전체");
  });

  it("카테고리 필터에서 '한식'을 선택하면 한식 옵션이 선택된다.", () => {
    cy.get("#category-filter").select("한식").should("have.value", "한식");
  });

  it("카테고리 필터에서 '중식'을 선택하면 중식 옵션이 선택된다", () => {
    cy.get("#category-filter").select("중식").should("have.value", "중식");
  });

  it("SORT 카테고리 필터가 존재하는지 확인한다.", () => {
    cy.get("#sorting-filter").should("exist");
  });

  it("SORT 카테고리 필터에서 '이름순'을 선택하면 이름순 옵션이 선택된다..", () => {
    cy.get("#sorting-filter").select("name").should("have.value", "name");
  });
});
