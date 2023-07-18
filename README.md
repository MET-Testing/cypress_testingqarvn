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
