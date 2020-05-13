/// <reference types="cypress" />

describe('navigation', () => {
    it('should navigate to the Home page', () => {
        cy.get('.nav-header').click();

        cy.get('h1')
            .contains('About Me')
            .should('be.visible');
    });

    it('should navigate to the Blog page', () => {
        cy.get('.nav-menu')
            .contains('Blog')
            .click();

        cy.get('h1')
            .contains('Blog')
            .should('be.visible');
    });

    it('should navigate to the Projects page', () => {
        cy.get('.nav-menu')
            .contains('Projects')
            .click();

        cy.get('h1')
            .contains('Projects')
            .should('be.visible');
    });

    it('should navigate to the Tutorials page', () => {
        cy.get('.nav-menu')
            .contains('Tutorials')
            .click();

        cy.get('h1')
            .contains('Tutorials')
            .should('be.visible');
    });

    it('should navigate to the Gallery page', () => {
        cy.get('.nav-menu')
            .contains('Gallery')
            .click();

        cy.get('h1')
            .contains('Gallery')
            .should('be.visible');
    });

    it('should navigate to the Contact page', () => {
        cy.get('.nav-menu')
            .contains('Contact')
            .click();

        cy.get('h1')
            .contains('Contact')
            .should('be.visible');
    });
});
