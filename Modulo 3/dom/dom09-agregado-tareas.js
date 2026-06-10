const campoTarea = document.getElementById('campo-tarea');
const botonTarea = document.getElementById('agregar-tarea');
const listaTareas = document.getElementById('lista-tareas');

botonTarea.addEventListener('click', function() {
    const tarea = campoTarea.value.trim();
    if (tarea !== '') {
        const li = document.createElement('li');
        li.textContent = tarea;
        listaTareas.appendChild(li);
        campoTarea.value = '';
    }
});