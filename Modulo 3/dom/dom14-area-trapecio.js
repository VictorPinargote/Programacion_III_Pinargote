const numero1 = document.getElementById('base');
const numero2 = document.getElementById('altura');
const botonSumar = document.getElementById('calcular-area');
const resultado = document.getElementById('area');

botonSumar.addEventListener('click',() => {
    const n1 = parseFloat(base.value);
    const n2 = parseFloat(altura.value);
    const area = (n1 * n2) / 2;
    resultado.textContent = `El área del triángulo es: ${area}`;
    
});