// primera-clase.ts

class Persona {
  // Atributos
  nombre: string;
  edad:   number;

  // Constructor — se ejecuta al crear la persona con new
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad   = edad;
  }

  // Métodos
  saludareses(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }

  cumpliraAños(): void {
    this.edad++;
    console.log(`¡Feliz cumpleaños, ${this.nombre}! Ahora tienes ${this.edad}.`);
  }
}

// Crear instancias (objetos) con new
const analisa  = new Persona("Ana García", 28);
const luisa = new Persona("Luis Pérez", 31);

console.log(analisa.saludareses());
console.log(luisa.saludareses());
analisa.cumpliraAños();
console.log(analisa.saludareses());