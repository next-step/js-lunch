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

  it("필수 입력값이 없으면 경고창이 나타나야 한다", () => {
    cy.get(".gnb__button").click();
    cy.get("input#name").type("테스트 음식점");
    cy.on("window:alert", (text) => {
      expect(text).to.contain("카테고리, 이름, 거리 는 필수입니다.");
    });
    cy.get("form").submit();
  });

  it("필수값(카테고리, 이름, 거리) 모두 입력 시 모달이 닫혀야 한다", () => {
    cy.get(".gnb__button").click();
    cy.get(".modal").should("have.class", "modal--open");

    cy.get("#category").select("한식");
    cy.get("#name").type("맛집 테스트");
    cy.get("#distance").select("5");

    cy.get("form").submit();
    cy.get(".modal").should("not.have.class", "modal--open");
  });
});
