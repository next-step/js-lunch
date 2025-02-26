describe("Modal 컴포넌트 테스트", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });

  it("모달은 처음에 닫혀 있어야 한다", () => {
    cy.get(".modal").should("not.have.class", "modal--open");
  });

  it("헤더의 음식점 추가 버튼 클릭 시 모달이 열려야 한다", () => {
    cy.get(".gnb__button").click();
    cy.get(".modal").should("have.class", "modal--open");
  });
});
