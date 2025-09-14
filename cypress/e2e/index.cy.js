describe("점심 뭐 먹지 앱 E2E 테스트", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("페이지가 정상적으로 렌더링된다", () => {
    cy.get(".gnb").should("exist");
    cy.get(".restaurant-filter-container").should("exist");
    cy.get(".restaurant-list-container").should("exist");
  });

  it("카테고리 필터와 정렬 필터가 화면에 보인다", () => {
    cy.get("#category-filter").should("exist");
    cy.get("#sorting-filter").should("exist");
  });

  it("카테고리 필터를 변경하면 해당 카테고리의 레스토랑만 보여진다", () => {
    cy.get("#category-filter").select("korean");

    cy.get(".restaurant__category img[alt='korean']").should("exist");
    cy.get(".restaurant__category img").each(($img) => {
      expect($img.attr("alt")).to.eq("korean");
    });
  });

  it("정렬 필터를 '거리순'으로 변경하면 레스토랑이 거리순으로 정렬된다", () => {
    cy.get("#sorting-filter").select("distance");

    let prev = 0;
    cy.get(".restaurant__distance").each(($el) => {
      const match = $el.text().match(/(\d+)분/);
      if (match) {
        const dist = parseInt(match[1], 10);
        expect(dist).to.be.at.least(prev);
        prev = dist;
      }
    });
  });

  it("정렬 필터를 '이름순'으로 변경하면 레스토랑이 이름순으로 정렬된다", () => {
    cy.get("#sorting-filter").select("name");

    let prev = "";
    cy.get(".restaurant__name").each(($el) => {
      const name = $el.text();
      if (prev) {
        expect(prev.localeCompare(name, "ko-KR")).to.be.at.most(0);
      }
      prev = name;
    });
  });
});
