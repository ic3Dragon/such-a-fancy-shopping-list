/// <reference types="cypress" />

describe('The app', () => {
  it('opens', () => {
    cy.visit('http://localhost:3000')
  });
});