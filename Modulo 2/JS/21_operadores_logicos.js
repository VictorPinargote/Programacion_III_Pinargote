    // Valores FALSY — los únicos 6 que existen en JavaScript
    false
    0
    ""          // string vacío
    null
    undefined
    NaN

    // Todo lo demás es TRUTHY — incluyendo estos casos que sorprenden:
    "false"     // truthy — string no vacío (aunque diga "false")
    "0"         // truthy — string no vacío
    //[]          // truthy — array vacío
    {}          // truthy — objeto vacío
    -1          // truthy — número distinto de 0

    // Verificar con Boolean()
    console.log(Boolean(0));        // false
    console.log(Boolean(""));       // false
    console.log(Boolean("false"));  // true  ← ojo, string no vacío
    console.log(Boolean([]));       // true  ← array vacío es truthy



    // Uso booleano clásico
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);  // false

// Cortocircuito — devuelve el primer valor falsy o el último si todos son truthy
console.log(1 && 2);          // 2     ← ambos truthy, devuelve el último
console.log(0 && 2);          // 0     ← 0 es falsy, se detiene y devuelve 0
console.log("" && "hola");    // ""    ← "" es falsy, se detiene
console.log("a" && "b");      // "b"   ← ambos truthy, devuelve el último

// Uso práctico: ejecutar algo solo si una condición se cumple
const usuario = { nombre: "Ana", admin: true };

usuario.admin && console.log("Bienvenida, administradora");
// equivale a: if (usuario.admin) { console.log(...) }

// Acceso seguro a propiedades anidadas
const ciudad = usuario.direccion && usuario.direccion.ciudad;
// Si usuario.direccion no existe (falsy), ciudad = undefined (no lanza error)