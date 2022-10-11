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

console.log(btn);


function obtener_random (num_min, num_max){    
    const amplitud_valores = num_max - num_min; // valor mas alto - valor mas bajo del random, en este caso
    //11-0
    const valor_azar = Math.floor(Math.random() * amplitud_valores) + num_min; //variable que toma una de las palabras al azar.
    //El problema del random de js es
    //que genera valores aleatorios entre 0 y 1. Para solucionar esto multiplicamos
    //el random por la amplitud de valores que es la diferencia de valores entre
    //el numero mas alto y el mas bajo y esto lo tengo que redondear con el math.floor
  
    //el floor redondea para abajo, sino me saltaria un elemento 12 que no existe.
    
    return valor_azar;
}

function iniciar(event) {
  const cantidad_palabras = palabras.length; //variables que nos cuenta la cantidad de palabras del array
  const valor_masbajo = 0; //el indice mas bajo del array
  const valor_azar = obtener_random(valor_masbajo, cantidad_palabras);

  console.log(valor_azar);
}
