/// <reference types="cypress" />

describe('navigation', () => {
    it('should navigate to the Home page', () => {
        cy.get('a')
            .contains('Home')
            .click();
    });

    it('should navigate to the Blog page', () => {});

    it('should navigate to the Projects page', () => {});
});
