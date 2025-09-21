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
  it("헤더 영역에서 추가 버튼을 클릭하면 음식점 추가 모달이 노출됩니다.", () => {
    cy.get("header.gnb .gnb__add-button").click();
    cy.get(".modal").should("exist");
  });
  it("새로운 음식점을 추가할 수 있는 모달에서 음식점을 추가할 수 있습니다.", () => {
    cy.get("header.gnb .gnb__add-button").click();

    cy.get(".modal select[name='category'").select("한식", { force: true });
    cy.get(".modal input[name='name']").type("크론");
    cy.get(".modal select[name='distance'").select("5");
    cy.get(".modal textarea[name='description']").type(
      "TDD, 클린 코드 with JavaScript"
    );
    cy.get(".modal input[name='link']").type(
      "https://edu.nextstep.camp/s/o3c6j0Ta/ls/mmmEAFsU"
    );

    cy.get(".modal .button-container .button--primary").click();

    cy.get(".restaurant")
      .last()
      .within(() => {
        cy.get("img.category-icon").should("have.attr", "alt", "한식");
        cy.get("h3.restaurant__name").should("contain.text", "크론");
      });
  });
});
