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

  //   ## Validaciones
  // - que se muestre el mensaje luego de hacer submit: "Gracias por tu encuesta"
  // - que los placeholders coincidan con las labels de los campos
  // - que el segundo combobox cambie al variar el valor del primero
  // - que varios checkbox puedan estar seleccionados a la vez
  // - que varios radio button no puedan estar seleccionados a la vez

  Cypress.on("fail", (error, runnable) => {
    // Check if the shouldFail flag is set to false
    // If true, suppress the failure and allow the test execution to continue
    if (!Cypress.shouldFail) {
      return false;
    }
  });

  beforeEach(() => {
    // runs before every it() test block
    cy.visit("/combobox-dependiente/");
    Cypress.shouldFail = false;
  });

  afterEach(() => {
    // Reset the flag after each test
    Cypress.shouldFail = true;
  });
  // -- Start: Cypress Tests --

  it("validar que las labels coinciden con los placeholders", () => {
    comboboxPage.elements.forEach((element) => {
      comboboxPage.getTextLabel(element.label).then((textLabel) => {
        comboboxPage
          .getTextPlaceholderInput(element.input)
          .then((placeHolder) => {
            expect(textLabel).to.contain(placeHolder);
          });
      });
    });
  });

  it("llenar el formulario exitosamente", () => {
    comboboxPage.get.inputName().type(personalData.name);
    comboboxPage.get.inputLastName().type(personalData.lastName);
    comboboxPage.get.inputEmail().type(personalData.email);
    comboboxPage.get.inputPhone().type(personalData.phone);
    comboboxPage.get.direction().type(personalData.direccion);
    comboboxPage.get.inputPHP().click();
    comboboxPage.get.submitBtn().click();

    cy.get(comboboxPage.alertSucess)
      .should("be.visible", { timeout: 7000 })
      .invoke("text")
      .should("contain", "Gracias por tu encuesta.");
  });
});
