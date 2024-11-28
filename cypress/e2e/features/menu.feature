
Feature: Testes de menu
    Vai testar a funcionalidade do menu e dos redirecionamentos.

Context: Acessar home page
    Given que acesse a home page do site NatGeo

Scenario: Menu funcional
    Given que acesse a home page do site NatGeo
    When eu clicar no botão menu da barra de navegação
    Then o menu e todas as suas opções devem ser exibidos com sucesso