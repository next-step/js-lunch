describe("모달 컴포넌트 테스트", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });

  it("음식점 버튼을 누르면 모달창이 열려야 한다", () => {
    cy.get(".gnb__button").click();
    cy.get(".modal.modal--open").should("exist");
  });
});
