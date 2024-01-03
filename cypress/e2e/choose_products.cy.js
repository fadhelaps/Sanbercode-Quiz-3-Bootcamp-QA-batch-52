
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
    })

    it('0 QTY', () => { 
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.chooseProducts('0')
        cy.get('#qty-error').should('contain.text', 'Please enter a quantity greater than 0.')
    })

    it('-1 QTY', () => { 
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.chooseProducts('-1')
        cy.get('#qty-error').should('contain.text', 'Please enter a quantity greater than 0.')
    })
    it('kosong QTY', () => { 
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.chooseProducts(' ')
        cy.get('#qty-error').should('contain.text', 'Please enter a valid number in this field.')
    })

    it('No Size Error', () => { 
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.noSize('1')
        cy.contains('This is a required field')
    })

    it('No Color Error', () => { 
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.noColor('1')
        cy.contains('This is a required field')
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

    it('No Size POM', () => {
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        chooseProducts.noSize()
        cy.get(chooseProducts.qty).clear().type('2')
        cy.get('#product-addtocart-button > span').click()
        chooseProducts.sizeValidation('This is a required field')
    });

    it('No Color POM', () => {
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        chooseProducts.noColor()
        cy.get(chooseProducts.qty).clear().type('2')
        cy.get('#product-addtocart-button > span').click()
        chooseProducts.colorValidation('This is a required field')
    });

    // fixture

    it('Succses Get Product Fixture', () => {
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.chooseProducts(inputProducts.valid_qty)
        cy.get('#product-addtocart-button > span').click()
    });

    it(' invalid QTY Fixture', () => {
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.chooseProducts(inputProducts.invalid_qty)
        cy.get('#product-addtocart-button > span').click()
        cy.get('#qty-error').should('contain.text', inputProducts.message[0].invalid_message)
    });

    it(' Kosong QTY Fixture', () => {
        
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.chooseProducts(inputProducts.kosong_qty)
        cy.get('#product-addtocart-button > span').click()
        cy.get('#qty-error').should('contain.text', inputProducts.message[0].kosong_message)
    });

    it('No Size Fixture', () => {
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.noSize(inputProducts.valid_qty)
        cy.get('#product-addtocart-button > span').click()
        cy.contains(inputProducts.message[0].field_message)
    });

    it('No Color Fixture', () => {
        cy.login('userTest@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.noColor(inputProducts.valid_qty)
        cy.get('#product-addtocart-button > span').click()
        cy.contains(inputProducts.message[0].field_message)
    });
   
})
