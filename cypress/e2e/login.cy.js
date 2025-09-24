describe("Login", () => {
  let creds = { user: "", password: "" };

  before(() => {
    const fixturePath = "credentials.json";

    cy.readFile(`cypress/fixtures/${fixturePath}`, { log: false }).then(
      (data) => {
        // Se o arquivo existe, pega dele
        creds.user = data.user;
        creds.password = data.password;
      },
      () => {
        // Se não existe, pega das variáveis de ambiente
        creds.user = Cypress.env("LOGIN_EMAIL");
        creds.password = Cypress.env("LOGIN_PASSWORD");
      }
    );
  });

  it("Login com sucesso (fixture ou env)", () => {
    cy.visit("https://automationpratice.com.br/login");

    cy.get("#user").type(creds.user);
    cy.get("#password").type(creds.password, { log: false });
    cy.get("#btnLogin").click();

    // Exemplo de validação
    // cy.contains("Bem-vindo").should("be.visible");
  });
});
