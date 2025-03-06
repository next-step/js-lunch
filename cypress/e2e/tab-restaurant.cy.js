describe('식당 즐겨찾기 시나리오 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('별표 아이콘을 누르면 해당 식당을 즐겨찾기로 등록할 수 있다.', () => {
    cy.get('.favorite-icon-container[data-id="3"]').click();

    cy.get('.restaurant[data-id="3"]')
      .find('#favorite-icon-filled_icon')
      .should('exist');
  });

  it('"자주 가는 음식점" 탭을 누르면 즐겨찾기한 식당들만 보여진다.', () => {
    cy.get('.favorite-icon-container[data-id="3"]').click();
    cy.contains('자주 가는 음식점').click();

    cy.contains('잇쇼우').should('exist');
  });
});
