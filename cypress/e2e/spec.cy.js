/// <reference types="cypress" />
describe('window property', () => {
  it( 'has expected sub-property', () => {
    cy.visit( 'http://localhost:3000' );
    cy.window().its( 'mw' ).should( 'have.property', 'propertyToCheckFor' );
  } );
} );
