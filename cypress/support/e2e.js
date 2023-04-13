// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
    Cypress.on('window:before:load', win => {
      // disable ResizeObserver to prevent 'ResizeObserver loop limit exceeded' error
      Object.defineProperty(win, 'ResizeObserver', {
        value: function ResizeObserver() {
          this.observe = () => {};
          this.unobserve = () => {};
        },
        writable: true,
        configurable: true,
      });
    });
  });
  
beforeEach(() => {
    cy.log('Exception handler: Running');
    Cypress.on('uncaught:exception', (err) => {
      cy.log('Uncaught exception: ' + err.message);
      if (err.message.includes('ResizeObserver loop limit exceeded')) {
        err.preventDefault(); // prevent Cypress from failing the test
        return false
      }
    })
  })

