describe("Header", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
    cy.get("header.gnb .gnb__add-button").click();
  });
  it("타이틀 영역이 노출되는지 확인합니다.", () => {
    cy.get(".modal-title").should("contain.text", "새로운 음식점");
  });
  it("Label들이 모두 노출되는지 확인합니다.", () => {
    cy.get(".modal label").should("have.length", 5);
  });
  it("select들이 모두 노출되는지 확인합니다.", () => {
    cy.get(".modal select").should("have.length", 2);
  });
  it("input들이 모두 노출되는지 확인합니다.", () => {
    cy.get(".modal input").should("have.length", 2);
  });
  it("button들이 모두 노출되는지 확인합니다.", () => {
    cy.get(".button-container button").should("have.length", 2);
  });
  it("select들의 기본 문구가 잘 노출되는지 확인합니다.", () => {
    cy.get(".modal select").each(($select) => {
      cy.wrap($select).find("option:selected").should("have.value", "");
    });
  });
});
