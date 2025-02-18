// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//Komanda-funkcija
Cypress.Commands.add('addToDoes', (sessionName) => {
    cy.session(sessionName, () => {
            cy.visit("https://todolist.james.am/#/");
            cy.get("input.new-todo").type("Pirma užduotis{enter}");
            cy.get("input.new-todo").type("Antra užduotis{enter}");
            cy.get("input.new-todo").type("Trecia užduotis{enter}");
    })
    cy.log('addToDoes komanda ivykdyta');
    
})
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })