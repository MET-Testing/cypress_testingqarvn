class FormElements {
  constructor() {
    this.emailInput = "input#wsf-1-field-56";
    this.nameInput = "#wsf-1-field-54";
    this.surnameInput = "#wsf-1-field-55";
    this.phoneInput = "#wsf-1-field-57";
    this.addressInput = "#wsf-1-field-58";
    this.oS = "#wsf-1-field-61";
    this.oSVersionUbuntu = "#wsf-1-field-64";
    this.oSVersionWindows7 = "#wsf-1-field-63";
    this.oSVersionCapitan = "#wsf-1-field-65";
    this.tool;
    this.chkBox1 = "input#wsf-1-field-59-row-1";
    this.chkBox2 = "input#wsf-1-field-59-row-2";
    this.chkBox3 = "input#wsf-1-field-59-row-3";
    this.radioBtn1 = "input#wsf-1-field-60-row-1";
    this.radioBtn2 = "input#wsf-1-field-60-row-2";
    this.radioBtn3 = "input#wsf-1-field-60-row-3";
    this.submitBtn = "#wsf-1-field-62";
    this.msgAlert = "p";
    this.alertMsgBgColor = ".wsf-alert";
  }

  fillForm(email, name, surname, phone, address) {
    cy.get(this.emailInput).type(email);
    cy.get(this.nameInput).type(name);
    cy.get(this.surnameInput).type(surname);
    cy.get(this.phoneInput).type(phone);
    cy.get(this.addressInput).type(address);
  }
}

export const formElements = new FormElements();
