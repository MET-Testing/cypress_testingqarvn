describe('T001-formSubmission', () => {

  it('Succesfull form submission', () => {
    //Visiting the page
    cy.visit('https://testingqarvn.com.es/combobox-dependiente/');

  //Completing form fields with real names and surnames
    //name
    cy.get('#wsf-1-field-54').type('Carola')
    //lastname
    cy.get('#wsf-1-field-55').type('pass1234')
 
    
  /*
    //Valid email input format'
    cy.get('input#wsf-1-field-56').type('carola@carola.com')
 */
 
    /*
  //'Matching placeholders with input labels'
    //name label '#wsf-1-field-54').should('have.attr', 'value placeholder')expect(attr).to.equal( 
      //cy.get('wsf-1-label-54')
      
      // use assertions to ensure the data attribute is set
      
        cy.get('#wsf-1-field-54').should('have.attr', 'placeholder', 'Nombre:')
    
    
    //surename label cy.get('#wsf-1-label-55')
    //email label cy.get('#wsf-1-label-56')
    //phone label cy.get('#wsf-1-label-57')
    //adress label cy.get('#wsf-1-label-58').should('have.attr', 'value placeholder')expect(attr).to.equal({ name: 'adress' })
*/


  //'Dynamic behavior of comboboxes'
    //SO
    cy.get('#wsf-1-field-61').select('Linux')
    //SO version
    cy.get('#wsf-1-field-64').should('have.value','Ubuntu').select('Ubuntu')
    //SO
    cy.get('#wsf-1-field-61').select('Windows')
    //SO version
    cy.get('#wsf-1-field-63').select('Windows 7').should('have.value','Windows 7').select('Windows 7')
    //SO
    cy.get('#wsf-1-field-61').select('Mac')
    //SO version
    cy.get('#wsf-1-field-65').select('Capitan').should('have.value','Capitan').select('Capitan')

  //'Valid Checkbox behavior'cy.get('wsf-1-field-wrapper-59').should('have.attr', 'multiple')
     //selecciono 3
    //opt3
  cy.get('[type="checkbox"]').check('PHP',{ force: true })
    //opt 2
    cy.get('[type="checkbox"]').check('PYTHON',{ force: true })
    //opt 1
    cy.get('[type="checkbox"]').check('JS',{ force: true })
    //verifico que esten checkeados
    //opt3
  cy.get('input#wsf-1-field-59-row-1').should('have.value','PHP').should('be.checked')
    //opt 2
    cy.get('input#wsf-1-field-59-row-2').should('have.value','PYTHON').should('be.checked')
    //opt 1
    cy.get('input#wsf-1-field-59-row-3').should('have.value','JS').should('be.checked')
  
  // 'Valid Radiobutton behavior' cy.get('wsf-1-field-wrapper-60').should('not.have.attr', 'multiple')
    //elijo 1 radio verifico que los demás no estén checkeados
    cy.get('[type="radio"]').check('CypressIO',{ force: true }).should('be.checked') 
    cy.get('input#wsf-1-field-60-row-2').should('not.be.checked')
    cy.get('input#wsf-1-field-60-row-3').should('not.be.checked')
    cy.get('[type="radio"]').check('WebdriverIO',{ force: true }).should('be.checked') 
    cy.get('input#wsf-1-field-60-row-1').should('not.be.checked')
    cy.get('input#wsf-1-field-60-row-3').should('not.be.checked') 
    cy.get('[type="radio"]').check('Selenium',{ force: true }).should('be.checked') 
    cy.get('input#wsf-1-field-60-row-1').should('not.be.checked')
    cy.get('input#wsf-1-field-60-row-2').should('not.be.checked')
  //o también:
    cy.get('#wsf-1-field-wrapper-60 input:checked')
    .should('have.length', 1)
    cy.get('#wsf-1-field-wrapper-60 input:not(:checked)').should('have.length', 2)

    


  //'Completing form fields with valid data'
    //phone number
    cy.get('#wsf-1-field-57').type('1231313213')
    //adress
    cy.get('#wsf-1-field-58').type('Los Andes 1430')
    
  //'Successful form submission message'
    //submit button click
    cy.get('#wsf-1-field-62').click()

    // green toast message
    cy.get('p').contains('Gracias por tu encuesta.')
    cy.get('.wsf-alert').should('have.css', 'background-color', 'rgb(213, 237, 218)')
  });

});
