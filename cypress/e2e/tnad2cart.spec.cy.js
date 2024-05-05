describe('example to-do app', () => {

    beforeEach('', () => {
        cy.visit('https://tutorialsninja.com/demo/')
    })

    it('Verify the user is able to add to the cart', () => {
        cy.contains('iPhone').click()
        cy.get('#button-cart').click()
        cy.get('.alert').contains("Success: You have added iPhone to your shopping cart!") 
    })  
    it('Verify the user is able to add to the cart', () => {
        cy.contains('MacBook').click()
        cy.get('#button-cart').click()
        cy.get('.alert').contains("Success: You have added MacBook to your shopping cart!") 
    })
})


      






