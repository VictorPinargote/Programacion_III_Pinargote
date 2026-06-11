let empleados = [
    {
        id: 1,
        nombre: "Joel",
        apellido: "Pinargote",
        sueldo: 800.00
    }
];

function renderEmpleados() {
    const cuerpoTabla = document.getElementById('cuerpoTabla');
    cuerpoTabla.innerHTML = '';
    
    empleados.forEach((emp, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${emp.nombre}</td>
            <td>${emp.apellido}</td>
            <td>$${emp.sueldo.toFixed(2)}</td>
        `;
        cuerpoTabla.appendChild(fila);
    });
    
    actualizarPromedio();
}

function agregarEmpleado() {
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const sueldoInput = document.getElementById('sueldo');
    
    const nombre = nombreInput.value.trim();
    const apellido = apellidoInput.value.trim();
    const sueldoStr = sueldoInput.value.trim();
    const sueldo = parseFloat(sueldoStr);
    
    // Validaciones
    if (!nombre || !apellido || !sueldoStr) {
        alert('Por favor, complete todos los campos.');
        return;
    }
    
    if (isNaN(sueldo) || sueldo <= 0) {
        alert('El sueldo debe ser un número mayor a cero.');
        return;
    }
    
    // Crear objeto
    const nuevoEmpleado = {
        id: empleados.length > 0 ? Math.max(...empleados.map(e => e.id)) + 1 : 1,
        nombre: nombre,
        apellido: apellido,
        sueldo: sueldo
    };
    
    // Guardar y actualizar
    empleados.push(nuevoEmpleado);
    renderEmpleados();
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('sueldo').value = '';
}

function actualizarPromedio() {
    const displayPromedio = document.getElementById('promedioSueldo');
    
    if (empleados.length === 0) {
        displayPromedio.textContent = '$0.00';
        return;
    }
    
    const totalSueldos = empleados.reduce((suma, emp) => suma + emp.sueldo, 0);
    const promedio = totalSueldos / empleados.length;
    
    displayPromedio.textContent = `$${promedio.toFixed(2)}`;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const btnAgregar = document.getElementById('btn_agregar');
    btnAgregar.addEventListener('click', agregarEmpleado);
    
    // Render inicial
    renderEmpleados();
});