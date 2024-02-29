/// <reference types="cypress" />



describe('Testes da agenda', ()=> {
    beforeEach(() => cy.visit('https://agenda-contatos-react.vercel.app/'))

    it('Incluindo um novo contato', ()=> {
        cy.get('input[type="text"]').type('Gustavo Cassiano')
        cy.get('input[type="email"]').type('guscassiano@gmail.com')
        cy.get('input[type="tel"]').type('35999999999')
        cy.get('.adicionar').click()

        cy.get('input[type="text"]').type('Maria')
        cy.get('input[type="email"]').type('Maria@gmail.com')
        cy.get('input[type="tel"]').type('35999999999')
        cy.get('.adicionar').click()

    })

    it('Alterando o último contato', ()=> {
        cy.get('.sc-gueYoa > .edit').last().click()

        cy.get('input[type="text"]').clear()
        cy.get('input[type="email"]').clear()
        cy.get('input[type="tel"]').clear()

        cy.get('input[type="text"]').type('João')
        cy.get('input[type="email"]').type('joao@hotmail.com')
        cy.get('input[type="tel"]').type('35987654321')
        cy.get('.alterar').click()
    })

    it('Deletando o primeiro contato', ()=> {
        cy.wait(2000)
        cy.get('.sc-gueYoa > .delete').first().click()
    })
})
