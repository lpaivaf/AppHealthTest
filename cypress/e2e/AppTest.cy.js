describe('Teste de Caminho Feliz (Happy Path Test)', () => {
  beforeEach(() => {
    // Visita a página
    cy.visit('https://lpaivaf.github.io/Health-and-Fitness-Calc/');
  })

  // Deve fazer o scroll da página
  it('Deve rolar a página até o final', () => {

    // Pega o container específico e rola a página até o final 
    cy.get('body').scrollTo('bottom');

    // Verifica se um elemento está visível após o scroll
    cy.get(':nth-child(7) > .habito_texto').should('be.visible');

    cy.get('.home-label').click();

  });


  //Cálculo de IMC
  it('Deve calcular o IMC', () => {

    //Constantes para cáuculos dinâmicos (coloque os dados aqui ao invés de colocar diretamente no .type)
    // *IMPORTANTE PARA QUE OS VALORES SEJAM APLICADOS NO PREENCHIMENTO DOS DADOS* 
    const peso = 72;
    const alturaCm = 171;
    const alturaM = alturaCm / 100; // Cálculo para altura
    const imcCalculado = (peso / (alturaM * alturaM)).toFixed(2); //.toFixed(2) adiciona 2 numeros após a vírgula

    // Click no botão IMC
    cy.get('[for="imc"]').click();

    // Verifique se o h3 IMC está visível
    cy.get('.main_content').contains('Índice de Massa Corporal (IMC)').should('be.visible');

    // Digite o peso e altura
    cy.get('[name="peso_IMC"]').type(peso.toString()); // Referêncie desta maneira em .type(peso.toString()) usando a "const"
    cy.get('[name="altura_IMC"]').type(alturaCm.toString()); // Referêncie desta maneira em .type(alturaCm.toString()) usando a "const"

    // Clique em "Calcular"
    cy.get('[onclick="calcularIMC()"]').click();

    // Verifique se o resultado está correto
    cy.get('[name="imc_result"]').should('have.value', imcCalculado);

    // Verifique se o diagnóstico está preenchido
    cy.get('#diagnostico', { timeout: 2000 }).should('exist').and('be.visible');

    // Espere 3"segundos
    cy.wait(3000);

    // Clique em "Limpar"
    cy.get('.article_imc > div > .clear').click();

    // Verifique se os campos foram limpos
    cy.get('[name="peso_IMC"]').should('have.value', '');
    cy.get('[name="altura_IMC"]').should('have.value', '');
    cy.get('[name="imc_result"]').should('have.value', '');
    cy.get('#diagnostico').should('have.value', '');

  })

  // Deve cálcular TMB
  it('Deve calcular a Taxa Metabólica Basal TMB', () => {

    // Click no botão IMC
    cy.get('[for="tmb"]').click();

    // Verifique se o h3 IMC está visível
    cy.get('.main_content').contains('Taxa Metabólica Basal (TMB)').should('be.visible');

    // Digite a idade
    cy.get('#idade_tmb').type('42');

    // Digite o sexo
    cy.get('#sexo_tmb').select('Masculino'); // seleciona dentro do dropdown

    // Digite o peso"
    cy.get('#peso_tmb').type('72');

    // Digite a altura
    cy.get('#altura_tmb').type('171');

    // Nível de atividade física
    cy.get('#atividade').select('Moderadamente Ativo');

    // Calcular"
    cy.xpath('/html/body/main/section/article[2]/article[1]/button[1]').click();

    cy.get('#tmb_result', { timeout: 2000 }).should('exist').and('be.visible');

    // Espere 3"segundos
    cy.wait(3000);

    // Clique em "Limpar"
    cy.get('.article_tmb > .clear').click();

    // Verifique se os campos foram limpos
    cy.get('#idade_tmb').should('have.value', '');
    cy.get('#sexo_tmb').contains('Masculino').should('be.visible'); //Valor "Masculino" default
    cy.get('#altura_tmb').should('have.value', '');
    cy.get('#atividade').should('have.value', null); // Verificar se o val() é null após resetar
    cy.get('#tmb_result').should('have.value', '');

  })
})