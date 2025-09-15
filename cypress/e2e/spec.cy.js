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
