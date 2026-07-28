const campoTarea = document.getElementById('campo-tarea');
const botonTarea = document.getElementById('agregar-tarea');
const listaTareas = document.getElementById('lista-tareas');

function agregarTarea() {
    const tarea = campoTarea.value.trim();
    if (tarea !== '') {
        const li = document.createElement('li');
        li.textContent = tarea;
        listaTareas.appendChild(li);
        campoTarea.value = '';
    }
}

botonTarea.addEventListener('click', agregarTarea);

campoTarea.addEventListener('keydown', function(evento) {
    if (evento.key === 'Enter') {
        agregarTarea();
    }
});