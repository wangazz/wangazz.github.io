/// <reference types="cypress" />

describe('navigation', () => {
    it('should navigate to the Home page', () => {
        cy.get('.navbar-brand').click();

        cy.get('h1')
            .contains('About Me')
            .should('be.visible');
    });

    it('should navigate to the Blog page', () => {
        cy.get('#navbar-content')
            .contains('Blog')
            .click();

        cy.get('h1')
            .contains('Blog')
            .should('be.visible');
    });

    it('should navigate to the Projects page', () => {
        cy.get('#navbar-content')
            .contains('li', 'Projects')
            .click()
            .contains('Pi Trainer').click();

        cy.get('h1')
            .contains('Projects')
            .should('be.visible');
    });

    it('should navigate to the Tutorials page', () => {
        cy.get('#navbar-content')
            .contains('li', 'Tutorials')
            .click()
            .contains('Raspberry Pi').click();

        cy.get('h1')
            .contains('Set Up a Raspberry Pi Without a Monitor')
            .should('be.visible');
    });

    it('should navigate to the Gallery page', () => {
        cy.get('#navbar-content')
            .contains('Gallery')
            .click();

        cy.get('h1')
            .contains('Gallery')
            .should('be.visible');
    });

    it('should navigate to the Contact page', () => {
        cy.get('#navbar-content')
            .contains('Contact')
            .click();

        cy.get('h1')
            .contains('Contact')
            .should('be.visible');
    });
});
