// JavaScript — acepta cualquier cosa sin avisar
function sumarNumber1(a: any, b?: any) {
  return a + b;
}

console.log(sumarNumber1(5, 3));       // 8  ✅
console.log(sumarNumber1("5", 3));     // "53"  😕 concatenó en lugar de sumar
console.log(sumarNumber1(5));          // NaN  😕 b es undefined

// solucion-con-tipos.ts

// TypeScript — avisa antes de ejecutar
function sumar(a: number, b: number): number {
  return a + b;
}

console.log(sumar(5, 3));     // 8  ✅
// sumar("5", 3)  → ❌ Error: 'string' no es 'number'
// sumar(5)       → ❌ Error: falta el argumento 'b'

/*
function nombre(parametro: tipo, parametro: tipo): tipoRetorno {
                ─────────────────────────────────  ──────────
                tipo de cada parámetro             tipo del valor que devuelve
}
                */

// funciones-basicas.ts

// Recibe dos números, devuelve número
function multiplicar(a: number, b: number): number {
  return a * b;
}

// Recibe un string, devuelve string
function saludar(nombre: string): string {
  return `Hola, ${nombre}!`;
}

// Recibe un número, devuelve boolean
function esPar(n: number): boolean {
  return n % 2 === 0;
}

// No devuelve nada — tipo void
function mostrar(mensaje: string): void {
  console.log(`[INFO] ${mensaje}`);
}

console.log(multiplicar(4, 7));    // 28
console.log(saludar("Ana"));       // Hola, Ana!
console.log(esPar(10));            // true
console.log(esPar(7));             // false
mostrar("Todo listo");             // [INFO] Todo listo

// funciones-con-if.ts

// Función que usa if/else para decidir qué devolver
function clasificarNota(nota: number): string {
  if (nota < 0 || nota > 10) {
    return "Nota fuera de rango";
  }

  if (nota >= 9) {
    return "Sobresaliente";
  } else if (nota >= 7) {
    return "Notable";
  } else if (nota >= 5) {
    return "Aprobado";
  } else {
    return "Suspenso";
  }
}

const notas: number[] = [10, 8.5, 6, 4.2, 11, -1];
for (const nota of notas) {
  console.log(`Nota ${nota}: ${clasificarNota(nota)}`);
}
// Nota 10:   Sobresaliente
// Nota 8.5:  Notable
// Nota 6:    Aprobado
// Nota 4.2:  Suspenso
// Nota 11:   Nota fuera de rango
// Nota -1:   Nota fuera de rango

// Función que valida datos con if y devuelve un mensaje
function validarPassword(password: string): string {
  if (password.length < 8) {
    return "❌ Muy corta (mínimo 8 caracteres)";
  }
  if (!/[A-Z]/.test(password)) {
    return "❌ Debe tener al menos una mayúscula";
  }
  if (!/[0-9]/.test(password)) {
    return "❌ Debe tener al menos un número";
  }
  return "✅ Contraseña válida";
}

const passwords: string[] = ["abc", "abcdefgh", "Abcdefgh", "Abcdefg1"];
for (const p of passwords) {
  console.log(`"${p}" → ${validarPassword(p)}`);
}

// parametros-opcionales.ts

// ? hace el parámetro opcional — dentro puede ser undefined
// Necesitas el if para manejarlo de forma segura
function presentar(nombre: string, edad?: number, ciudad?: string): string {
  let resultado = `Me llamo ${nombre}`;

  if (edad !== undefined) {
    resultado += ` y tengo ${edad} años`;
  }

  if (ciudad !== undefined) {
    resultado += `, vivo en ${ciudad}`;
  }

  resultado += ".";
  return resultado;
}

console.log(presentar("Ana"));
console.log(presentar("Ana", 28));
console.log(presentar("Ana", 28, "Madrid"));
// Me llamo Ana.
// Me llamo Ana y tengo 28 años.
// Me llamo Ana y tengo 28 años, vivo en Madrid.

// Función de búsqueda — retorna null si no encuentra
function buscarProducto(
  productos: string[],
  busqueda: string,
  exacto?: boolean
): string | null {
  for (const producto of productos) {
    if (exacto) {
      // Búsqueda exacta
      if (producto === busqueda) return producto;
    } else {
      // Búsqueda parcial (contiene el texto)
      if (producto.toLowerCase().includes(busqueda.toLowerCase())) {
        return producto;
      }
    }
  }
  return null;  // no encontró nada
}

