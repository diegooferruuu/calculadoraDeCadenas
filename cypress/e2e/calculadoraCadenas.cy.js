describe("Calculadora", () => {
    it("Shows 0", () => {
      cy.visit("/");
      cy.get("#cadena").type(" ");
      cy.get("#calcular-button").click();
      cy.get("#resultado-div").should("contain", "0");
    });
    it("Shows 2", () => {
        cy.visit("/");
        cy.get("#cadena").type("2");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "2");
      });
  });
  