let palabrita;
const palabras = [
  //indices del array:
  "naranja", //0
  "frutilla", //1
  "automovil", //2
  "computadora", //3
  "saturno", //4
  "tunel", //5
  "farmacia", //6
  "vacaciones", //7
  "juguetes", //8
  "invierno", //9
  "cocina", //10
  "aviones", //11
];

const btn = document.getElementById("jugar");
btn.addEventListener("click", iniciar); //iniciar es la funcion que hacemos referencia abajo

function iniciar(event) {
  btn.disabled = true; //el boton no se puede tocar de vuelta

  const parrafo = id('adivina_la_palabra');
  parrafo.innerHTML = ''; //me vacia los span para que no se acumulen cuando hago click

  const cantidad_palabras = palabras.length; // 1 - cuando aprete adivinar palabra va a sacar un valor al azar
                                            //variables que nos cuenta la cantidad de palabras del array  

  const valor_azar = obtener_random(0, cantidad_palabras);

  palabrita = palabras [valor_azar]; // 2 va a buscar una palabrita al azar
  console.log(palabrita); //3 - me va a mostrar por consola la palabrita que tengo que adivinar
  const cant_letras = palabrita.length;//con el punto length me doy cuenta y creo la cantidad de caracteres de palabrita, osea 
  // de los span de cada palabra.

  for(let i = 0; i < cant_letras; i++){
    const span = document.createElement('span'); // 4 - creamos una etiqueta span vacia por cada letra que tenga la palabra
    parrafo.appendChild(span); //al parrafo le agregamos un span
  }
  
}

const btn_letras = document.querySelectorAll('#letras');

for(let i = 0; i < btn_letras.length; i++){ // funcion que recorre letra por letra
  btn_letras [i].addEventListener('click', clickear_letras);
}

function clickear_letras(event){// el event lo necesito para saber que letra toque para llamar a la funcion
  const button = event.target
  button.disabled = true; //una vez que toque la letra el boton de la letra se desabilita
  console.log(palabrita);
}