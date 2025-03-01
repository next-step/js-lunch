describe("음식점 항목 컴포넌트 테스트", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });

  it("전체 레스토랑 데이터가 렌더링되어야 한다", () => {
    cy.get(".restaurant-list").find(".restaurant").should("have.length", 6);

    cy.get(".restaurant-list .restaurant")
      .eq(0)
      .within(() => {
        cy.get(".restaurant__name.text-subtitle").should(
          "contain",
          "도스타코스 선릉점",
        );
        cy.get(".restaurant__distance.text-body").should(
          "contain",
          "캠퍼스부터 5분 내",
        );
        cy.get(".restaurant__description.text-body").should(
          "contain",
          "멕시칸 캐주얼 그릴",
        );
        cy.get(".restaurant__category img")
          .should("have.attr", "alt", "기타")
          .and("have.attr", "src")
          .should("include", "category-etc.png");
      });

    cy.get(".restaurant-list .restaurant")
      .eq(1)
      .within(() => {
        cy.get(".restaurant__name.text-subtitle").should(
          "contain",
          "이태리키친",
        );
        cy.get(".restaurant__distance.text-body").should(
          "contain",
          "캠퍼스부터 20분 내",
        );
        cy.get(".restaurant__description.text-body").should(
          "contain",
          "늘 변화를 추구하는 이태리키친",
        );
        cy.get(".restaurant__category img")
          .should("have.attr", "alt", "양식")
          .and("have.attr", "src")
          .should("include", "category-western.png");
      });

    cy.get(".restaurant-list .restaurant")
      .eq(2)
      .within(() => {
        cy.get(".restaurant__name.text-subtitle").should("contain", "잇쇼우");
        cy.get(".restaurant__distance.text-body").should(
          "contain",
          "캠퍼스부터 10분 내",
        );
        cy.get(".restaurant__description.text-body").should(
          "contain",
          "정통 자가제면 사누끼 우동",
        );
        cy.get(".restaurant__category img")
          .should("have.attr", "alt", "일식")
          .and("have.attr", "src")
          .should("include", "category-japanese.png");
      });

    cy.get(".restaurant-list .restaurant")
      .eq(3)
      .within(() => {
        cy.get(".restaurant__name.text-subtitle").should("contain", "친친");
        cy.get(".restaurant__distance.text-body").should(
          "contain",
          "캠퍼스부터 5분 내",
        );
        cy.get(".restaurant__description.text-body").should(
          "contain",
          "정통 중식의 세계",
        );
        cy.get(".restaurant__category img")
          .should("have.attr", "alt", "중식")
          .and("have.attr", "src")
          .should("include", "category-chinese.png");
      });

    cy.get(".restaurant-list .restaurant")
      .eq(4)
      .within(() => {
        cy.get(".restaurant__name.text-subtitle").should(
          "contain",
          "피양콩할마니",
        );
        cy.get(".restaurant__distance.text-body").should(
          "contain",
          "캠퍼스부터 10분 내",
        );
        cy.get(".restaurant__description.text-body").should(
          "contain",
          "평양 출신의 할머니",
        );
        cy.get(".restaurant__category img")
          .should("have.attr", "alt", "한식")
          .and("have.attr", "src")
          .should("include", "category-korean.png");
      });

    cy.get(".restaurant-list .restaurant")
      .eq(5)
      .within(() => {
        cy.get(".restaurant__name.text-subtitle").should(
          "contain",
          "호아빈 삼성점",
        );
        cy.get(".restaurant__distance.text-body").should(
          "contain",
          "캠퍼스부터 15분 내",
        );
        cy.get(".restaurant__description.text-body").should(
          "contain",
          "푸짐한 양에 국물이 일품인 쌀국수",
        );
        cy.get(".restaurant__category img")
          .should("have.attr", "alt", "아시안")
          .and("have.attr", "src")
          .should("include", "category-chinese.png");
      });
  });
});
