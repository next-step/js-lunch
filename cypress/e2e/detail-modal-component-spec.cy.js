describe("Detail Modal 컴포넌트 테스트", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });
  it("음식점 아이템 클릭 시 상세 모달이 열려야 한다", () => {
    cy.get(".restaurant").first().click();
    cy.get(".detail-modal").should("have.class", "modal--open");

    cy.get("#detail-title").should("not.be.empty");
  });

  it("닫기 버튼 클릭 시 상세 모달이 닫혀야 한다", () => {
    cy.get(".restaurant").first().click();
    cy.get(".detail-modal").should("have.class", "modal--open");

    cy.get("#close-btn").click();
    cy.get(".detail-modal").should("not.have.class", "modal--open");
  });

  it("삭제하기 버튼 클릭 시 음식점이 삭제되어야 한다", () => {
    cy.get(".restaurant").then((restaurantList) => {
      const restaurantCount = restaurantList.length;

      cy.get(".restaurant").first().click();
      cy.get(".detail-modal").should("have.class", "modal--open");

      cy.get("#delete-btn").click();
      cy.get(".detail-modal").should("not.have.class", "modal--open");

      cy.get(".restaurant").should("have.length", restaurantCount - 1);
    });
  });
});
