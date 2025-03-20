import { restaurantData } from "../../src/data/restaurantData";

describe("헤더 컴포넌트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("헤더 컴포넌트가 정상적으로 렌더 되어야 한다.", () => {
    cy.get(".gnb").should("exist");
    cy.get(".gnb__title").contains("점심 뭐 먹지");
  });
});
