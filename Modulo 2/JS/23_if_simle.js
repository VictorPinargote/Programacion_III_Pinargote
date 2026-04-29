const totalCompra = 150;
const MINIMO_DESCUENTO = 100;
const PORCENTAJE_DESCUENTO = 0.10;

let totalFinal = totalCompra;

if (totalCompra >= MINIMO_DESCUENTO) {
  const descuento = totalCompra * PORCENTAJE_DESCUENTO;
  totalFinal = totalCompra - descuento;
  console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
}

console.log(`Total a pagar: $${totalFinal.toFixed(2)}`);
// Descuento aplicado: $15.00
// Total a pagar: $135.00

const stockDisponible = 3;
const UMBRAL_STOCK_BAJO = 5;

if (stockDisponible <= UMBRAL_STOCK_BAJO) {
  console.log(`⚠️ Stock bajo: quedan ${stockDisponible} unidades. Reabastecer pronto.`);
}

const edadUsuario = 17;
const EDAD_MINIMA = 18;

if (edadUsuario < EDAD_MINIMA) {
  console.log("Acceso denegado: debes ser mayor de edad para registrarte.");
}

console.log("Registro finalizado.");
// Acceso denegado: debes ser mayor de edad para registrarte.
// Registro finalizado.

//solicita el monto de una compra (si el monto es myor a 100, muestra "aplica descuento")
const monto = input("Ingrese el monto")
if (monto > 100) {
    console.log('si aplica descuento')
}

// pide la velocidad de un vehiculo (si supera los 90km/h muestra "exceso de velocidad")
const velocidad = input("ingresa tu veocidad")
if (velocidad > 90){
    console.log('exceso de velocidad')
}