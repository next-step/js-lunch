describe("음식점 항목 컴포넌트 테스트", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });

  it("피양콩할마니 항목 테스트", () => {
    cy.get(".restaurant__name").should("exist");
    cy.get(".restaurant__name").contains("피양콩할마니");
  });
});
