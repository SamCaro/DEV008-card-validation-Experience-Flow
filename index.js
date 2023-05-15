import validator from './validator.js';

const botonValidar = document.querySelector('#validar');

botonValidar.addEventListener('click', function (event) {
  //dejar de ejecutar el evento. bloquea el click, de lo contrario envia los datos y cambia la url
  event.preventDefault();

  document.getElementById("contenedor").style.display = 'block';

  //accedo al numero 
  const numero = document.getElementById('numeroTarjeta').value  
    .replace(/[^0-9]/g,'')
    //expresion regular Elimina espacios en blanco, busca y reemplaza por '' osea nada
    .replace(/\s/g, '')
    //Elimina las letras 
    .replace(/\D/g, '')
    //elimina el ultimo espacio
    .trim();

  document.getElementById('inicio').innerHTML = validator.isValid(numero);
  document.getElementById('maskify').innerHTML = validator.maskify(numero);
});

// muestrar los meses 
for (let i = 1; i <= 12; i++) {
  //createElement crea un elemento, el elemento es la etiqueta option de mi html
  const opciones = document.createElement('option');
  //accedo a option que se acaba de crear, le doy un valor value y un texto que es i
  opciones.value = i; //me muestra el valor que es 1 2 3 4 5 6 7 8 9 10 11 12 
  //innerText es el texto que va dentro de la opcion
  opciones.innerText = i;
  //para insertarla dentro del select, accedo al formulario y dentro de este accedo a selectMes
  //appendChild pone dentro del select la opcion que quiero
  selectMes.appendChild(opciones);
}

//mostrar ciclo de 8 años 
//obtengo el año actual, fecha . año completo el parentesis indica que es un metodo
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
  const opciones = document.createElement('option');
  opciones.value = i;
  opciones.innerText = i;
  selectYear.appendChild(opciones);
}

// mostar nombre 
//addEventListener es un metodo que detecta un evento y le proporciona o agrega una funcion
//keyup muestra la techa que se presiona
//formulario.inputNombre.addEventListener('keyup', function (event) {
//let valorInput = event.target.value;
//let nombreTarjeta = document.getElementById("nombre").textContent;
//tambien se puede expresar funcion tipo flecha 
inputNombre.addEventListener('keyup', (e) => {
  const valorInput = e.target.value; 
  //esta validacion me reemplaza los numeros que encuentra por nada 
  inputNombre.value = valorInput.replace(/[0-9]/g, '');
  //const que me permite acceder a al nombre de la tarjeta 
  const nombreTarjeta = document.querySelector('#tarjeta .nombre');
  // al escribir el nombre  en el formulario lo muestra en la tarjeta 
  nombreTarjeta.textContent = valorInput;
});

// mostar mes de expiracion 
// evento change  ejecuta el codigo cada vez que haya un cambio en select
selectMes.addEventListener('change', (e) => {
  const mesExpiracion = document.querySelector('#tarjeta .mes');
  // = acceder al valor del objetivo que recibio el evento es decir el select 
  mesExpiracion.textContent = e.target.value;
});

// mostrar año de expiracion
selectYear.addEventListener('change', (e) => {
  const yearExpiracion = document.querySelector('#tarjeta .year');
  yearExpiracion.textContent = e.target.value.slice(2);
});

// mostrar ccv
inputccv.addEventListener('keyup', (e) => {
  const ccv = document.querySelector('#tarjeta .ccv');
  // funcion para que se ejecute () =>
  inputccv.value = inputccv.value
  // Elimina espacios
    .replace(/\s/g, '')
    //Elimina letras 
    .replace(/\D/g, '');
  ccv.textContent = e.target.value;
});

//mostrar monto 
selectMonto.addEventListener('change', (e) => {
  const monto = document.querySelector('#tarjeta .monto');
  monto.textContent = e.target.value;
});








