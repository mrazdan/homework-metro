import dashboardPage from '../page_objects/dashboardPage'
import acvaristicaPage from '../page_objects/acvaristicaPage'
import filterPage from '../page_objects/filterPage'
import cartPage from '../page_objects/cartPage'

describe('Homework UI', () => {
  before(() => {
    cy.visit('https://abc-zoo.ro/')
    Cypress.Cookies.preserveOnce(Cypress.env('CART_COOKIE'))
  })
  it('adds two products to cart and asserts that the operation is successful', () => {
    dashboardPage.openMenu();
    acvaristicaPage.checkPageLoaded();
    acvaristicaPage.navigateToFilters();
    filterPage.addFirstProductToCart();
    filterPage.closeDialog();
    filterPage.addSecondProductToCart();
    filterPage.closeDialog();
    filterPage.goToCart();
    cartPage.checkCartCount(Cypress.env('TWO_PRODUCTS'));
  })

  it('removes one item from the cart and asserts that the result is correct', () => {
    cartPage.deleteProductFromCart();
    cartPage.checkCartCount(Cypress.env('ONE_PRODUCT'));
  })

  it('removes the remaining item from the cart and asserts that the result is correct', () => {
    cartPage.deleteProductFromCart();
    cartPage.checkCartIsEmpty();
  })

  it('tries to remove again one product expecting a failed test', () => {
    cartPage.deleteProductFromCart();
    cartPage.checkCartIsEmpty();
  })
})