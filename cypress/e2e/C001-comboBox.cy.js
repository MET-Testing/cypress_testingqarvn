describe("This is your test project title", () => {
  before(() => {
    // runs once before all tests
    cy.visit(/combobox-dependiente/);
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
  context("This is your test suite title", () => {
    // -- Start: Cypress Tests --
    it("This is your test case one title", () => {
      // Write your test case one here
    });
    it("This is your test case two title", () => {
      // Write your test case two here
    });
  });
});
