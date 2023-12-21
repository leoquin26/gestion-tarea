### Endpoints del API para tareas

#### 1. Obtener todas las tareas
- **Descripción**: Obtiene todas las tareas disponibles.
- **URL**: `/api/tasks/`
- **Método HTTP**: `GET`
- **Respuesta exitosa**:
    - Código de estado: `200 OK`
    - Ejemplo de respuesta:
    ```json
    [
        {
            "id": 1,
            "title": "Tarea uno",
            "description": "Descripción de la tarea uno",
            "due_date": "2023-12-31",
            "status": "pendiente"
        },
        {
            "id": 2,
            "title": "Tarea dos",
            "description": "Descripción de la tarea dos",
            "due_date": "2023-12-30",
            "status": "en_progreso"
        }
        // ... Otras tareas
    ]
    ```
  
#### 2. Crear una nueva tarea
- **Descripción**: Crea una nueva tarea.
- **URL**: `/api/tasks/`
- **Método HTTP**: `POST`
- **Parámetros de la solicitud**:
    - `title` (string): Título de la tarea.
    - `description` (string): Descripción de la tarea.
    - `due_date` (string): Fecha de vencimiento de la tarea (formato YYYY-MM-DD).
    - `status` (string): Estado de la tarea (pendiente, en_progreso, completada).
- **Respuesta exitosa**:
    - Código de estado: `201 Created`
    - Ejemplo de respuesta:
    ```json
    {
        "id": 3,
        "title": "Nueva tarea",
        "description": "Descripción de la nueva tarea",
        "due_date": "2024-01-15",
        "status": "pendiente"
    }
    ```

#### 3. Obtener detalles de una tarea
- **Descripción**: Obtiene los detalles de una tarea específica.
- **URL**: `/api/tasks/{id}`
- **Método HTTP**: `GET`
- **Parámetros de la solicitud**:
    - `{id}` (integer): Identificador único de la tarea en la URL.
- **Respuesta exitosa**:
    - Código de estado: `200 OK`
    - Ejemplo de respuesta:
    ```json
    {
        "id": 1,
        "title": "Tarea uno",
        "description": "Descripción de la tarea uno",
        "due_date": "2023-12-31",
        "status": "pendiente"
    }
    ```

#### 4. Actualizar una tarea
- **Descripción**: Actualiza una tarea existente.
- **URL**: `/api/tasks/{id}`
- **Método HTTP**: `PUT`
- **Parámetros de la solicitud**:
    - `{id}` (integer): Identificador único de la tarea en la URL.
    - `title` (string): Título actualizado de la tarea.
    - `description` (string): Descripción actualizada de la tarea.
    - `due_date` (string): Nueva fecha de vencimiento de la tarea (formato YYYY-MM-DD).
    - `status` (string): Nuevo estado de la tarea (pendiente, en_progreso, completada).
- **Respuesta exitosa**:
    - Código de estado: `200 OK`
    - Ejemplo de respuesta:
    ```json
    {
        "id": 1,
        "title": "Tarea uno modificada",
        "description": "Descripción actualizada de la tarea uno",
        "due_date": "2023-12-25",
        "status": "en_progreso"
    }
    ```

#### 5. Eliminar una tarea
- **Descripción**: Elimina una tarea existente.
- **URL**: `/api/tasks/{id}`
- **Método HTTP**: `DELETE`
- **Parámetros de la solicitud**:
    - `{id}` (integer): Identificador único de la tarea en la URL.
- **Respuesta exitosa**:
    - Código de estado: `204 No Content`
    - No hay contenido en la respuesta si la tarea se elimina correctamente.

Estos son ejemplos genéricos para las rutas de tu API. Asegúrate de personalizarlos con los datos y lógica de tu aplicación real.