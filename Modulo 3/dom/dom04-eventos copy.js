//con alert se puede hacer alertas inline tambien sin js
const mostrarAlerta = () => {
  alert("Hola desde el botonsillo");
};

const AgregarProductos = () => {
  const lista = document.getElementById("lista-productos-1");
  const nuevoProducto = document.createElement("li");
  nuevoProducto.textContent = "Nuevo Producto";
  lista.appendChild(nuevoProducto);
};

document.getElementById("btn3").addEventListener("click", () => {
  const lista2 = document.getElementById("lista-productos2");
  const nuevoProducto = document.createElement("li");
  nuevoProducto.textContent = "Nuevo Producto";
  lista2.appendChild(nuevoProducto);
});

const cambiarParrafo = () => {
  const parrafo = document.getElementById("parrafo4");
  parrafo.textContent =
    "Hola, me llamo Jaime Antoniedo De Las Nieves, me gusta el pan";
};

document.getElementById("btn6").addEventListener("click", () => {
  const titulo2 = document.getElementById("h2sito");
  titulo2.textContent = "Hoy es Lunes";
});