const catalogo = ["Laptop Pro", "Teclado Mecánico", "Monitor 4K", "Ratón Inalámbrico"];

console.log(buscarProducto(catalogo, "laptop"));         // Laptop Pro
console.log(buscarProducto(catalogo, "laptop", true));   // null (exacto, no coincide)
console.log(buscarProducto(catalogo, "Teclado Mecánico", true)); // Teclado Mecánico
console.log(buscarProducto(catalogo, "tablet"));         // null

// parametros-por-defecto.ts

// Si no se pasa el argumento, usa el valor por defecto
// El tipo ya está garantizado — no necesitas verificar undefined
function calcularDescuento(
  precio: number,
  porcentaje: number = 10,
  aplicarIVA: boolean = true
): number {
  let precioFinal = precio * (1 - porcentaje / 100);

  if (aplicarIVA) {
    precioFinal *= 1.21;
  }

  return precioFinal;
}

const precio = 100;
console.log(calcularDescuento(precio));               // 108.9  (10% desc + IVA)
console.log(calcularDescuento(precio, 20));           // 96.8   (20% desc + IVA)
console.log(calcularDescuento(precio, 20, false));    // 80     (20% desc, sin IVA)

// Función con bucle y valor por defecto
function repetirMensaje(mensaje: string, veces: number = 3): void {
  for (let i = 1; i <= veces; i++) {
    console.log(`[${i}/${veces}] ${mensaje}`);
  }
}

repetirMensaje("Hola");           // lo repite 3 veces
repetirMensaje("Urgente", 5);     // lo repite 5 vecesç

// arrow-con-flujo.ts

// Arrow function corta — una expresión, sin llaves
const esMayorDeEdad = (edad: number): boolean => edad >= 18;
const cuadrado      = (n: number): number => n ** 2;
const saludaras      = (nombre: string): string => `Hola, ${nombre}!`;

// Arrow function con cuerpo — cuando necesita más de una instrucción
const clasificar = (n: number): string => {
  if (n > 0) return "positivo";
  if (n < 0) return "negativo";
  return "cero";
};

console.log(esMayorDeEdad(20));     // true
console.log(esMayorDeEdad(15));     // false
console.log(clasificar(5));         // positivo
console.log(clasificar(-3));        // negativo
console.log(clasificar(0));         // cero

// Arrow functions como callbacks con map, filter, reduce
const edades: number[] = [15, 22, 17, 31, 14, 28, 19];

// filter + arrow: solo los mayores de edad
const adultos = edades.filter((edad: number): boolean => edad >= 18);
console.log(`Adultos: [${adultos}]`);              // [22, 31, 28, 19]

// map + arrow: convertir cada edad a una categoría
const categorias = edades.map((edad: number): string => {
  if (edad < 18) return "menor";
  if (edad < 65) return "adulto";
  return "senior";
});
console.log(`Categorías: [${categorias}]`);
// [menor, adulto, menor, adulto, menor, adulto, adulto]

// reduce + arrow: sumar solo los adultos
const sumaAdultos = edades.reduce(
  (acc: number, edad: number): number => (edad >= 18 ? acc + edad : acc),
  0
);
console.log(`Suma edades adultos: ${sumaAdultos}`);   // 100

// funciones-retornan-funciones.ts

// Una función que devuelve una función — útil para crear validadores
function crearValidadorRango(min: number, max: number): (n: number) => boolean {
  // La función interna usa min y max del scope exterior
  return function(n: number): boolean {
    return n >= min && n <= max;
  };
}

const esTemperaturaNormal = crearValidadorRango(36.1, 37.2);
const esEdadLaboral       = crearValidadorRango(18, 65);
const esNotaAprobada      = crearValidadorRango(5, 10);

const temperaturas = [35.8, 36.5, 37.0, 38.2];
for (const t of temperaturas) {
  const estado = esTemperaturaNormal(t) ? "Normal" : "Anormal";
  console.log(`${t}°C → ${estado}`);
}

console.log(`\n¿Edad 25 es laboral?  ${esEdadLaboral(25)}`);   // true
console.log(`¿Edad 70 es laboral?  ${esEdadLaboral(70)}`);   // false
console.log(`¿Nota 4.9 aprobada?   ${esNotaAprobada(4.9)}`); // false
console.log(`¿Nota 5.0 aprobada?   ${esNotaAprobada(5.0)}`); // true

