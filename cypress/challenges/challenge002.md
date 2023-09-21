# Consideraciones generales

- Se propone 1 ejercicio de automatización sobre web
- Se deberá escribir con anticipacion los escenarios de pruebas.
- Se podrá utilizar cualquier lenguaje de programación. (Deseable pero no excluyente: (Python,
  JavaScript o Java).
- El código debe ser distribuible e implementado mediante algún gestor de dependencias tales como
  Maven, Graddle, npm, PyPI o similar.
- Se debe realizar una PR para la aprobación de la automatización

# Ejercicio

- Ir a la web https://testingqarvn.com.es/calendarios/
- Ingresar datos Nombre, Apellido, Email, Direccion, Lenguaje, Radio con datos
  validos y realistas.
- Seleccionar en “eventos” un Mes y Fecha de manera aleatoria
- En calendario seleccionar 22 de Agosto
- Hacer click en el botón “submit”

## Validar

- que se muestre el mensaje luego de hacer submit: "Gracias por tu encuesta"
- que la fecha tanto en eventos como en calendario sea la fecha actual (current
  date)
- el color detrás del dia a seleccionar sea azul #205493
