import loginPage from "../../support/pageObject/sanbercode-quiz3/login.page";

describe('login test', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > .authorization-link > a').click()
    });
    
    it('verify success login', () => { //custom command
        cy.login('userTest@gmail.com', 'Password_123')
        // cy.get('#email').type('userTest@gmail.com')
        // cy.get('#pass').type('Password_123')
        cy.get('#send2').click()
    })

    it('verify success login', () => { //POM
        cy.get(loginPage.email).type('userTest@gmail.com')
        cy.get(loginPage.password).type('Password_123')
        loginPage.clickLoginButton()
    });

    it('verify failed login', () => { //input wrong email -- custom command
        cy.login('userTes@gmail.com', 'Password_123')
        // cy.get('#email').type('userTes@gmail.com')
        // cy.get('#pass').type('Password_123')
        cy.get('#send2').click()
        cy.alertLoginFailed('.message-error', 'Please wait and try again later')
        // cy.get('.message-error').should('contain', 'Please wait and try again later')
    })

    it('verify failed login', () => { //input wrong email -- POM
       cy.get(loginPage.email).type('1')
       cy.get(loginPage.password).type('Password_123')
       loginPage.clickLoginButton()
       loginPage.verifyAlertLoginFailed('Please enter a valid email address')
    });

    it('verify failed login', () => { //input wrong password
        cy.login('userTes@gmail.com', 'Password_12')
        // cy.get('#email').type('userTes@gmail.com')
        // cy.get('#pass').type('Password_123')
        cy.get('#send2').click()
        cy.alertLoginFailed('.message-error', 'Please wait and try again later')
        // cy.get('.message-error').should('contain', 'Please wait and try again later')
    })

    it('verify failed login', () => { //input invalid email
        cy.login('1', 'Password_123')
        // cy.get('#pass').type('Password_123')
        cy.get('#send2').click()
        cy.emailError('#email-error', 'Please enter a valid email address')

    })

})