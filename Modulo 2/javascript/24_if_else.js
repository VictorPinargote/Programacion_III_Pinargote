const horaActual = 14; // hora en formato 24h

if (horaActual < 12) {
  console.log("Buenos días. Turno de mañana activo.");
} else {
  console.log("Buenas tardes. Turno de tarde activo.");
}
// Buenas tardes. Turno de tarde activo.

const ingresoMensual = 800;
const deudaActual = 200;
const INGRESO_MINIMO = 600;
const RATIO_DEUDA_MAXIMO = 0.4; // la deuda no debe superar el 40% del ingreso

const ratioDeuda = deudaActual / ingresoMensual;
console.log('ratioDeuda', ratioDeuda)
if (ingresoMensual >= INGRESO_MINIMO && ratioDeuda <= RATIO_DEUDA_MAXIMO) {
  console.log("Crédito aprobado.");
  console.log(`Ratio deuda/ingreso: ${(ratioDeuda * 100).toFixed(1)}%`);
} else {
  console.log("Crédito denegado.");
  console.log(`Ingreso mínimo requerido: $${INGRESO_MINIMO}`);
  console.log(`Ratio deuda actual: ${(ratioDeuda * 100).toFixed(1)}% (máximo permitido: 40%)`);
}
// Crédito aprobado.
// Ratio deuda/ingreso: 25.0%

const contrasenaIngresada = "Segura123";
const contrasenaCorrecta  = "Segura123";
let intentosFallidos      = 0;
const MAX_INTENTOS        = 3;

if (contrasenaIngresada === contrasenaCorrecta) {
  console.log("Autenticación exitosa. Bienvenido.");
} else {
  intentosFallidos++;
  const intentosRestantes = MAX_INTENTOS - intentosFallidos;
  console.log(`Contraseña incorrecta. Intentos restantes: ${intentosRestantes}`);
}
// Autenticación exitosa. Bienvenido.


//pide la cantidad de productos comprados 
//si son 10 o mas muestra 'Descuento Aplicado' sino 'Sin descuento'
const cant_comprados = input("ingrese su cantidad")

if (cant_comprados >= 10){
    console.log('Descuento Aplicado')
} else {
    console.log('Sin descuento')
}

//solicita una contrasena 
// si es igual a '1234' muestra 'acceo permititdo sino acceso denegado
const contrasenita = input('ingresa contrasena')

if (contrasenita == '1234'){
    console.log('Acceso Permitido')
} else {
    console.log('acceso denegado')
}

