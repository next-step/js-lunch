describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("헤더 컴포넌트가 불러와졌는지 확인한다", () => {
    cy.get(".gnb").should("exist");
    cy.get("h1.gnb__title.text-title").contains("점심 뭐 먹지");
  });

  it("헤더 컴포넌트에 버튼이 있는지 확인한다.", () => {
    cy.get(".gnb__button").should("exist");
  });
});
