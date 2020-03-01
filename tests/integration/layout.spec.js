/// <reference types="cypress" />

describe('layout', () => {
    it('should show the navigation bar', () => {
        cy.get('nav').within(() => {
            cy.get('.nav-header')
                .should('be.visible')
                .and('contain', 'Andy Wang');

            cy.get('.nav-menu').should('be.visible');
        });
    });

    it('should show the main content', () => {
        cy.get('.main-content').should('be.visible');
    });

    it('should show the footer', () => {
        cy.get('footer')
            .should('be.visible')
            .and('contain', 'Copyright')
            .and('contain', 'Andy Wang')
            .and('contain', 'MIT License');
    });
});
