describe("모달 테스트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.clearAllSessionStorage();
  });

  it("모달 오픈 버튼을 누르면 모달이 화면에 보여야 한다.", () => {
    cy.get(".gnb__button").click();

    cy.get(".add-restaurant-modal").should("have.class", "modal--open");
  });

  describe("모달 창이 열린 후", () => {
    beforeEach(() => {
      cy.get(".gnb__button").click();
    });
    describe("모달 취소 버튼을 누르면", () => {
      it("모달이 화면에 보이지 않아야 한다.", () => {
        cy.get(".close-modal-btn").click();
        cy.get(".add-restaurant-modal").should("not.have.class", "modal--open");
      });
      it("form에 작성된 값들이 초기화 되어야 한다.", () => {
        // <div.modal.add-restaurant-modal.modal--open> 이 크기가 1000x0 으로 보이지 않아 force:true를 사용한다.
        cy.get('.add-restaurant-modal select[name="category"]').select("한식", { force: true });
        cy.get('.add-restaurant-modal input[name="name"]').type("진미각", { force: true });
        cy.get('.add-restaurant-modal select[name="distance"]').select("10", { force: true });

        cy.get(".close-modal-btn").click();

        cy.get('.add-restaurant-modal select[name="category"]').should("have.value", "");
        cy.get('.add-restaurant-modal input[name="name"]').should("have.value", "");
        cy.get('.add-restaurant-modal select[name="distance"]').should("have.value", "");
      });
    });
   
    describe('등록 테스트', () => {

        it("입력된 정보로 음식점이 등록된다.", () => {
            cy.get('.add-restaurant-modal select[name="category"]').select("한식", { force: true });
            cy.get('.add-restaurant-modal input[name="name"]').type("진미각", { force: true });
            cy.get('.add-restaurant-modal select[name="distance"]').select("10", { force: true });
            cy.get('.add-restaurant-modal textarea[name="description"]').type("차돌 짬뽕이 맛나요.", { force: true });
            cy.get('.add-restaurant-modal input[name="link"]').type("www.진미각.com", { force: true });

            cy.get(".add-restaurant-btn").click();

            cy.contains('진미각').should("exist");
            cy.contains('차돌 짬뽕이 맛나요.').should("exist");
        })
        
        it("카테고리, 이름, 거리 미입력 시 alert가 뜬다.", () => {
            cy.get('.add-restaurant-modal select[name="category"]').should('have.value', '');
            cy.get('.add-restaurant-modal input[name="name"]').should('have.value', '');
            cy.get('.add-restaurant-modal select[name="distance"]').should('have.value', '');

            cy.get(".add-restaurant-btn").click();
            cy.on("window:alert", (text) => {
                expect(text).to.contain("카테고리, 이름, 거리를 입력해주세요.");
            });
        });

        it("설명, 참고 링크는 입력하지 않아도 음식점이 등록된다.", () => {
            cy.get('.add-restaurant-modal select[name="category"]').select("한식", { force: true });
            cy.get('.add-restaurant-modal input[name="name"]').type("진미각", { force: true });
            cy.get('.add-restaurant-modal select[name="distance"]').select("10", { force: true });

            cy.get('.add-restaurant-modal textarea[name="description"]').should('have.value', '');
            cy.get('.add-restaurant-modal input[name="link"]').should('have.value', '');

            cy.get(".add-restaurant-btn").click();
            cy.contains('진미각').should("exist");
        })
    });

  });
});
