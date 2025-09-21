describe("Header", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("영역이 노출되는지 확인합니다.", () => {
    cy.get("header.gnb").should("exist");
  });
  it("추가 버튼이 노출되는지 확인합니다.", () => {
    cy.get("header.gnb .gnb__add-button").should("exist");
  });
  it("타이틀이 노출되는지 확인합니다.", () => {
    cy.get("header.gnb .gnb__title")
      .should("exist")
      .and("have.text", "점심 뭐 먹지");
  });
  it("추가 버튼을 클릭하면 음식점 추가 모달이 노출됩니다.", () => {
    cy.get("header.gnb .gnb__add-button").click();
    cy.get(".modal").should("exist");
  });
});
