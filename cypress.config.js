const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://testingqarvn.com.es",
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  // Whether Cypress will record a video of the test run when running on headless:
  video: false,
});
