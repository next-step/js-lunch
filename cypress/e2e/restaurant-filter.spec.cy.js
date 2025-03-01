describe("레스토랑 필터 선택 기능 테스트", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });

  it("전체 선택 시 모든 음식점(6개)이 렌더링되어야 한다", () => {
    cy.get(".restaurant-list").find(".restaurant").should("have.length", 6);
  });

  it("한식 선택 시 피양콩할마니만 렌더링되어야 한다", () => {
    cy.get("#category-filter").select("한식");
    cy.get(".restaurant-list").find(".restaurant").should("have.length", 1);
    cy.get(".restaurant__name.text-subtitle").should("contain", "피양콩할마니");
  });

  it("중식 선택 시 친친만 렌더링되어야 한다", () => {
    cy.get("#category-filter").select("중식");
    cy.get(".restaurant-list").find(".restaurant").should("have.length", 1);
    cy.get(".restaurant__name.text-subtitle").should("contain", "친친");
  });

  it("정렬 필터 변경 시 이름순으로 정렬되어야 한다", () => {
    cy.get("#sorting-filter").select("name");
    cy.get(".restaurant-list .restaurant").first().within(() => {
      cy.get(".restaurant__name.text-subtitle").should("contain", "도스타코스 선릉점");
    });
  });

  it("정렬 필터 변경 시 거리순으로 정렬되어야 한다", () => {
    cy.get("#sorting-filter").select("distance");
    cy.get(".restaurant-list .restaurant").first().within(() => {
      cy.get(".restaurant__distance.text-body").should("contain", "5분 내");
    });
  });
});
