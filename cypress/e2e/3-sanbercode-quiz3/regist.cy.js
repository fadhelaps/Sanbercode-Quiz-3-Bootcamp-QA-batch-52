describe('regist test', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com')
        cy.get('.panel > .header > :nth-child(3) > a').click() 
    })
    
    it('verify success regist', () => {
        cy.get('#firstname').type('userFirstName')
        cy.get('#lastname').type('userLastName')
        cy.get('#email_address').type('userTest@gmail.com')
        cy.get('#password').type('Password_123')
        cy.get('#password-confirmation').type('Password_123')
        cy.get('#form-validate > div > div.primary > button').click()
    })


    it('verify failed login', () => {
        cy.get('#firstname').type('userFirstName')
        cy.get('#lastname').type('userLastName')
        cy.get('#email_address').type('userTest@gmail.com')
        cy.get('#password').type('password_123')
        cy.get('#password-confirmation').type('password_123')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    })
    
})