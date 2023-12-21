document.addEventListener('DOMContentLoaded', () => {
    const dniInput = document.getElementById('dni');
    const dniMessage = document.getElementById('dniMessage');
    const successMessage = document.getElementById('successMessage');

    dniInput.addEventListener('input', validateDniInput);

    const editForm = document.getElementById('updateTaskForm');
    if (editForm) {
        editForm.addEventListener('submit', handleUpdateTask);
    } else {
        console.error('Formulario no encontrado');
    }

    function validateDniInput() {
        const sanitizedValue = this.value.replace(/\D/g, '');
        const isInvalidLength = sanitizedValue.length < 8;

        this.value = isInvalidLength ? sanitizedValue : sanitizedValue.slice(0, 8);
        dniMessage.textContent = isInvalidLength ? 'Ingrese al menos 8 dígitos numéricos.' : '';
    }

    function handleUpdateTask(event) {
        event.preventDefault();
        const taskId = obtainTaskIdFromURL();
        const taskData = getFormData();

        if (taskId && taskData) {
            updateTask(taskId, taskData);
        } else {
            console.error('Error al obtener la información de la tarea o el ID.');
        }
    }

    function obtainTaskIdFromURL() {
        const url = window.location.pathname;
        const urlParts = url.split('/');
        return urlParts[urlParts.length - 1];
    }

    function getFormData() {
        const dni = document.getElementById('dni').value;
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('due_date').value;
        const status = document.getElementById('status').value;

        return { dni, title, description, due_date: dueDate, status };
    }

    function updateTask(taskId, taskData) {
        fetch(`/api/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        })
        .then(response => response.json())
        .then(handleTaskUpdateResponse)
        .catch(handleTaskUpdateError);
    }

    function handleTaskUpdateResponse(data) {
        console.log('Respuesta del API:', data);
        if (data.status === 'success') {
            showSuccessMessage();
            setTimeout(() => {
                window.location.href = '/';
            }, 2000);
        } else {
            alert('Error al actualizar la tarea.');
        }
    }

    function handleTaskUpdateError(error) {
        console.error('Error al actualizar la tarea:', error);
        alert('Error al actualizar la tarea.');
    }

    function showSuccessMessage() {
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 2000);
    }
});
