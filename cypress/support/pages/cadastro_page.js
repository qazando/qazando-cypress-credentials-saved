export function preencherNome(firstName, lastName) {
  cy.get("#user").type(`${firstName} ${lastName}`);
}
