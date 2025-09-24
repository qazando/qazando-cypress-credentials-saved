Cypress.Commands.add("acessarAplicacao", () => {
  cy.visit("/");
});

Cypress.Commands.add("acessarCadastro", () => {
  cy.get(".right_list_fix").contains("Cadastro").click();
});
