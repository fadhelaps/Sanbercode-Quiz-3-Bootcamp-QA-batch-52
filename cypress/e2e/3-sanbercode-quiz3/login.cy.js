describe('login test', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > .authorization-link > a').click()
    });
    
    it('verify success login', () => {
        cy.get('#email').type('userTest@gmail.com')
        cy.get('#pass').type('Password_123')
        cy.get('#send2').click()
    })

    it('verify failed login', () => { //input invalid email
        cy.get('#email').type('userTes@gmail.com')
        cy.get('#pass').type('Password_123')
        cy.get('#send2').click()
    })

    it('verify failed login', () => { //no email input
        cy.get('#pass').type('Password_123')
        cy.get('#send2').click()
    })

    it('verify failed login', () => { //no password input
        cy.get('#email').type('userTest@gmail.com')
        cy.get('#send2').click()
    })
})