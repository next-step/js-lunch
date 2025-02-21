describe("Header Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("헤더 컴포넌트가 잘 로드되는지 확인한다.", () => {
    cy.get("header").should("exist");
  });
});

describe("Header - Drawer Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("헤더 컴포넌트가 잘 로드되는지 확인한다.", () => {
    cy.get("header").should("exist");
  });
});
