/// <reference types="cypress" />
import HomePage from '../menu/HomePage.cy';
import NewsletterPage from '../newsletter/NewsletterPage.cy';

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given("que acesse a home page do site NatGeo", () => {
    HomePage.acessarURL();  
})

Given("que acesso a página de newsletter", () => {
    HomePage.clicarNewsletter();  
})

When("eu clicar no botão menu da barra de navegação", () =>{
    HomePage.clicarMenu();
})

Then("a página newsletters é exibida com sucesso", () =>{    
    NewsletterPage.validarPage();
})


When("acesso a newsletter Photography" , () => {
    NewsletterPage.acessarPhotography();
})

Then("o modal da newsletter Photography exibida com sucesso", () =>{    
    NewsletterPage.validarPhotography();
})