import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      reportFilename: "report",
      reportPageTitle: 'Cypress Inline Reporter',
      overwrite: false,
      html: false,
      json: true,
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true
      
    },
    video: false
    
  },
});
