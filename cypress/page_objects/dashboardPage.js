class dashboardPage{
    
    elements = {
        menuLocator: () => cy.get('#a-item-98')
    }

    openMenu(){
        this.elements.menuLocator().click();
    }
}

export default new dashboardPage();