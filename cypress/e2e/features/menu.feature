
Feature: Testes de menu
    Vai testar a funcionalidade do menu e dos redirecionamentos.

Context: Acessar home page
    Given que acesse a home page do site NatGeo

Scenario: Menu funcional exibição
    Given que acesse a home page do site NatGeo
    When eu clicar no botão menu da barra de navegação
    Then o menu e todas as suas opções devem ser exibidos com sucesso

Scenario: Menu funcional redirecionamento Animals
    Given que acesse a home page do site NatGeo
    When eu clicar no botão menu da barra de navegação
    And eu clicar no link Animals
    Then devo ser redirecionado para a página Animals

Scenario: Menu funcional redirecionamento Environment
    Given que acesse a home page do site NatGeo
    When eu clicar no botão menu da barra de navegação
    And eu clicar no link Environment
    Then devo ser redirecionado para a página Environment

Scenario: Menu funcional redirecionamento History & Culture
    Given que acesse a home page do site NatGeo
    When eu clicar no botão menu da barra de navegação
    And eu clicar no link History & Culture
    Then devo ser redirecionado para a página History & Culture

Scenario: Menu funcional redirecionamento Science
    Given que acesse a home page do site NatGeo
    When eu clicar no botão menu da barra de navegação
    And eu clicar no link Science
    Then devo ser redirecionado para a página Science

Scenario: Menu funcional redirecionamento Travel
    Given que acesse a home page do site NatGeo
    When eu clicar no botão menu da barra de navegação
    And eu clicar no link Travel
    Then devo ser redirecionado para a página Travel
