describe("Select", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("영역이 노출되는지 확인합니다.", () => {
    cy.get("#category-filter").should("exist");
    cy.get("#sorting-filter").should("exist");
  });
  it("초기값이 올바른지 확인합니다.", () => {
    cy.get("#category-filter").should("have.value", "전체");
    cy.get("#sorting-filter").should("have.value", "name");
  });
  it("누락된 옵션이 없는지 확인합니다.", () => {
    const category = ["전체", "한식", "중식", "일식", "양식", "아시안", "기타"];
    cy.get("#category-filter option").then((options) => {
      const texts = [...options].map((o) => o.text);
      expect(texts).to.have.members(category);
    });
    const sorting = ["이름순", "거리순"];
    cy.get("#sorting-filter option").then((options) => {
      const texts = [...options].map((o) => o.text);
      expect(texts).to.have.members(sorting);
    });
  });
});
