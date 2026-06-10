const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const botonSumar = document.getElementById('sumar');
const resultado = document.getElementById('resultado');

botonSumar.addEventListener('click',() => {
    const n1 = parseFloat(numero1.value);
    const n2 = parseFloat(numero2.value);
    const suma = n1+n2;
    resultado.textContent = `La suma es: ${suma}`;
    
});