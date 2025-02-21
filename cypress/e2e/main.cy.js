describe("Main Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("메인 컴포넌트가 잘 로드되는지 확인한다.", () => {
    cy.get("main").should("exist");
  });

  it("메인 컴포넌트 내 select 컴포넌트가 잘 로드되는지 확인한다.", () => {
    cy.get("select").should("exist");
  });

  it("메인 컴포넌트 내 input 컴포넌트가 잘 로드되는지 확인한다.", () => {
    cy.get("input[type='radio']").should("exist");
  });

  it("메인 컴포넌트 내 List가 잘 로드되는지 확인한다. ", () => {
    cy.get("div[class='eating-place-list']").should("exist");
  });

  it("메인 컴포넌트 내 List Item이 잘 로드되는지 확인한다. ", () => {
    cy.get("div[class='eating-place-list-item']").should("exist");
  });
});

describe("Main - eating-place-list-item 검사", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("메인 컴포넌트 내 List Item이 잘 로드되는지 확인한다. ", () => {
    cy.get("div[class='eating-place-list-item']").should("exist");
  });

  it("메인 컴포넌트 내 List Item 내 img 태그가 있는지 확인한다. ", () => {
    cy.get("div[class='eating-place-list-item']").find("img").should("exist");
  });
});

describe("Main - eating-place-radio-group 검사", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("메인 컴포넌트 내 List Item 내 radio 태그가 있는지 확인한다. ", () => {
    cy.get("div[class='eating-place-radio-group']")
      .find("input[type='radio']")
      .should("exist");
  });

  it("radio group들 중 하나만 클릭되어야 한다.  ", () => {
    const firstRadios = cy.get(
      "div[class='eating-place-radio-group'] input[type='radio']:first",
    );
    const lastRadios = cy.get(
      "div[class='eating-place-radio-group'] input[type='radio']:last",
    );
    lastRadios.click().then(() => {
      firstRadios.should("not.be.checked");
    });
  });

  it("radio 이름순 클릭시 정렬되어야 함", () => {
    const firstRadios = cy.get(
      "div[class='eating-place-radio-group'] input[type='radio']:first",
    );
    firstRadios.click().then(() => {
      firstRadios.should("not.be.checked");
    });
  });
});
