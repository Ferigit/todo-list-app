const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
    },
    "video": false,
    "baseUrl": "http://localhost:3000/",
    "retries": 1,
  },

});
