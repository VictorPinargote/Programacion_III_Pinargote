//funcion declarada
function saludo (){
    console.log("Hola, mundo!");
}

saludo(); // "Hola, mundo!"

//funcion expresada
const saludar_Hola = function(){
    console.log("Hola con funcion expresada");
}

saludar_Hola(); // "Hola con funcion expresada"

//funcion flecha
const saludar_Flecha = () => {
    console.log("Hola con funcion flecha");
}
saludar_Flecha(); // "Hola con funcion flecha"

//funcion anonima
setTimeout(function() {
    console.log("Ejecutando función anónima después de 1 segundos...");
}, 1000);

//funcion con parametros
function saludar_con_parametros(nombre) {
    console.log(`Hola, ${nombre}!`);
}
saludar_con_parametros("Fernandez"); // "Hola, Fernandez!"

///
/// Funciones flecha (Arrow Functions)
///

// Sintaxis completa
const sumar = (a, b) => {
  return a + b;
};

// Retorno implícito — cuando el cuerpo es una sola expresión
// se omiten las llaves y la palabra return
const sumarCorto = (a, b) => a + b;

// Un solo parámetro — se pueden omitir los paréntesis
const doblar = n => n * 2;

// Sin parámetros — los paréntesis son obligatorios
const saludarMundo = () => "Hola, mundo!";

console.log(sumar(3, 4));        // 7
console.log(sumarCorto(3, 4));   // 7
console.log(doblar(5));          // 10
console.log(saludarMundo());     // "Hola, mundo!"

//funcion fecha si es par o impar
const esParOImpar = (numero) => {
    if (numero % 2 === 0) {
        console.log(`${numero} es un número par.`);
    } else {
        console.log(`${numero} es un número impar.`);
    }
};

esParOImpar(4); // "4 es un número par."
esParOImpar(5); // "5 es un número impar."  

//
//Parametros por defecto
//

function saludar(nombre = "mundo", saludo = "Hola") {
  return `${saludo}, ${nombre}!`;
}

console.log(saludar());                     // "Hola, mundo!"
console.log(saludar("Ana"));               // "Hola, Ana!"
console.log(saludar("Ana", "Buenos días")); // "Buenos días, Ana!"

// También funciona con arrow functions
const potencia = (base, exponente = 2) => base ** exponente;

console.log(potencia(3));     // 9   (3²)
console.log(potencia(3, 3));  // 27  (3³)

//funcion para calcular el area de un triangulo con parametros por defecto
const areaTriangulo = (base = 1, altura = 1) => (base * altura) / 2;

console.log(areaTriangulo(5, 3)); // 7.5
console.log(areaTriangulo(5));    // 2.5
console.log(areaTriangulo());     // 0.5

//
//Parametros rest
//

// ...numeros captura todos los argumentos en un array
function sumarTodos(...numeros) {
  let total = 0;
  for (const n of numeros) {
    total += n;
  }
  return total;
}

console.log(sumarTodos(1, 2, 3));          // 6
console.log(sumarTodos(1, 2, 3, 4, 5));   // 15
console.log(sumarTodos());                 // 0

// Se puede combinar con parámetros normales
// el rest SIEMPRE debe ser el último parámetro
function registrar(categoria, ...mensajes) {
  for (const msg of mensajes) {
    console.log(`[${categoria}] ${msg}`);
  }
}

registrar("INFO", "Inicio", "Conexión OK", "Listo");
// [INFO] Inicio
// [INFO] Conexión OK
// [INFO] Listo

//ingreso e impresion de datos personales con parametro rest
function ingresarDatosPersonales(nombre, ...datos) {
  console.log(`Nombre: ${nombre}`);
  console.log("Datos adicionales:");
  for (const dato of datos) {
    console.log(`- ${dato}`);
  }
}

ingresarDatosPersonales("Fernandez", "25 años", "Ingeniero", "Madrid");
// Nombre: Fernandez
// Datos adicionales:
// - 25 años
// - Ingeniero
// - Madrid

const numeros = [3, 1, 4, 1, 5, 9, 2, 6];

// Sin spread — Math.max no acepta un array directamente
console.log(Math.max(numeros));       // NaN

// Con spread — expande el array en argumentos
console.log(Math.max(...numeros));    // 9
console.log(Math.min(...numeros));    // 1

// Combinar arrays
const primeros = [1, 2, 3];
const segundos = [4, 5, 6];
const todos    = [...primeros, ...segundos];
console.log(todos);   // [1, 2, 3, 4, 5, 6]

// Copiar un array (copia superficial)
const original = [1, 2, 3];
const copia    = [...original];
copia.push(4);
console.log(original);   // [1, 2, 3]  — no se modifica
console.log(copia);      // [1, 2, 3, 4]

// Spread con objetos
const base     = { nombre: "Ana", edad: 28 };
const ampliado = { ...base, ciudad: "Madrid" };
console.log(ampliado);   // { nombre: 'Ana', edad: 28, ciudad: 'Madrid' }

// Una función sin return devuelve undefined implícitamente
function sinReturn() {
  const x = 42;
  // no hay return
}
console.log(sinReturn());   // undefined

// return detiene la ejecución de la función
function esPar(n) {
  if (n % 2 === 0) {
    return true;    // sale aquí si n es par
  }
  return false;     // solo llega aquí si n es impar
}

// Forma más concisa — devolver la expresión directamente
const esParCorto = n => n % 2 === 0;

console.log(esPar(4));         // true
console.log(esParCorto(7));    // false

// operar recibe dos números y una función
function operar(a, b, operacion) {
  return operacion(a, b);
}

const sumar   = (a, b) => a + b;
const restar  = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

console.log(operar(10, 3, sumar));        // 13
console.log(operar(10, 3, restar));       // 7
console.log(operar(10, 3, multiplicar));  // 30

// Callback anónimo (arrow function inline)
console.log(operar(10, 3, (a, b) => a ** b));  // 1000