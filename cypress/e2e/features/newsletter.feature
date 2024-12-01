Feature: Testes de newsletter
    Vai testar a funcionalidade do cadastro das newsletters.

Context: Acessar home page
    Given que acesse a home page do site NatGeo
    And que acesso a página de newsletter

Scenario: Menu funcional exibição
    Given que acesse a home page do site NatGeo
    When eu clicar no botão menu da barra de navegação
    Then o menu e todas as suas opções devem ser exibidos com sucesso