describe("List", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("리스트 개수를 확인할 수 있습니다.", () => {
    cy.get(".restaurant-list > .restaurant").should("have.length", 6);
  });
  it("정보가 올바른지 확인합니다.", () => {
    cy.get(".restaurant")
      .eq(0)
      .within(() => {
        cy.get(".restaurant__name").should("contain", "도스타코스 선릉점");
        cy.get(".restaurant__distance").should("contain", "5분");
        cy.get(".restaurant__description").should(
          "contain",
          "맥시칸 캐주얼 그릴"
        );
        cy.get("img.category-icon").should("have.attr", "alt", "기타");
      });
  });
});
