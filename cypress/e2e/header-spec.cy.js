describe("헤더 컴포넌트 테스트", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });

  it("헤더 컴포넌트가 렌더링 되어야 한다.", () => {
    cy.get("header.gnb").should("exist");
    cy.get("header").contains("점심 뭐 먹지");
  });
});
