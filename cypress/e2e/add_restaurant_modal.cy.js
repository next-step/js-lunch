describe("Header", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
    cy.get("header.gnb .gnb__add-button").click();
  });
  it("타이틀 영역이 노출되는지 확인합니다.", () => {
    cy.get(".modal-title").should("exist");
  });
});
