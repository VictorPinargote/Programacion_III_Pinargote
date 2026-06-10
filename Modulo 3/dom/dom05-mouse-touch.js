const caja = document.getElementById('caja');

caja.addEventListener('mouseover', () => {
    caja.style.backgroundColor = 'yellow';
});

caja.addEventListener('mouseout', () => {
    caja.style.backgroundColor = 'lightgray';
});

caja.addEventListener('click', () => {
    alert('¡Has hecho clic en la caja!');
});

const area = document.getElementById('areaTouch');

area.addEventListener('touchstart', () => {
    area.style.backgroundColor = 'green';
});

area.addEventListener('touchend', () => {
    area.style.backgroundColor = 'blue';
});

// Segundo ejemplo: Círculo arrastrable y cambio de color

const circulo = document.getElementById('circulo');

let colores = ['red', 'green', 'blue', 'orange', 'purple', 'pink'];
let colorActual = 0;
let arrastrando = false;

function cambiarColor() {
    colorActual = (colorActual + 1) % colores.length;
    circulo.style.background = colores[colorActual];
}

function moverCirculo(x, y) {

    const container = document.getElementById('container');

    const containerRect = container.getBoundingClientRect();
    const circuloRect = circulo.getBoundingClientRect();

    const mitadAncho = circuloRect.width / 2;
    const mitadAlto = circuloRect.height / 2;

    const offsetTop = containerRect.top + window.scrollY;
    const offsetLeft = containerRect.left + window.scrollX;

    circulo.style.left =
        (x - offsetLeft - mitadAncho) + 'px';

    circulo.style.top =
        (y - offsetTop - mitadAlto) + 'px';
}

// Touch Events

circulo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    cambiarColor();
    arrastrando = true;
});

document.addEventListener('touchmove', (e) => {

    if (!arrastrando) return;

    const touch = e.touches[0];

    moverCirculo(
        touch.pageX,
        touch.pageY
    );
});

document.addEventListener('touchend', () => {
    arrastrando = false;
});

// Mouse Events

circulo.addEventListener('mousedown', (e) => {
    e.preventDefault();
    cambiarColor();
    arrastrando = true;
});

document.addEventListener('mousemove', (e) => {

    if (!arrastrando) return;

    moverCirculo(
        e.clientX,
        e.clientY
    );
});

document.addEventListener('mouseup', () => {
    arrastrando = false;
});

// Cuarto ejemplo: Botón que crece con eventos

const boton = document.getElementById('botonAnimado');

function agrandar() {
    boton.style.transform = 'scale(1.5)';
}

function normalizar() {
    boton.style.transform = 'scale(1)';
}

boton.addEventListener('mouseover', agrandar);
boton.addEventListener('mouseout', normalizar);

boton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    agrandar();
});

boton.addEventListener('touchend', normalizar);

// Espiral que gira

const espiral = document.getElementById('espiral');

let rotacion = 0;
let arrastrandoEspiral = false;
let intervaloGiro = null;

function girar(xInicial, xActual) {

    const diferencia = xActual - xInicial;

    rotacion += diferencia * 0.5;

    espiral.style.transform =
        `rotate(${rotacion}deg)`;
}

let xInicioTouch = 0;

espiral.addEventListener('touchstart', (e) => {

    e.preventDefault();

    const touch = e.touches[0];

    xInicioTouch = touch.pageX;

    arrastrandoEspiral = true;

    if (intervaloGiro) {
        clearTimeout(intervaloGiro);
    }

    intervaloGiro = setTimeout(() => {
        arrastrandoEspiral = false;
    }, 6000);
});

document.addEventListener('touchmove', (e) => {

    if (!arrastrandoEspiral) return;

    const touch = e.touches[0];

    girar(
        xInicioTouch,
        touch.pageX
    );

    xInicioTouch = touch.pageX;
});

document.addEventListener('touchend', () => {
    arrastrandoEspiral = false;
});

// Triángulo escalable

const triangulo = document.getElementById('triangulo');

let isDragging = false;
let startX = 0;
let scaleValue = 1;

function updateScale(newX) {

    const diffX = newX - startX;

    scaleValue += diffX * 0.005;

    scaleValue = Math.max(
        0.5,
        Math.min(2, scaleValue)
    );

    triangulo.style.transform =
        `scale(${scaleValue})`;

    startX = newX;
}

triangulo.addEventListener('mousedown', (e) => {

    e.preventDefault();

    isDragging = true;

    startX = e.clientX;
});

document.addEventListener('mousemove', (e) => {

    if (!isDragging) return;

    updateScale(e.clientX);
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

triangulo.addEventListener('touchstart', (e) => {

    e.preventDefault();

    isDragging = true;

    startX = e.touches[0].clientX;
});

document.addEventListener('touchmove', (e) => {

    if (!isDragging) return;

    updateScale(
        e.touches[0].clientX
    );
});

document.addEventListener('touchend', () => {
    isDragging = false;
});