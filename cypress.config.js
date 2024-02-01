const { defineConfig } = require("cypress");

module.exports = {

  reporter: 'cypress-mochawesome-reporter',
  video: false,

  reporterOptions: {
    charts: true,
    reportPageTitle: "Web Element",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      /*
      =================================================
      //This part of code to run as incognito browser.//
      =================================================
      
      on('before:browser:launch',(browser = {}, launchOptions) => {

        if(browser.family === 'chromium' && browser.name !== 'electron')
        launchOptions.args.push("--incognito");
        return launchOptions
      })
      */

      require('cypress-mochawesome-reporter/plugin')(on);
    },

    viewportWidth :1400,
    viewportHeight : 850,
    "includeShadowDom": true
  },
};
