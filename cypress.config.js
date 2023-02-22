module.exports = {
  video : false,
  'reporter':'cypress-mochawesome-reporter',
  'reporterOptions':{
    charts: true,
    reportPageTitle: 'Squad E2E Tests',
    embeddedScreenshot: true,
    inlineAssets: true,
  },
  e2e: {
    baseUrl : "https://d26py1i7xs8g2k.cloudfront.net",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
};
