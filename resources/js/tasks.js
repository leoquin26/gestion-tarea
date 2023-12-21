document.addEventListener('DOMContentLoaded', () => {
    const tasksListElement = document.getElementById('tasksList');
    const deleteConfirmation = document.getElementById('deleteConfirmation');

    const fetchTasks = () => {
        fetch('/api/tasks')
            .then(handleResponse)
            .then(renderTasks)
            .catch(handleError);
    };

    const handleResponse = (response) => {
        if (!response.ok) {
            throw new Error('Error de red');
        }
        return response.json();
    };

    const renderTasks = (data) => {
        const tasks = data?.status === 'success' ? data.data : [];
        tasksListElement.innerHTML = tasks.length ? createTable(tasks) : createDefaultTable();
        attachDeleteListeners();
    };

    const createTable = (tasks) => {
        let table = `
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">DNI</th>
                            <th scope="col">Título</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Fecha de vencimiento</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        tasks.forEach(task => {
            table += `
                <tr>
                    <td>${task.dni}</td>
                    <td>${task.title}</td>
                    <td>${task.description}</td>
                    <td>${task.due_date}</td>
                    <td>${task.status}</td>
                    <td>
                        <button class="btn btn-danger delete-task" data-task-id="${task.id}">Eliminar</button>
                        <button onclick="redirectToEditPage(${task.id})" class="btn btn-primary">Editar</button>
                    </td>
                </tr>
            `;
        });

        table += `
                    </tbody>
                </table>
            </div>
        `;

        return table;
    };

    const createDefaultTable = () => {
        return `
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">DNI</th>
                            <th scope="col">Título</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Fecha de vencimiento</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="5" class="text-center">No se pudieron cargar las tareas.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    };

    const handleError = (error) => {
        console.error('Error al obtener las tareas:', error);
        tasksListElement.innerHTML = createDefaultTable();
    };

    const attachDeleteListeners = () => {
        const deleteButtons = document.querySelectorAll('.delete-task');

        deleteButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const taskId = event.target.dataset.taskId;
                deleteTask(taskId);
            });
        });
    };

    redirectToEditPage = (taskId) => {
        window.location.href = `/edit/${taskId}`;
    }

    const deleteTask = (taskId) => {
        fetch(`/api/tasks/${taskId}`, {
            method: 'DELETE',
        })
        .then(handleResponse)
        .then(() => {
            showDeleteConfirmation();
            fetchTasks();
        })
        .catch(error => {
            console.error('Error al eliminar la tarea:', error);
        });
    };

    const showDeleteConfirmation = () => {
        deleteConfirmation.style.display = 'block';
        setTimeout(() => {
            deleteConfirmation.style.display = 'none';
        }, 2000);
    };

    fetchTasks();
});