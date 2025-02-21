describe("Main Component", () => {});

describe("Footer Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Footer 컴포넌트가 잘 로드되는지 확인한다.", () => {
    cy.get("footer").should("exist");
  });
});
