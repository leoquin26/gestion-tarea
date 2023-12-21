/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./resources/js/tasks_create.js ***!
  \**************************************/
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
document.addEventListener('DOMContentLoaded', function () {
  var dniInput = document.getElementById('dni');
  var dniMessage = document.getElementById('dniMessage');
  var successMessage = document.getElementById('successMessage');
  var errorMessage = document.getElementById('errorMessage');
  dniInput.addEventListener('input', validateDniInput);
  var form = document.getElementById('createTaskForm');
  if (form) {
    form.addEventListener('submit', handleSubmitForm);
  } else {
    console.error('Formulario no encontrado');
  }
  function validateDniInput() {
    var sanitizedValue = this.value.replace(/\D/g, '');
    var isInvalidLength = sanitizedValue.length < 8;
    this.value = isInvalidLength ? sanitizedValue : sanitizedValue.slice(0, 8);
    dniMessage.textContent = isInvalidLength ? 'Ingrese al menos 8 dígitos numéricos.' : '';
  }
  function handleSubmitForm(event) {
    event.preventDefault();
    var formData = new FormData(form);
    if (validateForm(formData)) {
      createTask(formData);
    } else {
      displayErrorMessage('Todos los campos son obligatorios.');
    }
  }
  function validateForm(formData) {
    var isValid = true;
    var _iterator = _createForOfIteratorHelper(formData.values()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;
        if (!value) {
          isValid = false;
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return isValid;
  }
  function createTask(formData) {
    fetch('/api/tasks', {
      method: 'POST',
      body: formData
    }).then(function (response) {
      return response.json();
    }).then(handleCreateTaskResponse)["catch"](handleCreateTaskError);
  }
  function handleCreateTaskResponse(data) {
    console.log('Respuesta del API:', data);
    if (data.status === 'success') {
      showSuccessMessage();
      setTimeout(function () {
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
    setTimeout(function () {
      successMessage.style.display = 'none';
    }, 2000);
  }
  function displayErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
  }
});
/******/ })()
;