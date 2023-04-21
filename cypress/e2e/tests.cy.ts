/// <reference types="cypress" />

describe('The app', () => {
  const Page = {
    titleInput: () => cy.get('[data-testid="newCardTitle"]'),
    addButton: () => cy.get('[data-testid="addNewCardBtn"]'),
    cardList: () => cy.get('[data-testid="cardList"]'),
    cardListItems: () => Page.cardList().children(),
    visit: () => cy.visit('http://localhost:3000'),
    clear: () => cy.clearLocalStorage(),
    createCard: (title: string) => {
      Page.titleInput().type(title);
      Page.addButton().click();
      return title;
    },
    firstCard: () => Page.cardListItems().first(),
    // toggleCompletedFirstCard: () => cy.get('[data-testid="cardItem"]').first().click(),
    // firstRemoveButton: () => cy.get('[data-testid="btnDeleteCard"]'),
  };

  beforeEach(() => {
    Page.visit();
  });
  afterEach(() => {
    Page.clear();
  });

  it('opens', () => {
    cy.visit('http://localhost:3000')
  })

  it('completed item goes to bottom of list', () => {
    // arrange
    Page.createCard('The first item');
    Page.createCard('The second item');
    Page.createCard('The third item');

    Page.toggleCompletedFirstCard();

    Page.cardList().then($cardlist => {
      const displayValueOfList = $cardlist.css('display');
      
      if(displayValueOfList === "flex"){
        Page.cardListItems().filter('.list__item--completed').then($firstItem => {
          const firstItemOrder = parseInt($firstItem.css('order'));
          Page.cardListItems().not('.list__item--completed').each($otherItem => {
            const otherItemOrder = parseInt($otherItem.css('order'));
            expect(firstItemOrder).to.be.gt(otherItemOrder);
          }); 
        });
      } else {
      Page.cardListItems().last().should('have.class', 'list__item--completed');
      }
    });
  });
})