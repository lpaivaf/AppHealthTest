# 🧪 Testes Automatizados com Cypress — Health and Fitness Calc

Este repositório contém testes exploratórios automatizados utilizando [Cypress](https://www.cypress.io/) para validar funcionalidades da calculadora de saúde disponível em [Health and Fitness Calc](https://lpaivaf.github.io/Health-and-Fitness-Calc/).

## 📋 Objetivo

Garantir que os principais recursos da aplicação funcionem corretamente, incluindo:
- Scroll da página
- Cálculo de IMC (Índice de Massa Corporal)
- Cálculo de TMB (Taxa Metabólica Basal)
- Limpeza dos campos após interação

## 🚀 Como executar os testes

1. Clone este repositório:
   ```bash
   git clone https://github.com/lpaivaf/AppHealthTest.git

2. Instale as dependências:
   npm install

3. Execute o Cypress:
   npx cypress open

4. Selecione o arquivo cypress/e2e/AppTest.cy.js e execute.


# Estrutura dos testes
## 🔄 beforeEach()
Visita a página principal antes de cada teste.

## Teste 1 — Scroll da página
Rola até o final da página

Verifica se o último elemento está visível

Retorna ao topo clicando no botão "home"

## Teste 2 — Cálculo de IMC
Preenche peso e altura

Calcula o IMC dinamicamente

Verifica o resultado e diagnóstico

Limpa os campos e valida se estão vazios

## Teste 3 — Cálculo de TMB
Preenche idade, sexo, peso, altura e nível de atividade

Calcula a TMB

Verifica o resultado

Limpa os campos e valida se foram resetados

## Tecnologias utilizadas
Cypress

JavaScript

XPath (via plugin Cypress XPath)

## Observações
Os valores de IMC são calculados dinamicamente com base nos dados inseridos.

O teste de TMB utiliza seletores select e XPath para interagir com dropdowns e botões.

O tempo de espera (cy.wait) é usado para garantir que os resultados sejam renderizados antes da verificação.

## Licença
Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e contribuir!