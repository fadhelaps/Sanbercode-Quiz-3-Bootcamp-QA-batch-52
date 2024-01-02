import chooseProducts from '../support/pageObject/sanbercode-quiz3/products';
const inputProducts = require('../fixtures/quiz3/chooseProduct.json')
describe('choose product', () => {
    beforeEach(() => {
        cy.visit('')
        cy.get('.panel > .header > .authorization-link > a').click()
    });
    
    // custom Command
    it('Succes Get Product', () => { 
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.chooseProducts('1')
        cy.get('#product-addtocart-button > span').click()
    })

    it('0 QTY', () => { 
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.chooseProducts('0')
        cy.get('#product-addtocart-button > span').click()
        cy.get('#qty-error').should('contain.text', 'Please enter a quantity greater than 0.')
    })

    it('-1 QTY', () => { 
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.chooseProducts('-1')
        cy.get('#product-addtocart-button > span').click()
        cy.get('#qty-error').should('contain.text', 'Please enter a quantity greater than 0.')
    })
    it('kosong QTY', () => { 
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.chooseProducts(' ')
        cy.get('#product-addtocart-button > span').click()
        cy.get('#qty-error').should('contain.text', 'Please enter a valid number in this field.')
    })

    // POM

    it('Succses Get Product POM', () => {
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        chooseProducts.clickProduct()
        cy.get(chooseProducts.qty).clear().type('2')
        cy.get('#product-addtocart-button > span').click()
    });

    it('0 QTY POM', () => {
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        chooseProducts.clickProduct()
        cy.get(chooseProducts.qty).clear().type('0')
        cy.get('#product-addtocart-button > span').click()
        chooseProducts.qtyValidation('Please enter a quantity greater than 0.')
    });

    it('-1 QTY POM', () => {
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        chooseProducts.clickProduct()
        cy.get(chooseProducts.qty).clear().type('-1')
        cy.get('#product-addtocart-button > span').click()
        chooseProducts.qtyValidation('Please enter a quantity greater than 0.')
    });

    it('kosong QTY POM', () => {
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        chooseProducts.clickProduct()
        cy.get(chooseProducts.qty).clear().type(' ')
        cy.get('#product-addtocart-button > span').click()
        chooseProducts.qtyValidation('Please enter a valid number in this field.')
    });

    // fixture

    it.only('Succses Get Product Fixture', () => {
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        chooseProducts.clickProduct()
        cy.get(chooseProducts.qty).clear().type(inputProducts.valid_qty)
        cy.get('#product-addtocart-button > span').click()
    });

    it(' invalid QTY Fixture', () => {
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        chooseProducts.clickProduct()
        cy.get(chooseProducts.qty).clear().type(inputProducts.invalid_qty)
        cy.get('#product-addtocart-button > span').click()
        cy.get('#qty-error').should('contain.text', inputProducts.message[0].invalid_message)
    });

    it(' Kosong QTY Fixture', () => {
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        chooseProducts.clickProduct()
        cy.get(chooseProducts.qty).clear().type(inputProducts.kosong_qty)
        cy.get('#product-addtocart-button > span').click()
        cy.get('#qty-error').should('contain.text', inputProducts.message[0].kosong_message)
    });

})