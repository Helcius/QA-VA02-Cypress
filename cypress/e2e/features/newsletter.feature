Feature: Testes de newsletter
    Vai testar a funcionalidade do cadastro das newsletters.

Context: Acessar home page e página de newsletter

Scenario: Exibição da página newsletters
    Given que acesse a home page do site NatGeo
    And que acesso a página de newsletter
    Then a página newsletters é exibida com sucesso

#Cenários para cada cadastro em newsletter (e consequentemente campo de validação de e-mail)
#precisam de um workaround, pois o modal que é aberto está num iframe

#Scenario: Abrir página do newsletter Photography
#    Given que acesse a home page do site NatGeo
#    And que acesso a página de newsletter
#    When acesso a newsletter Photography
#    Then o modal da newsletter Photography exibida com sucesso