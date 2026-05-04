// Sintaxis: function nombre(parámetros) { cuerpo }
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

console.log(saludar("Ana")); // "Hola, Ana!"
console.log(saludar("Luis")); // "Hola, Luis!"

//funcion flecha
//
const saludoFlecha = () => {
  console.log("Hola flecha");
};
saludoFlecha();

function saludo() {
  console.log("Hola");
}

const saludarExpresada = function () {
  console.log("Hola expresada");
};

//funcion anonima

setTimeout(function () {
  console.log("ejecutando");
}, 0);
