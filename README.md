## 💳 VALIDACION TARJETA DE CREDITO ✅

# Descripcion del Proyecto:

En este proyecto queremos recargar nuestra tarjeta de credito con un monto de dinero especifico para acceder a un paquete de experiencias atravez del sitio Move Flow.

La validacion de una tarjeta de credito se realiza atravez del algoritmo de Lunh. El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc. 

# Tabla de Contenido

* 1 Demo
* 2 Caracteristicas
* 3 Proceso
* 4 Recursos Utiles

 ## 1. Demo

http://127.0.0.1:5500/index.html?monto=%24+10.000.000

## 2. Caracteristicas

* Se validan varios campos como Nombre, Numero de tarjeta, Fecha y Año de Expedicion
* Se da la funcionalidad para ocultar los dijitos de la tarjeta menos los ultimos cuatro
* Se visualizan los datos del formulario en simultaneo en los campos de la tarjeta.

## 3. Proceso

Construccion y Estructura:

* Fundamentos y modulos de JavaScript, incluyendo conceptos como variables, condicionales, funciones y métodos e iteración (bucles)
* Eventos y manipulación básica del DOM
* Fundamentos de HTML semántico
* Fundamentos de CSS
* Herramientas de mantenimiento y mejora del código (linters y
  pruebas unitarias)

Descripción de scripts / archivos

* `src/index.html`: contiene _markup_ (HTML) e incluye el CSS y JavaScript.
* `src/style.css`: contiene las reglas de estilo
* `src/validator.js`: contiene el objeto `validator`, con los métodos:
  - `validator.isValid(creditCardNumber)`: `creditCardNumber` es un `string`
     con el número de tarjeta que se va a verificar. Esta función retorna
     un `boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).
  - `validator.maskify(creditCardNumber)`: `creditCardNumber` es un `string` con
    el número de tarjeta y esta función retorna un `string` donde todos menos
    los últimos cuatro caracteres sean reemplazados por un numeral (`#`).
* `src/index.js`: eventos del DOM, invocacion
  `validator.isValid()` y `validator.maskify()` según sea necesario y
  actualizar el resultado en la UI (interfaz de usuario).
* `test/validator.spec.js`: este archivo contiene los tests para `validator.isValid()` y `validator.maskify()`.

## 4. Recursos Utiles

* https://regexr.com/
* https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics
* https://dev.to/vincenius/javascript-array-functions-cheatsheet-1c15
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
* https://www.maxcf.es/efectos-css-personalizar-divi/





