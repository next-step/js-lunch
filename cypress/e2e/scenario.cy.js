describe("Scenario", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("카테고리에서 한식을 선택하면 한식 음식점만 노출됩니다.", () => {
    cy.get("#category-filter").select("한식");
    cy.get(".restaurant").each(($element) => {
      cy.wrap($element)
        .find("img.category-icon")
        .should("have.attr", "alt", "한식");
    });
  });
  it("거리순으로 정렬하면 목록이 거리순으로 정렬되어야 합니다.", () => {
    cy.get("#sorting-filter").select("distance");
    cy.get(".restaurant__distance").then(($elements) => {
      const distances = Array.from($elements, (element) =>
        parseInt(element.textContent.replace(/[^0-9]/g, ""), 10)
      );
      const sorted = [...distances].sort((a, b) => a - b);
      expect(distances).to.deep.equal(sorted);
    });
  });
});
