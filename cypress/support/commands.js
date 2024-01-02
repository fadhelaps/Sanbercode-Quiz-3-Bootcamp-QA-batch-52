// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login',(email, password) => {
    cy.get('#email').type(email)
    cy.get('#pass').type(password)
})

Cypress.Commands.add('alertLoginFailed', (locator, value) => {
    cy.get(locator).should('contain.text', value)
})

Cypress.Commands.add('emailError', (locator,value) => {
    cy.get(locator).should('contain.text', value)
})

//  chose
Cypress.Commands.add('chooseProducts',(Qty) => {
    cy.get('#ui-id-3 > span').click()
    cy.get(':nth-child(2) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click()
    cy.get('#option-label-size-143-item-166').click()
    cy.get('#option-label-color-93-item-56').click()
    cy.get('#qty').clear().type(Qty)
})


//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })