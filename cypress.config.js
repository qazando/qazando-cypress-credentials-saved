const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "k93kiv",
  reporter: 'mochawesome',
  e2e: {
    baseUrl: "https://automationpratice.com.br",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
