describe("Header", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("영역이 노출되는지 확인합니다.", () => {
    cy.get("header.gnb").should("exist");    
  });
  it("타이틀이 노출되는지 확인합니다.", () => {
    cy.get("header.gnb .gnb__title").should("exist").and("have.text", "점심 뭐 먹지");
  })
});
