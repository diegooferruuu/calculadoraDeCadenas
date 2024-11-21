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
      it("Shows 15", () => {
        cy.visit("/");
        cy.get("#cadena").type("1,2,4,8");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "15");
      });
      it("Shows 6", () => {
        cy.visit("/");
        cy.get("#cadena").type("1-2,3");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "6");
      });
      it("Shows 17", () => {
        cy.visit("/");
        cy.get("#cadena").type("//[;] 6;7;4");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "17");
      });
      it("Shows 12", () => {
        cy.visit("/");
        cy.get("#cadena").type("//[;] 6,3-2;1");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "12");
      });
      it("Shows 2", () => {
        cy.visit("/");
        cy.get("#cadena").type("1001,2");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "2");
      });
      it("Shows 22", () => {
        cy.visit("/");
        cy.get("#cadena").type("//[*][%] 1*2%3,7-9");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "22");
      });
      it("Shows 25", () => {
        cy.visit("/");
        cy.get("#cadena").type("//[*][%][+] 1*2%3,7-9+3,1001");
        cy.get("#calcular-button").click();
        cy.get("#resultado-div").should("contain", "25");
      });
  });
  