let palabrita;
let cantidad_errores = 0; //cuantas veces me equivoque
let cantidad_aciertos = 0; //cuantas veces acerte
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

const imagen = id( 'imagen' );
const btn = document.getElementById("jugar");
btn.addEventListener("click", iniciar); //iniciar es la funcion que hacemos referencia abajo

function iniciar(event) {
  imagen.src = 'img/img0.jpg';
  btn.disabled = true; //el boton no se puede tocar de vuelta

  cantidad_errores = 0; //cuantas veces me equivoque
  cantidad_aciertos = 0; //cuantas veces acerte

  const parrafo = id("adivina_la_palabra");
  parrafo.innerHTML = ""; //me vacia los span para que no se acumulen cuando hago click

  const cantidad_palabras = palabras.length; // 1 - cuando aprete adivinar palabra va a sacar un valor al azar
  //variables que nos cuenta la cantidad de palabras del array

  const valor_azar = obtener_random(0, cantidad_palabras);

  palabrita = palabras[valor_azar]; // 2 va a buscar una palabrita al azar
  console.log(palabrita); //3 - me va a mostrar por consola la palabrita que tengo que adivinar
  const cant_letras = palabrita.length; //con el punto length me doy cuenta y creo la cantidad de caracteres de palabrita, osea
  // de los span de cada palabra.

  for (let i = 0; i < cant_letras; i++) {
    const span = document.createElement("span"); // 4 - creamos una etiqueta span vacia por cada letra que tenga la palabra
    parrafo.appendChild(span); //al parrafo le agregamos un span
  }
}

const btn_letras = document.querySelectorAll("#letras");

for (let i = 0; i < btn_letras.length; i++) {
  // funcion que recorre letra por letra
  btn_letras[i].addEventListener("click", clickear_letras);
}

function clickear_letras(event) {
  // el event lo necesito para saber que letra toque para llamar a la funcion
  const spans = document.querySelectorAll("#adivina_la_palabra span");
  const button = event.target;
  button.disabled = true; //una vez que toque la letra el boton de la letra se desabilita
  const letra = button.innerHTML.toLowerCase(); //va cambiando la letra entre span y span
  const palabra = palabrita.toLowerCase(); //me nivela las letras todas a minuscula

  //ahora vamos a recorrer todos los caracteres de la palabra para ver si existe la letra:

  let acerto = false; //asumimos que la letra elejida no existe

  //para saber si existe o no existe la letra en la palabra lo hacemos con un for para recorrer desde 0
  //hasta la cantidad de caracteres que tiene la palabra (para js cualquier cadena de caracteres es un array de caracteres)

  for (let i = 0; i < palabra.length; i++) {
    //la i del bucle for me va a servir para saber en que span tednria que mostrar
    //la letra en el caso de que existiera

    //ahora nos preguntamos si la letra que recivi existe en el caracter que estoy recorriendo la palabra
    if (letra == palabra[i]) {
      //la variables i es la posicion de la letra en la palabra que coincide con el span al que tenemos
      //que mostrarle esta letra
      spans[i].innerHTML = letra;
      cantidad_aciertos++;

      acerto = true;
    }
    if (acerto == false) {
      //si la variable acerto esta en falso quiere decir que la letra no existe
      cantidad_errores++; //entonces me suma un error por que no existe la letra
      const source = `img/img${cantidad_errores}.jpg`; //va a la carpeta de imagenes y busca la imagen
      // const imagen = id("imagen"); //buscame la foto
      imagen.src = source; //y cambiame el source
    }
  }

  console.log(
    "la letra " + letra + " en la palabra " + palabra + " existe?:" + acerto
  );
}
