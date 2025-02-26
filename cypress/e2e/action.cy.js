describe("헤더 UI 테스트", () => {
  beforeEach(() => {
    cy.visit("https://mandarin-sep.github.io/js-lunch/");
  });

  it("헤더에 제목과 버튼이 렌더링 된다.", () => {
    cy.get(".gnb__title").contains("점심 뭐 먹지");
    cy.get(".gnb__button").should("be.visible");
  });

  // it("헤더의 버튼을 클릭하면 모달이 나타난다.", () => {
  //   cy.get(".modal").should("not.be.visible");
  //   cy.get(".gnb__button").click();
  //   cy.get(".modal").should("be.visible");
  // });
});

describe("드롭 다운 UI 테스트", () => {
  beforeEach(() => {
    cy.visit("https://mandarin-sep.github.io/js-lunch/");
  });

  it("카테고리 드롭다운이 렌더링 된다.", () => {
    cy.get("#category-filter").should("have.value", "");
    cy.get("#category-filter").find("option").its("length").should("be.gt", 0);
    cy.get("#category-filter").select("한식");
    cy.get("#category-filter").should("have.value", "한식");
  });

  it("정렬 기준 드롭다운이 렌더링 된다.", () => {
    cy.get("#sorting-filter").should("have.value", "이름순");
    cy.get("#sorting-filter").find("option").its("length").should("be.gt", 0);
    cy.get("#sorting-filter").select("거리순");
    cy.get("#sorting-filter").should("have.value", "거리순");
  });
});
describe("리스트 UI 테스트", () => {
  beforeEach(() => {
    cy.visit("https://mandarin-sep.github.io/js-lunch/");
  });

  it("리스트에 아이템들이 렌더링 된다.", () => {
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
  it("카테고리를 선택하면 카테고리에 맞는 카드만 렌더링된다.", () => {
    cy.get("#category-filter").select("한식");

    cy.get(".restaurant").should("have.length", 1);
  });
});


describe("모달 UI 테스트", () => {
  beforeEach(() => {
    cy.visit("https://mandarin-sep.github.io/js-lunch/");
  });

  it("리스트의 아이템을 클릭하면 모달이 열린다.", () => {
    cy.get(".restaurant").first().click();
    cy.get(".modal-container").should("be.visible");
  });

  it("모달 컨테이너 안에 아이템들이 렌더링된다.", () => {
    cy.get(".restaurant").first().click();
    cy.get(".modal-container").within(() => {
      cy.get(".restaurant__category").should("be.visible");
      cy.get(".restaurant__name").should("be.visible");
      cy.get(".restaurant__distance").should("be.visible");
    });
  });
});

describe("음식점 추가 UI 테스트", () => {
  beforeEach(() => {
    cy.visit("https://mandarin-sep.github.io/js-lunch/");
  });

  it("헤더의 플러스 버튼을 누르면 음식점 추가 모달이 열린다.", () => {
    cy.get(".gnb__button").click();
    cy.get(".modal-container").should("be.visible");
  });

  it("모달 컨테이너 안에 아이템들이 렌더링된다.", () => {
    const expectedForValues = ['category', 'name', 'distance', 'description','link'];

    cy.get(".gnb__button").click();
    cy.get(".modal-container").within(() => {
      cy.get('label').each(($label, index) => {
        cy.wrap($label).should('have.attr', 'for', expectedForValues[index]);
      });
      cy.get(".button-container").should("be.visible")
    })
  });

  it("저장 버튼을 클릭하면 카드 리스트에 음식점이 추가된다.", () => {
    cy.get('.restaurant-list li').its('length').as('initialCount');

    cy.get(".gnb__button").click();
    cy.get(".modal-container").within(() => {
      cy.get('#category').select('한식');
      cy.get('#name').type('원할머니 보쌈');
      cy.get('#distance').select(10);
      cy.get('#description').type('맛있는 보쌈입니다.');
      cy.get('#link').type('naver.com');

      cy.get('.button-container').find('button').eq(1).click();
    })

    cy.get('@initialCount').then((initialCount) => {
      cy.get('.restaurant-list li').its('length').should('be.gt', initialCount);
    });

  })
});
