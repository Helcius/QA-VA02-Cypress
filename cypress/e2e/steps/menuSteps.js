/// <reference types="cypress" />
import HomePage from '../menu/HomePage.cy';

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given("que acesse a home page do site NatGeo", () => {
    HomePage.acessarURL();  
})

When("eu clicar no botão menu da barra de navegação", () =>{
    HomePage.clicarMenu();
})

Then("o menu e todas as suas opções devem ser exibidos com sucesso", () =>{    
    HomePage.validarMenu();
})

//falta implementar métodos abaixo
When("eu clicar no link Animals", () => {
    HomePage.clicarAnimals();
})

When("eu clicar no link Environment", () => {
    HomePage.clicarEnvironment();
})

When("eu clicar no link History & Culture", () => {
    HomePage.clicarHistory();
})

When("eu clicar no link Science", () => {
    HomePage.clicarScience();
})

When("eu clicar no link Travel", () => {
    HomePage.clicarTravel();
})


Then("devo ser redirecionado para a página Animals", () => {
    HomePage.validarPageTitulo('Animals');
})
Then("devo ser redirecionado para a página Environment", () => {
    HomePage.validarPageTitulo('Environment');
})
Then("devo ser redirecionado para a página History & Culture", () => {
    HomePage.validarPageTitulo('History & Culture');
})
Then("devo ser redirecionado para a página Science", () => {
    HomePage.validarPageTitulo('Science');
})
Then("devo ser redirecionado para a página Travel", () => {
    HomePage.validarPageTitulo('Travel');
})
