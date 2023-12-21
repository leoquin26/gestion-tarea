/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./resources/js/tasks_update.js ***!
  \**************************************/
document.addEventListener('DOMContentLoaded', function () {
  var dniInput = document.getElementById('dni');
  var dniMessage = document.getElementById('dniMessage');
  var successMessage = document.getElementById('successMessage');
  dniInput.addEventListener('input', validateDniInput);
  var editForm = document.getElementById('updateTaskForm');
  if (editForm) {
    editForm.addEventListener('submit', handleUpdateTask);
  } else {
    console.error('Formulario no encontrado');
  }
  function validateDniInput() {
    var sanitizedValue = this.value.replace(/\D/g, '');
    var isInvalidLength = sanitizedValue.length < 8;
    this.value = isInvalidLength ? sanitizedValue : sanitizedValue.slice(0, 8);
    dniMessage.textContent = isInvalidLength ? 'Ingrese al menos 8 dígitos numéricos.' : '';
  }
  function handleUpdateTask(event) {
    event.preventDefault();
    var taskId = obtainTaskIdFromURL();
    var taskData = getFormData();
    if (taskId && taskData) {
      updateTask(taskId, taskData);
    } else {
      console.error('Error al obtener la información de la tarea o el ID.');
    }
  }
  function obtainTaskIdFromURL() {
    var url = window.location.pathname;
    var urlParts = url.split('/');
    return urlParts[urlParts.length - 1];
  }
  function getFormData() {
    var dni = document.getElementById('dni').value;
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var dueDate = document.getElementById('due_date').value;
    var status = document.getElementById('status').value;
    return {
      dni: dni,
      title: title,
      description: description,
      due_date: dueDate,
      status: status
    };
  }
  function updateTask(taskId, taskData) {
    fetch("/api/tasks/".concat(taskId), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskData)
    }).then(function (response) {
      return response.json();
    }).then(handleTaskUpdateResponse)["catch"](handleTaskUpdateError);
  }
  function handleTaskUpdateResponse(data) {
    console.log('Respuesta del API:', data);
    if (data.status === 'success') {
      showSuccessMessage();
      setTimeout(function () {
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
    setTimeout(function () {
      successMessage.style.display = 'none';
    }, 2000);
  }
});
/******/ })()
;