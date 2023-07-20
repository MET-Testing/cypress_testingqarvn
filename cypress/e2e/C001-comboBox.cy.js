describe("Llenar formulario ComboBox", () => {
  before(() => {
    // runs once before all tests
    cy.visit("/combobox-dependiente/");
    cy.get("#menu-item-178").next().trigger("mouseover");
    cy.get(".et-show-dropdown").should("be.visible", { timeout: 7000 });
    cy.wait(3000);
  });
  beforeEach(() => {
    // runs before every it() test block
  });
  afterEach(() => {
    // runs after every it() test block
  });
  after(() => {
    // runs once after all tests
  });
  // -- Start: Cypress Tests --
  it("llenar el formulario exitosamente", () => {
    // Write your test case one here
  });
});
