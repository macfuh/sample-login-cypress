

context('Login Page',() => {

    beforeEach(() => {
        cy.visit('http://a.testaddressbook.com/sign_in');
    });
    
    it('Can sign in successfully', () => {

        cy.get('[type="email"]')
        .focus()
        .type('belindus@op.pl');

        cy.get('[type="password"]')
        .focus()
        .type('test123');

        cy.get('[type="submit"]')
        .should('have.value','Sign in')
        .click();

        cy.get('.text-center h1')
        .should('have.text','Welcome to Address Book');
    });

    it('Cannot sign in with invalid email or password', () => {

        cy.get('[type="email"]')
        .focus()
        .type('test@test.com');

        cy.get('[type="password"]')
        .focus()
        .type('test');

        cy.get('[type="submit"]')
        .should('have.value','Sign in')
        .click();

        cy.get('[data-test="notice"]')
        .should('have.text','Bad email or password.');
    });
});