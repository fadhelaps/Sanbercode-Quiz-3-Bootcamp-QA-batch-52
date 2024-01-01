describe('Magento Website Tests', () => {
    const email = 'userTest@gmail.com';
    const password = 'Password_123';
  
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/');
    });
  
    it('should login and edit account information', () => {
      cy.contains('My Account').click();
      cy.contains('Sign In').click();
      
      cy.get('#email').type(email);
      cy.get('#pass').type(password);
      cy.get('#send2').click();
  
      cy.contains('Account Dashboard').should('be.visible');
  
      cy.contains('Edit Account Information').click();
      // Add your test steps for editing account information here
      // For example:
      // cy.get('#firstname').clear().type('NewFirstName');
      // cy.get('#lastname').clear().type('NewLastName');
      // cy.get('.save').click();
    });
  
    it('should login and edit address', () => {
      cy.contains('My Account').click();
      cy.contains('Sign In').click();
      
      cy.get('#email').type(email);
      cy.get('#pass').type(password);
      cy.get('#send2').click();
  
      cy.contains('Account Dashboard').should('be.visible');
  
      cy.contains('Edit Address').click();
      // Add your test steps for editing address here
      // For example:
      // cy.get('.edit').first().click();
      // cy.get('#street_1').clear().type('New Street Address');
      // cy.get('.save').click();
    });
  });
