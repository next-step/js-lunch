describe('식당 등록하는 시나리오 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.clearAllSessionStorage();
  });

  it('식당 등록 아이콘을 눌렀을 때, 입력 폼이 정상적으로 뜬다.', () => {
    cy.get('#add-button_icon > img').click();

    cy.get('textarea').should('exist').and('not.have.value');
    cy.contains('메뉴 등 추가 정보를 입력해 주세요').should('exist');
  });

  describe('식당 등록 폼이 화면에 보여지고 식당 등록 버튼을 눌렀을 때', () => {
    beforeEach(() => {
      cy.get('#add-button_icon > img').click();
    });

    it('이름을 입력하지 않으면 입력하라는 알림 창이 뜬다.', () => {
      cy.get('#bottom-sheet-cancel').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contain('이름이 입력되지 않았습니다.');
      });
    });

    it('설명, 링크는 입력 안해도 등록이 된다.', () => {
      cy.get('input[name="name"]').type('테스트 식당');
      cy.get('#bottom-sheet-cancel').click();

      cy.contains('테스트 식당').should('exist');
    });

    it('한식 식당 정보 기반으로 음식점 목록에 나타나야 한다.', () => {
      cy.get('#category').select('한식');
      cy.get('#name').type('테스트 식당');
      cy.get('#distance').select('20분');
      cy.get('#description').type('이것은 테스트 식당입니다.');

      cy.get('#bottom-sheet-cancel').click();

      cy.contains('테스트 식당').should('exist');
      cy.contains('이것은 테스트 식당입니다.').should('exist');
    });
  });
});
