class HomePage {

acessarURL() {
    cy.visit("https://www.nationalgeographic.com/");
  }

clicarMenu() {
    cy.get('.MenuModal > .Button').click();
}

validarMenu() {
    cy.get('.MenuModal__Content__Left').should('be.visible')
    cy.get('.MenuModal__Content__Left > .MenuModal__Content__List > :nth-child(1) > .fitt-tracker > .AnchorLink').should('have.text', 'Animals')
    cy.get('.MenuModal__Content__Left > .MenuModal__Content__List > :nth-child(2) > .fitt-tracker > .AnchorLink').should('have.text', 'Environment')
    cy.get('.MenuModal__Content__Left > .MenuModal__Content__List > :nth-child(3) > .fitt-tracker > .AnchorLink').should('have.text', 'History & Culture')
    cy.get('.MenuModal__Content__Left > .MenuModal__Content__List > :nth-child(4) > .fitt-tracker > .AnchorLink').should('have.text', 'Science')
    cy.get('.MenuModal__Content__Left > .MenuModal__Content__List > :nth-child(5) > .fitt-tracker > .AnchorLink').should('have.text', 'Travel')
}
}

