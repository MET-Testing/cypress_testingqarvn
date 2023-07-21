import personalData from "../fixtures/C001-personalDataComboBox.json";
import { comboboxPage } from "../support/pages/C001-comboBox.page";

describe("Llenar formulario ComboBox", () => {
  // Ir a la web https://testingqarvn.com.es
  // Ingresar al menú “Prácticas QA”
  // Seleccionar “Combobox dependiente”
  // Completar todos los campos con datos válidos
  //    - email con formato @...com
  //    - nombre y apellido “reales”
  // Hacer click en el botón “submit”
  beforeEach(() => {
    // runs before every it() test block
    cy.visit("/combobox-dependiente/");
  });
  // -- Start: Cypress Tests --
  it("llenar el formulario exitosamente", () => {
    cy.get(comboboxPage.inputName).type(personalData.name);
    cy.get(comboboxPage.inputLastName).type(personalData.lastName);
    cy.get(comboboxPage.inputEmail).type(personalData.email);
    cy.get(comboboxPage.inputPhone).type(personalData.phone);
    cy.get(comboboxPage.direction).type(personalData.direccion);
    cy.get(comboboxPage.inputPHP).click();
    cy.get(comboboxPage.submitBtn).click();

    cy.get(comboboxPage.alertSucess)
      .should("be.visible", { timeout: 7000 })
      .invoke("text")
      .should("contain", "Gracias por tu encuesta.");
  });
});
