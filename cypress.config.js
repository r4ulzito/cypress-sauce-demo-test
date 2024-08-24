const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents() {},
        chromeWebSecurity: false,
        baseUrl: "https://www.saucedemo.com",
        experimentalRunAllSpecs: true,
    },
    viewportWidth: 1280,
    viewportHeight: 700,
});
