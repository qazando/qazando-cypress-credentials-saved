// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add("acessarLogin", () => {
  cy.visit("/login");
});

Cypress.Commands.add("preencheEmail", (email) => {
  cy.get("#user").type(email);
});

Cypress.Commands.add("preencheSenha", (senha) => {
  cy.get("#password").type(senha);
});

Cypress.Commands.add("fazerLogin", () => {
  cy.get("#btnLogin").click();
});

Cypress.Commands.add("validarLoginSucesso", () => {
  cy.get("#swal2-title").should("have.text", "Login realizado");
});

Cypress.Commands.add("validarErroLogin", (mensagem) => {
  cy.get(".invalid_input").should("have.text", mensagem);
});

Cypress.Commands.add("login", (email, senha) => {
  cy.acessarLogin();
  cy.preencheEmail(email);
  cy.preencheSenha(senha);
  cy.fazerLogin();
});
