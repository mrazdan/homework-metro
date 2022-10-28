class filterPage{
    
    elements = {
        firstProductLocator: () => cy.get('[rel="ajax_id_product_1641"]'),
        secondProductLocator: () => cy.get('[rel="ajax_id_product_342"]'),
        closeDialogLocator: () => cy.get('.close'),
        cartLocator: () => cy.get('#cart_block')
    }

    addFirstProductToCart(){
        this.elements.firstProductLocator().click();
    }

    addSecondProductToCart(){
        this.elements.secondProductLocator().click({force: true});
    }

    closeDialog(){
        this.elements.closeDialogLocator().click();
    }

    goToCart(){
        this.elements.cartLocator().click();
    }
}

export default new filterPage();