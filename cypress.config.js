const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      username: 'stephen@roobet.com',
      password: ' ZXW26Oe566un',
    },
  },
  defaultCommandTimeout: 10000,
});
