class loginPage {
    email = '#email'
    password = '#pass'
    loginButton = '#send2'
    alertLoginFailed = '#email-error'

    clickLoginButton() {
        cy.get('#send2').click()
    }

    verifyAlertLoginFailed(message) {
        cy.get('#email-error').should('contain.text', message)
    }
}

export default new loginPage()