describe("Login", () => {
  let creds = { user: "", password: "" };

  before(() => {
  const envUser = Cypress.env("LOGIN_EMAIL");
  const envPass = Cypress.env("LOGIN_PASSWORD");

  if (envUser && envPass) {
    creds.user = envUser;
    creds.password = envPass;
    return;
  }

  cy.readFile("cypress/fixtures/credentials.json", { log: false }).then((data) => {
    creds.user = data.user || data.email;
    creds.password = data.password || data.pass;
  }).then(() => {
    if (!creds.user || !creds.password) {
      throw new Error("Credenciais não encontradas. Defina LOGIN_EMAIL/LOGIN_PASSWORD (ou CYPRESS_...) ou crie cypress/fixtures/credentials.json");
    }
  });
});

  it("Login com sucesso (fixture ou env)", () => {
    cy.visit("https://automationpratice.com.br/login");
    cy.get("#user").type(creds.user);
    cy.get("#password").type(creds.password, { log: false });
    cy.get("#btnLogin").click();
  });
});
