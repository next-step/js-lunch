import { restaurantData } from "../../src/data/restaurantData";

describe("레스토랑 리스트 섹션", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("레스토랑 리스트 섹션이 잘 로드되는지 확인한다.", () => {
    cy.get(".restaurant-list").should("exist");
  });

  it("리스트 아이템이 잘 로드 되는지 확인한다.", () => {
    restaurantData.forEach((restaurant) => {
      cy.get(".restaurant__name").contains(restaurant.name);
      cy.get(".restaurant__distance").contains(restaurant.distance);
      cy.get(".restaurant__description").contains(restaurant.description);
    });
  });
});
