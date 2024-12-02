class NewsletterPage{
    
    validarPage(){
        cy.get('.NewsletterSignup__Title').should('be.visible');
    }

    acessarPhotography(){
        cy.get('.StackModule > :nth-child(1) > .Button').click();
    }

    validarPhotography(){
        cy.get('#oneid-iframe').should('be.visible');
    }



}

export default new NewsletterPage();
