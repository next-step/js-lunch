describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("레스토랑 컴포넌트가 불러와졌는지 확인한다", () => {
    cy.get(".restaurant").should("exist");
    cy.get(".restaurant__name").contains("피양콩할마니");
  });
});
