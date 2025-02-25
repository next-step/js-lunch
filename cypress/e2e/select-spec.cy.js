describe("레스토랑 필터 컴포넌트 테스트", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });

  describe("카테고리 필터 컴포넌트 테스트", () => {
    it("카테고리 필터가 렌더링 되어야 한다.", () => {
      cy.get("#category-filter").should("exist");
    });

    it("카테고리 필터의 옵션은 전체, 한식, 중식, 일식, 양식, 아시안, 기타이다.", () => {
      const filterOptions = [
        "전체",
        "한식",
        "중식",
        "일식",
        "양식",
        "아시안",
        "기타",
      ];

      filterOptions.forEach((option, index) => {
        cy.get("#category-filter option").eq(index).should("have.text", option);
      });
    });
  });

  describe("정렬 카테고리 필터 컴포넌트 테스트", () => {
    it("정렬 카테고리 필터가 렌더링 되어야 한다.", () => {
      cy.get("#sorting-filter").should("exist");
    });

    it("정렬 카테고리 필터의 옵션은 이름순, 거리순이다.", () => {
      const filterOptions = ["이름순", "거리순"];

      filterOptions.forEach((option, index) => {
        cy.get("#sorting-filter option").eq(index).should("have.text", option);
      });
    });

    it("정렬 방식 선택 시 값이 변경되어야 한다.", () => {
      cy.get("#sorting-filter").select("name");
      cy.get("#sorting-filter option:selected").should("have.text", "이름순");
      cy.get("#sorting-filter").select("distance");
      cy.get("#sorting-filter option:selected").should("have.text", "거리순");
    });
  });
});
