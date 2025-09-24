import { faker } from "@faker-js/faker";

Cypress.Commands.add("preencherNome", (firstName, lastName) => {
  cy.get("#user").type(`${firstName} ${lastName}`);
});

Cypress.Commands.add("preencherEmail", (firstName, lastName) => {
  cy.get("#email").type(
    faker.internet.email({
      firstName: firstName.toLowerCase(),
      lastName: lastName.toLocaleLowerCase(),
      provider: "gmail.com",
    })
  );
});

Cypress.Commands.add("preencherSenha", (length) => {
  cy.get("#password").type(faker.internet.password({ length: length }));
});

Cypress.Commands.add("registrar", () => {
  cy.get("#btnRegister").click();
});

Cypress.Commands.add("validarCadastroSucesso", (firstName, lastName) => {
  cy.get("#swal2-title").should("have.text", "Cadastro realizado!");

  cy.get("#swal2-html-container").should(
    "have.text",
    "Bem-vindo " + `${firstName} ${lastName}`
  );
});
