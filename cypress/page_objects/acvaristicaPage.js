class acvaristicaPage{
    
    elements = {
        descriptionLocator: () => cy.get('#category_description'),
        filterLocator: () => cy.contains('Filtre de acvarii')
    }

    checkPageLoaded(){
        this.elements.descriptionLocator().should('be.visible');
    }

    navigateToFilters(){
        this.elements.filterLocator().click();
    }
}

export default new acvaristicaPage();