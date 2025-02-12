describe('To Do List James funkcionalumas', () => {

  context ('Header', () => {

      //patikrinti ar <header> elementas atvaizduojamas.
      it('<header> elemento atvaizdavimas', () => {
        cy.visit('https://todolist.james.am/#/')
        cy.get('header').should('be.visible')
      })

      //patikrinti ar headeryje atvaizduojamas tekstas "To Do List"
      it('Teksto "To Do List" atvaizdavimas', () => {
        cy.visit('https://todolist.james.am/#/')
        cy.get('header').should('be.visible').contains('To Do List')
      })

      // patikrinti ar input laukelyje atvaizduojamas tekstas 'What need's to be done?' (pastaba: tekstas su klaida)
      it('input tekstas "What needs to be done?"', () => {
        cy.visit('https://todolist.james.am/#/')
        cy.get('input').should('have.attr', 'placeholder', "What need's to be done?")
      })

      //patikrinti ar pridėjus kelias užduotis, užduočių sąrašas nėra tuščias
      it('Netuščias užduočių sąrašas', () => {
        cy.visit('https://todolist.james.am/#/')
        cy.get('input.new-todo').type('Pirma užduotis{enter}')
        cy.get('input.new-todo').type('Antra užduotis{enter}')
        cy.get('.todo-list li').should('have.length.greaterThan', 0)
      })
  });






  context ('Footer', () => {

    //patikrinti ar atvaizduojamas 'Double-click to edit a todo' tekstas (pastaba: tekstas su klaida)
    it('Teksto "Double-click to edit a todo" atvaizdavimas', () => {
      cy.visit('https://todolist.james.am/#/')
      cy.contains('Double-click to edit a toodo').should('be.visible')
  })
});

})
