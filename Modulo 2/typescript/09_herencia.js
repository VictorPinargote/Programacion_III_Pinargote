"use strict";
// herencia.ts
// Clase padre
class Animal {
    nombre3;
    edad3;
    constructor(nombre3, edad3) {
        this.nombre3 = nombre3;
        this.edad3 = edad3;
    }
    // Método heredado por todos los hijos
    comer() {
        console.log(`  ${this.nombre3} está comiendo.`);
    }
    dormir() {
        console.log(`  ${this.nombre3} está durmiendo.`);
    }
    toString() {
        return `${this.nombre3} (${this.edad3} años)`;
    }
}
// Clase hija — hereda de Animal
class Perro extends Animal {
    razas;
    constructor(nombre3, edad3, raza1) {
        super(nombre3, edad3); // ← llama al constructor del padre — OBLIGATORIO
        this.razas = raza1;
    }
    // Método propio — solo existe en Perro
    ladrar() {
        console.log(`  ${this.nombre3}: ¡Guau! ¡Guau!`);
    }
    toString() {
        return `${super.toString()} — ${this.razas}`; // reutiliza el toString del padre
    }
}
class Gato extends Animal {
    esCallejero;
    constructor(nombre, edad, esCallejero) {
        super(nombre, edad);
        this.esCallejero = esCallejero;
    }
    ronronear() {
        console.log(`  ${this.nombre3}: Prrrrr...`);
    }
    toString() {
        return `${super.toString()} — ${this.esCallejero ? "callejero" : "doméstico"}`;
    }
}
console.log("=== HERENCIA ===\n");
const rexi = new Perro("Rex", 3, "Labrador");
const misio = new Gato("Misi", 5, false);
// Métodos heredados del padre
rexi.comer();
misio.comer();
rexi.dormir();
// Métodos propios de cada hijo
rexi.ladrar();
misio.ronronear();
console.log(`\nRex:  ${rexi.toString()}`);
console.log(`Misi: ${misio.toString()}`);
// instanceof — comprobar si un objeto pertenece a una clase
console.log(`\n¿Rex es Perro?  ${rexi instanceof Perro}`); // true
console.log(`¿Rex es Animal? ${rexi instanceof Animal}`); // true — hereda
console.log(`¿Rex es Gato?   ${rexi instanceof Gato}`); // false
