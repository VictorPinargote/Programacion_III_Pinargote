// type-alias.ts

// Definir el alias
type Usuario = {
  nombre: string;
  edad:   number;
  email:  string;
};

// Ahora usas el nombre en todas partes
function mostrarUsuario(u: Usuario): void {
  console.log(`${u.nombre} (${u.edad} años) — ${u.email}`);
}

function validarUsuario(u: Usuario): boolean {
  return u.nombre.length > 0 && u.email.includes("@");
}

// Crear un objeto del tipo Usuario
const anal: Usuario = {
  nombre: "Ana García",
  edad:   28,
  email:  "ana@email.com"
};

mostrarUsuario(anal);
console.log(`¿Válido? ${validarUsuario(anal)}`);

// TypeScript verifica que el objeto tenga todos los campos
// const incompleto: Usuario = { nombre: "Luis" };  // ❌ falta edad y email

// tipos-alias.ts

// Alias de tipos primitivos — claridad semántica
type Nombre    = string;
type Precio    = number;
type Activo    = boolean;

// Alias para union types — uno de varios valores posibles
type Rol       = "admin" | "editor" | "lector";
type Estado    = "activo" | "inactivo" | "suspendido";
type Resultado = number | string | null;

// Alias para arrays
type ListaNombres = string[];
type ListaPrecios = number[];

// Usar los alias
const miNombre: Nombre  = "Ana";
const miRol:    Rol     = "admin";
// const malRol: Rol    = "superuser"; // ❌ no es uno de los valores permitidos

const estado: Estado = "activo";
console.log(`${miNombre} — rol: ${miRol} — estado: ${estado}`);

// Con union types TypeScript te avisa si usas un valor no permitido
function puedeEditar(rol: Rol): boolean {
  return rol === "admin" || rol === "editor";
}

console.log(puedeEditar("admin"));   // true
console.log(puedeEditar("lector"));  // false
// console.log(puedeEditar("dios")); // ❌ "dios" no es Rol

// interface-basica.ts

interface Producto {
  id:        number;
  nombre:    string;
  precio:    number;
  stock:     number;
  categoria: string;
}

// Uso exactamente igual que un type
function mostrarProducto(p: Producto): void {
  console.log(`[${p.id}] ${p.nombre} — ${p.precio}€ (stock: ${p.stock})`);
}

function hayStock(p: Producto): boolean {
  return p.stock > 0;
}

const laptop: Producto = {
  id:        1,
  nombre:    "Laptop Pro",
  precio:    999,
  stock:     5,
  categoria: "Electrónica"
};

mostrarProducto(laptop);
console.log(`¿Hay stock? ${hayStock(laptop)}`);

// propiedades-especiales.ts

interface Empleado {
  readonly id:   number;
  nombre2:       string;
  email2:        string;
  departamento:  string;
  telefonos:     string;
  salarios:      number;
}

const ani: Empleado = {
  id:          1,
  nombre2:      "Ana García",
  email2:       "ana@empresa.com",
  departamento:"Tecnología"
  // telefono y salario son opcionales — no hace falta incluirlos
};

const lui: Empleado = {
  id:          2,
  nombre2:      "Luis Pérez",
  email2:       "luis@empresa.com",
  departamento:"Ventas",
  telefonos:    "600111222",
  salarios:     2500
};

// ana.id = 99;  // ❌ Error — id es readonly

console.log(`${ani.nombre2} — tel: ${ani.telefonos ?? "no registrado"}`);
console.log(`${lui.nombre2} — tel: ${lui.telefonos ?? "no registrado"}`);

function mostrarSalario(e: Empleado): void {
  if (e.salarios !== undefined) {
    console.log(`${e.nombre2}: ${e.salarios}€/mes`);
  } else {
    console.log(`${e.nombre2}: salario no registrado`);
  }
}

mostrarSalario(ani);
mostrarSalario(lui);

// extender-interfaces.ts

interface Animal {
  nombre: string;
  edad:   number;
}

// Perro tiene todo lo de Animal + sus propias propiedades
interface Perro extends Animal {
  raza:     string;
  vacunado: boolean;
}

// GatoSiames tiene todo lo de Animal + sus propias
interface Gato extends Animal {
  color:      string;
  esInterior: boolean;
}

const rex: Perro = {
  nombre:   "Rex",
  edad:     3,
  raza:     "Labrador",
  vacunado: true
};

const misi: Gato = {
  nombre:     "Misi",
  edad:       5,
  color:      "gris",
  esInterior: true
};

function presentarAnimal(a: Animal): void {
  console.log(`${a.nombre} (${a.edad} años)`);
}

// Funciona con Perro y Gato porque ambos son Animal
presentarAnimal(rex);
presentarAnimal(misi);

function mostrarPerro(p: Perro): void {
  console.log(`${p.nombre} — ${p.raza} — vacunado: ${p.vacunado}`);
}

mostrarPerro(rex);
// mostrarPerro(misi);  // ❌ Error — Gato no tiene raza ni vacunado

