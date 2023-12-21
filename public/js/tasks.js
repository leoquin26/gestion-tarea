/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./resources/js/tasks.js ***!
  \*******************************/
document.addEventListener('DOMContentLoaded', function () {
  var tasksListElement = document.getElementById('tasksList');
  var deleteConfirmation = document.getElementById('deleteConfirmation');
  var fetchTasks = function fetchTasks() {
    fetch('/api/tasks').then(handleResponse).then(renderTasks)["catch"](handleError);
  };
  var handleResponse = function handleResponse(response) {
    if (!response.ok) {
      throw new Error('Error de red');
    }
    return response.json();
  };
  var renderTasks = function renderTasks(data) {
    var tasks = (data === null || data === void 0 ? void 0 : data.status) === 'success' ? data.data : [];
    tasksListElement.innerHTML = tasks.length ? createTable(tasks) : createDefaultTable();
    attachDeleteListeners();
  };
  var createTable = function createTable(tasks) {
    var table = "\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">DNI</th>\n                            <th scope=\"col\">T\xEDtulo</th>\n                            <th scope=\"col\">Descripci\xF3n</th>\n                            <th scope=\"col\">Fecha de vencimiento</th>\n                            <th scope=\"col\">Estado</th>\n                            <th scope=\"col\">Acciones</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n        ";
    tasks.forEach(function (task) {
      table += "\n                <tr>\n                    <td>".concat(task.dni, "</td>\n                    <td>").concat(task.title, "</td>\n                    <td>").concat(task.description, "</td>\n                    <td>").concat(task.due_date, "</td>\n                    <td>").concat(task.status, "</td>\n                    <td>\n                        <button class=\"btn btn-danger delete-task\" data-task-id=\"").concat(task.id, "\">Eliminar</button>\n                        <button onclick=\"redirectToEditPage(").concat(task.id, ")\" class=\"btn btn-primary\">Editar</button>\n                    </td>\n                </tr>\n            ");
    });
    table += "\n                    </tbody>\n                </table>\n            </div>\n        ";
    return table;
  };
  var createDefaultTable = function createDefaultTable() {
    return "\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">DNI</th>\n                            <th scope=\"col\">T\xEDtulo</th>\n                            <th scope=\"col\">Descripci\xF3n</th>\n                            <th scope=\"col\">Fecha de vencimiento</th>\n                            <th scope=\"col\">Estado</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td colspan=\"5\" class=\"text-center\">No se pudieron cargar las tareas.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        ";
  };
  var handleError = function handleError(error) {
    console.error('Error al obtener las tareas:', error);
    tasksListElement.innerHTML = createDefaultTable();
  };
  var attachDeleteListeners = function attachDeleteListeners() {
    var deleteButtons = document.querySelectorAll('.delete-task');
    deleteButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        var taskId = event.target.dataset.taskId;
        deleteTask(taskId);
      });
    });
  };
  redirectToEditPage = function redirectToEditPage(taskId) {
    window.location.href = "/edit/".concat(taskId);
  };
  var deleteTask = function deleteTask(taskId) {
    fetch("/api/tasks/".concat(taskId), {
      method: 'DELETE'
    }).then(handleResponse).then(function () {
      showDeleteConfirmation();
      fetchTasks();
    })["catch"](function (error) {
      console.error('Error al eliminar la tarea:', error);
    });
  };
  var showDeleteConfirmation = function showDeleteConfirmation() {
    deleteConfirmation.style.display = 'block';
    setTimeout(function () {
      deleteConfirmation.style.display = 'none';
    }, 2000);
  };
  fetchTasks();
});
/******/ })()
;