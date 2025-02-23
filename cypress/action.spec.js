describe("헤더 UI 테스트", () => {
  beforeAll(() => {
    cy.visit("http://localhost:5173/");
  });

  test("헤더에 제목과 버튼이 렌더링 된다.", () => {
    cy.get(".header").contains("점심 뭐 먹지");
    cy.get(".header-btn").should("be.visible");
  });

  test("헤더의 버튼을 클릭하면 모달이 나타난다.", () => {
    cy.get(".bottom-modal").should("not.be.visible");
    cy.get(".header-btn").click();
    cy.get(".bottom-modal").should("be.visible");
  });
});

describe("드롭 다운 UI 테스트", () => {
  beforeAll(() => {
    cy.visit("http://localhost:5173/");
  });

  test("카테고리 드롭다운이 렌더링 된다.", () => {
    cy.get(".category-select").should("have.value", "전체");
    cy.get(".category-select").find("option").its("length").should("be.gt", 0);
    cy.get(".category-select").select("한식");
    cy.get(".category-select").should("have.value", "한식");
  });

  test("정렬 기준 드롭다운이 렌더링 된다.", () => {
    cy.get(".sorting-select").should("have.value", "이름순");
    cy.get(".sorting-select").find("option").its("length").should("be.gt", 0);
    cy.get(".sorting-select").select("거리순");
    cy.get(".sorting-select").should("have.value", "거리순");
  });
});
describe("리스트 UI 테스트", () => {
  beforeAll(() => {
    cy.visit("http://localhost:5173/");
  });

  test("리스트에 아이템들이 렌더링 된다.", () => {
    cy.get(".restaurant").should("have.length.gt", 0);

    cy.get(".restaurant")
      .first()
      .within(() => {
        cy.get(".restaurant__category").should("be.visible");
        cy.get(".restaurant__name").should("be.visible");
        cy.get(".restaurant__distance").should("be.visible");
        cy.get(".restaurant__description").should("be.visible");
      });
  });
  test("카테고리를 선택하면 카테고리에 맞는 카드만 렌더링된다.", () => {
    cy.get(".category-select").select("한식");

    cy.get(".restaurant-card").should("have.length", 1);
  });
});
describe("모달 UI 테스트", () => {
  beforeAll(() => {
    cy.visit("http://localhost:5173/");
  });

  test("리스트의 아이템을 클릭하면 모달이 열린다.", () => {
    cy.get(".restaurant").click();
    cy.get(".modal-container").should("be.visible");
  });

  test("모달 컨테이너 안에 아이템들이 렌더링된다.", () => {
    cy.get(".modal-container").within(() => {
      cy.get(".restaurant__category").should("be.visible");
      cy.get(".restaurant__info").should("be.visible");
      cy.get(".restaurant__name").should("be.visible");
      cy.get(".restaurant__distance").should("be.visible");
    });
  });
});
