class cartPage{
    
    elements = {
        messageLocator: () => cy.get('.main-content > :nth-child(8)'),
        deleteProductLocator: () => cy.get('[class*="cart_quantity_delete"]').first(),
        emptyCartStatusLocator: () => cy.contains('Coşul dvs. este gol.')
    }

    checkCartCount(message){
        this.elements.messageLocator().contains(message);
    }

    deleteProductFromCart(){
        this.elements.deleteProductLocator().click()
    }
    
    checkCartIsEmpty(){
        this.elements.emptyCartStatusLocator().should('be.visible')
    }
}

export default new cartPage();