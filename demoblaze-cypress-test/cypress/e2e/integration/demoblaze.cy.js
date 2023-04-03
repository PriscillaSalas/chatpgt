// cypress/integration/demoblaze.spec.js

describe('DemoBlaze Test', () => {
    it('performs the required actions', () => {
        cy.visit('https://www.demoblaze.com/')

        cy.title().should('eq', 'STORE')

        cy.contains('Laptops').click()

        cy.contains('MacBook air').click()

        cy.get('.price-container').should('contain', '$700')


        cy.contains('Add to cart').click()

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Product added')
        })

        cy.contains('Cart').click()

        cy.contains('Place Order').click()

        cy.get('[data-target="#orderModal"]').should('be.visible')

        cy.get('#name').type('John Doe')
        cy.get('#country').type('India')
        cy.get('#city').type('Mumbai')
        cy.get('#card').type('4111111111111111')
        cy.get('#month').type('12')
        cy.get('#year').type('2025')
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

        cy.contains('OK').click()
    })
})


