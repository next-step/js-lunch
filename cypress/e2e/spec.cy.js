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
            restaurant.distanceTime
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

describe("정렬 필터 컴포넌트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("정렬 필터 컴포넌트가 불러와졌는지 확인한다", () => {
    cy.get("#sorting-filter").should("exist");
  });

  it("정렬 필터를 이름순으로 선택했을 때 이름순 음식점만 표시된다", () => {
    // 이름순 정렬 선택
    cy.get("#sorting-filter").select("이름순");

    // 음식점 이름들을 순서대로 확인 (가나다 순)
    cy.get(".restaurant__name").then(($names) => {
      const names = Array.from($names).map((el) => el.textContent);
      const expectedOrder = [...RESTAURANTS]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((restaurant) => restaurant.name);
      expect(names).to.deep.equal(expectedOrder);
    });
  });

  it("정렬 필터를 거리순으로 선택했을 때 거리순 음식점만 표시된다", () => {
    // 거리순 정렬 선택
    cy.get("#sorting-filter").select("거리순");

    // 음식점들이 거리순으로 정렬되었는지 확인 (5분 → 5분 → 10분 → 10분 → 15분 → 20분)
    cy.get(".restaurant__name").then(($names) => {
      const names = Array.from($names).map((el) => el.textContent);
      const expectedOrder = [...RESTAURANTS]
        .sort((a, b) => a.distanceTime - b.distanceTime)
        .map((restaurant) => restaurant.name);
      expect(names).to.deep.equal(expectedOrder);
    });
  });
});
