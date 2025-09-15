import { RESTAURANTS } from "../../src/constants/restaurants.js";

describe("음식점 목록 아이템 컴포넌트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  RESTAURANTS.forEach((restaurant) => {
    it(`${restaurant.name} 음식점 목록 아이템 컴포넌트가 불러와졌는지 확인한다`, () => {
      cy.get(".restaurant__name")
        .contains(restaurant.name)
        .should("exist")
        .parent()
        .parent()
        .within(() => {
          cy.get(".restaurant__category img").should(
            "have.attr",
            "alt",
            restaurant.category
          );
          cy.get(".restaurant__distance").should(
            "contain.text",
            restaurant.distance
          );
          cy.get(".restaurant__description").should(
            "contain.text",
            restaurant.description
          );
        });
    });
  });
});

describe("카테고리 필터 컴포넌트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("카테고리 필터 컴포넌트가 불러와졌는지 확인한다", () => {
    cy.get("#category-filter").should("exist");
  });

  it("카테고리 필터를 중식으로 선택했을 때 중식 음식점만 표시된다", () => {
    // 초기 전체 음식점 개수 확인
    cy.get(".restaurant-list .restaurant").should("have.length", 6);

    // 중식 카테고리 선택
    cy.get("#category-filter").select("중식");

    // 중식 음식점만 표시되는지 확인 (친친만 있어야 함)
    cy.get(".restaurant-list .restaurant").should("have.length", 1);
    cy.get(".restaurant__name").should("contain.text", "친친");

    // 다른 카테고리 음식점은 표시되지 않는지 확인
    cy.get(".restaurant__name").should("not.contain.text", "피양콩할마니");
    cy.get(".restaurant__name").should("not.contain.text", "잇쇼우");
    cy.get(".restaurant__name").should("not.contain.text", "이태리키친");
    cy.get(".restaurant__name").should("not.contain.text", "호아빈 삼성점");
    cy.get(".restaurant__name").should("not.contain.text", "도스타코스 선릉점");
  });

  it("카테고리 필터를 중식 선택 후 다시 전체로 선택했을 때 모든 음식점이 표시된다", () => {
    // 초기 전체 음식점 개수 확인
    cy.get(".restaurant-list .restaurant").should("have.length", 6);

    // 중식 카테고리 선택
    cy.get("#category-filter").select("중식");
    cy.get(".restaurant-list .restaurant").should("have.length", 1);

    // 다시 전체 카테고리 선택
    cy.get("#category-filter").select("전체");

    // 모든 음식점이 다시 표시되는지 확인
    cy.get(".restaurant-list .restaurant").should("have.length", 6);

    // 모든 음식점 이름이 표시되는지 확인
    cy.get(".restaurant__name").should("contain.text", "피양콩할마니");
    cy.get(".restaurant__name").should("contain.text", "친친");
    cy.get(".restaurant__name").should("contain.text", "잇쇼우");
    cy.get(".restaurant__name").should("contain.text", "이태리키친");
    cy.get(".restaurant__name").should("contain.text", "호아빈 삼성점");
    cy.get(".restaurant__name").should("contain.text", "도스타코스 선릉점");
  });
});
