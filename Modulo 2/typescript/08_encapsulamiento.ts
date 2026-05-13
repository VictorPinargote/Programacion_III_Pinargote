// encapsulamiento.ts

class Empleado {
  // Atributos privados — nadie los cambia directamente
  private _nombre:  string;
  private _salario: number;
  private _email:   string;

  constructor(nombre: string, salario: number, email: string) {
    this._nombre  = nombre;
    this._salario = salario;
    this._email   = email;
  }

  // Getters — permiten LEER el valor
  get nombre1():  string { return this._nombre; }
  get salario1(): number { return this._salario; }
  get email1():   string { return this._email; }

  // Setters — permiten ESCRIBIR con validación
  set nombre1(valor: string) {
    if (valor.trim().length < 2) {
      throw new Error("El nombre debe tener al menos 2 caracteres.");
    }
    this._nombre = valor.trim();
  }

  set salario1(valor: number) {
    if (valor < 0) {
      throw new Error("El salario no puede ser negativo.");
    }
    this._salario = valor;
  }

  set email1(valor: string) {
    if (!valor.includes("@")) {
      throw new Error("El email no es válido.");
    }
    this._email = valor.toLowerCase();
  }

  toString(): string {
    return `${this._nombre} — ${this._salario}€ — ${this._email}`;
  }
}

console.log("=== ENCAPSULAMIENTO ===\n");
const emp = new Empleado("Ana García", 2500, "Ana@Empresa.COM");
console.log(emp.toString());

// Usar los setters con validación
emp.salario1 = 3000;
emp.email1   = "ana@empresa.com";
console.log(`Nuevo salario: ${emp.salario1}€`);

// El setter valida los datos
try {
  emp.salario1 = -500;
} catch (e) {
  console.log(`Error al cambiar salario: ${(e as Error).message}`);
}

try {
  emp.email1 = "emailsinrobadillo";
} catch (e) {
  console.log(`Error al cambiar email: ${(e as Error).message}`);
}