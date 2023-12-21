document.addEventListener('DOMContentLoaded', () => {
    const dniInput = document.getElementById('dni');
    const dniMessage = document.getElementById('dniMessage');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    dniInput.addEventListener('input', validateDniInput);

    const form = document.getElementById('createTaskForm');
    if (form) {
        form.addEventListener('submit', handleSubmitForm);
    } else {
        console.error('Formulario no encontrado');
    }

    function validateDniInput() {
        const sanitizedValue = this.value.replace(/\D/g, '');
        const isInvalidLength = sanitizedValue.length < 8;

        this.value = isInvalidLength ? sanitizedValue : sanitizedValue.slice(0, 8);
        dniMessage.textContent = isInvalidLength ? 'Ingrese al menos 8 dígitos numéricos.' : '';
    }

    function handleSubmitForm(event) {
        event.preventDefault();
        const formData = new FormData(form);

        if (validateForm(formData)) {
            createTask(formData);
        } else {
            displayErrorMessage('Todos los campos son obligatorios.');
        }
    }

    function validateForm(formData) {
        let isValid = true;
        for (let value of formData.values()) {
            if (!value) {
                isValid = false;
                break;
            }
        }
        return isValid;
    }

    function createTask(formData) {
        fetch('/api/tasks', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(handleCreateTaskResponse)
        .catch(handleCreateTaskError);
    }

    function handleCreateTaskResponse(data) {
        console.log('Respuesta del API:', data);
        if (data.status === 'success') {
            showSuccessMessage();
            setTimeout(() => {
                window.location.href = '/';
            }, 2000);
        } else {
            alert('Error al crear la tarea.');
        }
    }

    function handleCreateTaskError(error) {
        console.error('Error al crear la tarea:', error);
        displayErrorMessage('Error al crear la tarea. Inténtelo nuevamente más tarde.'); 
    }

    function showSuccessMessage() {
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 2000);
    }

    function displayErrorMessage(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
});
