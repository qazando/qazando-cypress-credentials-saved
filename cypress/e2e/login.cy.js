describe("Login", () => {
  let creds = { user: "", password: "" };

  before(() => {
    const envUser = Cypress.env("LOGIN_EMAIL");
    const envPass = Cypress.env("LOGIN_PASSWORD");

    // 1) Se vier do CI (envs definidas), usa direto e NÃO tenta ler arquivo
    if (envUser && envPass) {
      creds.user = envUser;
      creds.password = envPass;
      return; // importante: evita tentar ler a fixture no CI
    }

    // 2) Local: tenta ler a fixture (se não existir, falha com mensagem clara)
    cy.readFile("cypress/fixtures/credentials.json", { log: false }).then((data) => {
      creds.user = data.user || data.email;
      creds.password = data.password || data.pass;
    });
  });

  it("Login com sucesso (fixture ou env)", () => {
    cy.visit("https://automationpratice.com.br/login");
    cy.get("#user").type(creds.user);
    cy.get("#password").type(creds.password, { log: false });
    cy.get("#btnLogin").click();
  });
});
