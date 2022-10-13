function id(str) {
  //funcion para crear los get.EelementById - dentro de parentesis recibe un string
  return document.getElementById(str);
}

function obtener_random(num_min, num_max) {
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
