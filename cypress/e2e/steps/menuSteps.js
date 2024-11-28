/// <reference types="cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given("que acesse a home page do site NatGeo", () => {
    cy.visit("https://www.nationalgeographic.com/");
    //HomePage.acessarURL();  
})

When("eu clicar no botão menu da barra de navegação", () =>{
    cy.get('.MenuModal > .Button').click();
    //HomePage.clicarMenu();
})

Then("o menu e todas as suas opções devem ser exibidos com sucesso", () =>{
    cy.get('.MenuModal__Content__Left').should('be.visible')
    cy.get('.MenuModal__Content__Left > .MenuModal__Content__List > :nth-child(1) > .fitt-tracker > .AnchorLink').should('have.text', 'Animals')
    cy.get('.MenuModal__Content__Left > .MenuModal__Content__List > :nth-child(2) > .fitt-tracker > .AnchorLink').should('have.text', 'Environment')
    cy.get('.MenuModal__Content__Left > .MenuModal__Content__List > :nth-child(3) > .fitt-tracker > .AnchorLink').should('have.text', 'History & Culture')
    cy.get('.MenuModal__Content__Left > .MenuModal__Content__List > :nth-child(4) > .fitt-tracker > .AnchorLink').should('have.text', 'Science')
    cy.get('.MenuModal__Content__Left > .MenuModal__Content__List > :nth-child(5) > .fitt-tracker > .AnchorLink').should('have.text', 'Travel')
    
    //HomePage.validarMenu();
})