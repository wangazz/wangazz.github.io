/// <reference types="cypress" />

describe('layout', () => {
    it('should show the navigation bar', () => {
        cy.get('nav')
            .should('be.visible')
            .and('contain', 'Andy Wang');

        cy.get('#navbar-content').should('be.visible');
    });

    it('should show the main content', () => {
        cy.get('#main-text-container').should('be.visible');
    });

    it('should show the footer', () => {
        cy.get('footer')
            .should('be.visible')
            .and('contain', 'Copyright')
            .and('contain', 'Andy Wang')
            .and('contain', 'MIT License');
    });
});
