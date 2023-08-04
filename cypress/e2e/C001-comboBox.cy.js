import personalData from "../fixtures/C001-personalDataComboBox.json";
import { comboboxPage } from "../support/pages/C001-comboBox.page";
import comboboxData from "../fixtures/C001-comboboxesData.json";

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

  it("cambiar combobox", () => {
    comboboxData.forEach(({ so, options }) => {
      comboboxPage.get.comboBoxOS().select(so).should("have.value", so);

      options.forEach((option) => {
        if (so == "Windows") {
          comboboxPage.get.comboBoxWindowsOptions().should("contain", option);
        } else if (so == "Linux") {
          comboboxPage.get.comboBoxLinuxOptions().should("contain", option);
        } else if (so == "Mac") {
          comboboxPage.get.comboBoxMacOptions().should("contain", option);
        }
      });
    });
  });

  it("seleccion de multiples checkbox a la vez", () => {
    // Otros posibles escenarios
    // Seleccionar 1 checkbox random
    // Seleccionar 2 checkbox random

    // Seleccionar todos los checkbox
    cy.get(`input[type = "checkbox"]`)

      .siblings("label")
      .click({ multiple: true });

    cy.get("input[type='checkbox']").should("be.checked");
  });

  it("que varios radio button no puedan estar seleccionados a la vez", () => {
    const radioValues = ["CypressIO", "WebdriverIO", "Selenium"];

    radioValues.forEach((value) => {
      cy.get('[type="radio"]').check(value, { force: true });
      cy.get(`[type="radio"][value="${value}"]`)
        .should("have.value", value)
        .should("be.checked");

      cy.get('[type="radio"]').not(`[value=${value}]`).should("not.be.checked");
    });
  });
});
