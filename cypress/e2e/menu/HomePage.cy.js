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

clicarAnimals() {
    cy.get('.MenuModal__Content__Left > .MenuModal__Content__List > :nth-child(1) > .fitt-tracker > .AnchorLink').click();
}
clicarEnvironment() {
    cy.get('.MenuModal__Content__Left > .MenuModal__Content__List > :nth-child(2) > .fitt-tracker > .AnchorLink').click();
}
clicarHistory() {
    cy.get('.MenuModal__Content__Left > .MenuModal__Content__List > :nth-child(3) > .fitt-tracker > .AnchorLink').click();
}
clicarScience() {
    cy.get('.MenuModal__Content__Left > .MenuModal__Content__List > :nth-child(4) > .fitt-tracker > .AnchorLink').click();
}
clicarTravel() {
    cy.get('.MenuModal__Content__Left > .MenuModal__Content__List > :nth-child(5) > .fitt-tracker > .AnchorLink').click();
}

validarPageTitulo(titulo) {
    cy.get('.Header > div > .RichText').should('be.visible')
    cy.get('.Header > div > .RichText').should('contain.text', titulo)
}


}

export default new HomePage();
