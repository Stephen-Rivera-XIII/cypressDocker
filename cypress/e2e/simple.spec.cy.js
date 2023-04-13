//describe cypress test


describe('hit roobet staging', () => {

    it('hit roobet staging', () => {
        cy.visit('https://roobet.cloud');
        //click on the button titled "Google ・ Google"
        cy.contains('Google ・ Google').click();
        //wrap the code below with cy.origin()
        cy.origin('https://accounts.google.com', () => {
            //fill email field with username
            cy.get("[aria-label='Email or phone']").type(Cypress.env('username'));
            //click next button
            cy.contains('Next').click();
            cy.wait(10000);
            //fill password field with password
            cy.get("[aria-label='Enter your password']").type(Cypress.env('password'));
            //click next button
            cy.contains('Next').click();
            cy.wait(10000);
        });
    });
})

