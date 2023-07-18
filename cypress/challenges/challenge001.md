# Consideraciones generales

- Se propone 1 ejercicio de automatización sobre web
- Se deberá escribir en gherkin la especificación de escenarios de pruebas.
- Se podrá utilizar cualquier lenguaje de programación. (Deseable pero no excluyente: (Python,
  JavaScript o Java).
- El código debe ser distribuible e implementado mediante algún gestor de dependencias tales como
  Maven, Graddle, npm, PyPI o similar.
- Se debe realizar una PR para la aprobación de la automatización

# Ejercicio

1. Ir a la web https://testingqarvn.com.es
2. Ingresar al menú “Prácticas QA”
3. Seleccionar “Combobox dependiente”
4. Completar todos los campos con datos válidos
   - email con formato @...com
   - nombre y apellido “reales”
5. Hacer click en el botón “submit”

## Validaciones

- que se muestre el mensaje luego de hacer submit: "Gracias por tu encuesta"
- que los placeholders coincidan con las labels de los campos
- que el segundo combobox cambie al variar el valor del primero
- que varios checkbox puedan estar seleccionados a la vez
- que varios radio button no puedan estar seleccionados a la vez
