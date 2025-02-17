describe("To Do List James funkcionalumas", () => {
  context("Header", () => {
    //patikrinti ar <header> elementas atvaizduojamas.
    it("<header> elemento atvaizdavimas", () => {
      cy.visit("https://todolist.james.am/#/");
      cy.get("header").should("exist"); //patikrinama ar yra
      cy.get("header").should("be.visible"); //patikrinama ar atvaizduojamas
    });

    //patikrinti ar headeryje atvaizduojamas tekstas "To Do List"
    it('Teksto "To Do List" atvaizdavimas', () => {
      cy.visit("https://todolist.james.am/#/");
      cy.get("header").should("be.visible").contains("To Do List");

      //kiti kodo variantai
      cy.contains("header h1", "To Do List").should("be.visible");
      cy.get("header h1").should("have.text", "To Do List");
    });

    // patikrinti ar input laukelyje atvaizduojamas tekstas 'What need's to be done?' (pastaba: tekstas su klaida)
    it('Input tekstas "What needs to be done?"', () => {
      cy.visit("https://todolist.james.am/#/");
      cy.get("input.new-todo")
        .should("have.attr", "placeholder", "What need's to be done?")
        .should("be.visible");

      //kitas kodo variantas
      cy.get('input.new-todo[placeholder="What need\'s to be done?"]').should('exist');
    cy.get('input.new-todo[placeholder="What need\'s to be done?"]').should('be.visible');
    });

    //patikrinti ar pridėjus kelias užduotis, užduočių sąrašas nėra tuščias
    it("Netuščias užduočių sąrašas", () => {
      cy.visit("https://todolist.james.am/#/");
      cy.get("input.new-todo").type("Pirma užduotis{enter}");
      cy.get("input.new-todo").type("Antra užduotis{enter}");
      cy.get(".todo-list li").should("have.length.greaterThan", 0);

      //kito kodo variantai
      cy.get("ul.todo-list li").each(($el) => {
        cy.log($el);
      });

      cy.get("ul.todo-list li")
        .each(($el, $list) => {
          $el.dblclick();
        })
        .then(($list) => expect($list).to.have.length(2));

      cy.get("ul.todo-list li").should("have.length", 2);
    });

    it("Ar visi redaguojasi elementai?", () => {
      cy.visit("https://todolist.james.am/#/");
      cy.get("input.new-todo").type("1 uzduotis{enter}");
      cy.get("input.new-todo").type("trinama uzduotis{enter}");
      cy.get("input.new-todo").type("1 uzduotis{enter}");
      cy.get("input.new-todo").type("trinama uzduotis{enter}");
      cy.get("input.new-todo").type("1 uzduotis{enter}");
      cy.get("input.new-todo").type("trinama uzduotis{enter}");
      cy.get("ul.todo-list li").each(($el, $list) => {
        $el.dblclick();
      });
    });
  });

  context("Footer", () => {
    //patikrinti ar atvaizduojamas 'Double-click to edit a todo' tekstas (pastaba: tekstas su klaida)
    it('Teksto "Double-click to edit a todo" atvaizdavimas', () => {
      cy.visit("https://todolist.james.am/#/");
      cy.contains("Double-click to edit a toodo").should("be.visible");

      //kitas kodo variantas
      cy.contains("footer.info p", "Double-click to edit a toodo").should(
        "exist"
      );
      cy.contains("footer.info p", "Double-click to edit a toodo").should(
        "be.visible"
      );
    });
  });
});