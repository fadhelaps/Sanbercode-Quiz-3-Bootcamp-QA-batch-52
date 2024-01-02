class chooseProducts {
    qty = '#qty'


    clickProduct() {
        cy.get('#ui-id-3 > span').click()
        cy.get(':nth-child(2) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click()
        cy.get('#option-label-size-143-item-167').click()
        cy.get('#option-label-color-93-item-56').click()
    }

    qtyValidation(message) {
        cy.get('#qty-error').should('contain.text', message)
    }
}

export default new chooseProducts()