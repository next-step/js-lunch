describe('점심 뭐 먹지 어플리케이션 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('카테고리가 한식인 식당들을 보여줄 수 있다.', () => {
    cy.get('#category').select('한식');

    cy.contains('피양콩할마니').should('exist');
    cy.get('#category').should('have.value', '한식');
  });

  it('거리순으로 정렬해서 보여줄 수 있다.', () => {
    cy.get('#sorting').select('거리순');

    cy.get('.restaurant').eq(0).should('contain.text', '친친');
    cy.get('.restaurant').eq(1).should('contain.text', '도스타코스 선릉점');
    cy.get('.restaurant').eq(2).should('contain.text', '피양콩할마니');
  });

  it('식당 정보를 팝업으로 확인할 수 있다.', () => {
    cy.get('.restaurant').first().click();

    cy.contains('삭제하기').should('exist');
  });

  it('목록에서 식당을 삭제할 수 있다.', () => {
    cy.get('.restaurant').first().click();
    cy.contains('삭제하기').click();

    cy.contains('피양콩할머니').should('not.exist');
  });
});
