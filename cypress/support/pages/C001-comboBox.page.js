class Combobox {
  constructor() {
    this.elements = [
      { label: "#wsf-1-label-54", input: "#wsf-1-field-54", name: "Nombre" },
      { label: "#wsf-1-label-55", input: "#wsf-1-field-55", name: "Apellido" },
      { label: "#wsf-1-label-56", input: "#wsf-1-field-56", name: "Email" },
      { label: "#wsf-1-label-57", input: "#wsf-1-field-57", name: "Telefono" },
      { label: "#wsf-1-label-58", input: "#wsf-1-field-58", name: "Direccion" },
    ];

    this.radioInputCypress = "#wsf-1-field-60-row-1";
    this.radioInutWebdriver = "#wsf-1-field-60-row-2";
    this.radioInutSelenium = "#wsf-1-field-60-row-3";

    this.alertSucess = ".wsf-alert-success";
  }

  get = {
    inputName: () => cy.get("#wsf-1-field-54"),
    inputLastName: () => cy.get("#wsf-1-field-55"),
    inputEmail: () => cy.get("#wsf-1-field-56"),
    inputPhone: () => cy.get("#wsf-1-field-57"),
    direction: () => cy.get("#wsf-1-field-58"),
    inputPHP: () => cy.get("#wsf-1-label-59-row-1"),
    inputPython: () => cy.get("#wsf-1-label-60-row-2"),
    submitBtn: () => cy.get("#wsf-1-field-62"),
    comboBoxOS: () => cy.get("#wsf-1-field-61"),
    comboBoxWindowsOptions: () => cy.get("#wsf-1-field-63"),
    comboBoxLinuxOptions: () => cy.get("#wsf-1-field-64"),
    comboBoxMacOptions: () => cy.get("#wsf-1-field-65"),
  };

  getTextLabel(element) {
    return cy.get(element).invoke("text");
  }

  getTextPlaceholderInput(element) {
    return cy.get(element).invoke("attr", "placeholder");
  }
}

export const comboboxPage = new Combobox();
