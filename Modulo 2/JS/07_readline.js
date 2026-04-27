const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Escribe tu nombre: ", (nombre) => {
  console.log(`Hola, ${nombre}!`);
  rl.close();
});





const prompt = require("prompt-sync")();

const nombre = prompt("Escribe tu nombre: ");
console.log(`Hola, ${nombre}!`);

const edadTexto = prompt("Escribe tu edad: ");
const edad = parseInt(edadTexto, 10);

if (isNaN(edad)) {
  console.log("Eso no es un número válido.");
} else {
  console.log(`Tienes ${edad} años.`);
}