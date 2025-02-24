/* eslint-disable no-undef */
describe("Main Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("drawer 컴포넌트가 잘 로드되는지 확인한다.", () => {
    cy.get(".eating-place-drawer").should("exist");
  });
  it("음식점 목록에 새로운 음식점 추가", () => {
    cy.get(".eating-place-drawer").should("exist");
  });
});
