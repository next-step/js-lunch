describe("음식점 목록 아이템 컴포넌트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("음식점 목록 아이템 컴포넌트가 불러와졌는지 확인한다.", () => {
    cy.get(".restaurant__name").should("exist");
    cy.get(".restaurant__name").contains("피양콩할마니");
  });
});
