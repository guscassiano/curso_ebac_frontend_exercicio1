/// <reference types="cypress" />

describe('Testes para a candidatura', () => {
    beforeEach(()=> cy.visit('https://ebac-jobs-e2e.vercel.app/'))

    it('Deve levar o usuário até o formulário de inscrição', ()=> {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })
    it('Deve preencher o formulário', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Gustavo Cassiano')
        cy.get('input[name="email"]').type('gucpinto26@gmail.com')
        cy.get('input[name="telefone"]').type('35 99892-0478')
        cy.get('input[name="endereco"]').type('Rua José Bonifácio de Castro, 100 - MG')
        cy.get('select[name="escolaridade"').select('outros')
        cy.get('#linux').check()
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscricao-preenchido')
    })
})