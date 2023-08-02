# cypress_testingqarvn

Web de pruebas para practicar Cypress con Javacript

# Cómo empezar?

0. **Ten instalado node**<br>
   Para chequear si lo tienes instalado:

```
 npm -v
```

\*Version recomendada 16.14.2 o mayores a esta.<br>
En caso de no tenerlo instalalo: [descargalo desde el sitio oficial de node](https://nodejs.org/es)

1. **Clona el repositorio**:

#### Https:

     ```
    git clone https://github.com/metlabtesting/cypress_testingqarvn.git
    ```

#### Ssh:

    ```
    git clone git@github.com:metlabtesting/cypress_testingqarvn.git
    ```

2. **Muevete al directorio** donde hayas clonado el repo.
   En tu terminal deberias estar dentro de
   `/cypress_testingqarvn`

3. **Instala las dependencias**: (solo la primera vez)

```
npm i
```

4. **Ejecuta Cypress**

```
npx cypress open
```

5. **Configura Cypress**
   Inmediatamente despues de ejecutar el comando se abrira una interfaz, donde debes colocar: <br>`E2E Testing > Elegir un navegador > click en "Start E2E Testing in <navegador seleccionado>" > Dentro de cypress/e2e selecciona un test`

6. **Crea tu rama** y empieza a codear! 🚀✨✨

# Criterios para hacer una PR

1. Perfecta nomenclatura del nombre de Archivo de prueba: <br>
   `{ID}-{ShortName}.{extensionFile} ej: T001-camposRequeridos.cy.js`
2. Archivo de Prueba dentro del directorio del Componente correspondiente:<br>
   ``
3. Que se vea bien el codigo en general, que funcione.
4. Usar Fixtures en caso que haya datos para iterar.
5. Usar PageObjectModel: Chequear que el "Page.js" esté dentro de la carpeta "pages" en la de "support", ejemplo: <br>
   `cypress/support/pages/T001.camposRequeridos.Page.js`.
6. En caso de usar Commands: Asegurarse de aplicarlo para crear pasos de Precondiciones o Scripts de Algoritmos globales. (No para pasos de accion)

# Menciones

Autor de la web: [ Rodrigo Igor Villanueva Nieto](https://testingqarvn.com.es/sobre-mi/)



# Gherkin by Caro
Feature: Form Submission
  
 #  Scenario: Completing form fields with real names and surnames
    Given a user is accessing the form
    When the user completes all fields with real names and surnames
    Then the form submission should be successful
    
 #  Scenario: Valid email input format
    Given a user is accessing the form
    When the user submits the form with a valid email address
    Then the form submission should be successful
       
 #  Scenario: Matching placeholders with input labels
    Given a user is accessing the form
    Then each input field's placeholder should match its corresponding label
    
 #  Scenario: Dynamic behavior of comboboxes
    Given a user is accessing the form
    When the user selects an option in the first combobox
    Then the options in the second combobox should update accordingly
   Examples:
      | Windows  |
         | Windows 7 |
         | Windows 10 |
         | Windows Server |
      |   Linux  |
         |   Ubuntu  |
         |   Debian  |
         |   Read Hat  |
      |   Mac  |
         |   Capitan  |
         |   Yosemite  |
         |   Mavericks  |

    
 #  Scenario Outline: Checkbox behavior
    Given a user is accessing the form
    When the user selects <number> checkboxes
    Then the selected checkboxes should be successfully chosen
    
    Examples:
      | PHP  |
      |   PYTHON  |
      |   JS  |
    
 #  Scenario Outline: Radiobutton behavior
    Given a user is accessing the form
    When the user selects <number> radiobuttons
    Then only one radiobutton should be successfully chosen
    
    Examples:
      | CypressIO |
      |   WebdriverIO  |
      |   Selenium  |
    
 

 #  Scenario: Completing form fields with valid data
    Given a user is accessing the form
    When the user completes all fields with valid data
    And clicks the submit button
    Then the form submission should be successful

 #  Scenario: Successful form submission
    Given a user is accessing the form
    When the user completes all fields with valid data
    And clicks the submit button
    Then a green toast with the message "Gracias por tu encuesta" should appear
