export function acessarAplicacao() {
  cy.visit("/");
}

export function acessarCadastro() {
  cy.get(".right_list_fix").contains("Cadastro").click();
}
