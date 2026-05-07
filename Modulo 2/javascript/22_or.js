// Uso booleano clásico
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);  // false

// Cortocircuito — devuelve el primer valor truthy
console.log(1 || 2);          // 1     ← 1 es truthy, se detiene
console.log(0 || 2);          // 2     ← 0 es falsy, sigue; 2 es truthy
console.log(0 || "");         // ""    ← ambos falsy, devuelve el último
console.log("" || "default"); // "default" ← "" es falsy, devuelve "default"

// Uso práctico: valor por defecto (patrón clásico pre-ES2020)
const nombre = prompt("Tu nombre:") || "Invitado";
// Si prompt devuelve "" o null, nombre = "Invitado"

function saludar(nombre) {
  const n = nombre || "Invitado";
  console.log(`Hola, ${n}`);
}

saludar("Ana");    // Hola, Ana
saludar("");       // Hola, Invitado  (string vacío es falsy)
saludar(null);     // Hola, Invitado