describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("레스토랑 컴포넌트가 불러와졌는지 확인한다", () => {
    cy.get(".restaurant").should("exist");
    cy.get(".restaurant__name").contains("피양콩할마니");
  });

  it("SORT 카테고리 필터에서 '거리순'을 선택하면 친친 -> 잇쇼우 -> 어반플레이트 -> 피양콩할마니 순으로 리스트가 나타난다", () => {
    cy.get("#sorting-filter").select("distance");
    cy.get("ul li").eq(0).contains("친친");
    cy.get("ul li").eq(1).contains("잇쇼우");
    cy.get("ul li").eq(2).contains("어반플레이트");
    cy.get("ul li").eq(3).contains("한식뷔페");
    cy.get("ul li").eq(4).contains("피양콩할마니");
  });

  it("SORT 카테고리 필터에서 '중식'을 선택하면 친친만 보여진다.", () => {
    cy.get("#category-filter").select("중식");
    cy.get("ul li").eq(0).contains("친친");
    cy.get("ul li").eq(1).should("not.exist");
    cy.get("ul li").should("have.length", 1);
  });

  it("카테고리 필터에서 '한식'을 선택하면 '피양콩할머니, 한식뷔페'가 보여진다.", () => {
    cy.get("#category-filter").select("한식");
    cy.get("ul li").eq(0).contains("피양콩할마니");
    cy.get("ul li").eq(1).contains("한식뷔페");
    cy.get("ul li").should("have.length", 2);
  });

  it("카테고리 필터에서 '한식'과 거리순을 선택하면 '한식뷔페 -> 피양콩할머니' 순으로 보여진다.", () => {
    cy.get("#category-filter").select("한식");
    cy.get("#sorting-filter").select("distance");

    cy.get("ul li").eq(0).contains("한식뷔페");
    cy.get("ul li").eq(1).contains("피양콩할마니");
    cy.get("ul li").should("have.length", 2);
  });
});
