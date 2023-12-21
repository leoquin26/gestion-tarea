# Documentación para Levantar el Proyecto

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- **Servidor web** (Apache, Nginx, etc.)
- **PHP** (versión recomendada)
- **Base de datos** (MySQL, PostgreSQL, etc.)
- **Node.js** (última versión recomendada)
- **Composer** (última versión recomendada)
- **Git** (última versión recomendada)

## Configuración del Proyecto

1. Clona el repositorio desde GitHub:

   ```bash
   git clone https://github.com/leoquin26/gestion-tarea.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd gestion-tareas
   ```

3. Instala las dependencias de PHP con Composer:

   ```bash
   composer install
   ```

4. Instala las dependencias de JavaScript con npm:

   ```bash
   npm install
   ```

## Configuración del Entorno

1. Copia el archivo `.env.example` a `.env`:

   ```bash
   cp .env.example .env
   ```

2. Configura la conexión a la base de datos en el archivo `.env`.

3. Genera una nueva clave de aplicación:

   ```bash
   php artisan key:generate
   ```
4. Crear la base de datos en su gestor de Mysql (workbench, phpmyadmin)

   ```bash
   DB_NAME: gestion_tareas
   ```

5. Ejecuta las migraciones para crear las tablas en la base de datos:

   ```bash
   php artisan migrate
   ```

6. Compila los assets:

   ```bash
   npm run dev
   ```

## Levantar el Servidor

1. Inicia el servidor de desarrollo de PHP:

   ```bash
   php artisan serve
   ```

2. Accede a la aplicación desde tu navegador web:

   ```
   http://localhost:8000
   ```

## Uso de la Aplicación

Una vez que el proyecto esté en funcionamiento, podrás acceder a las diferentes funcionalidades de la aplicación:

- Crear, editar y eliminar tareas.
- Visualizar la lista de tareas existentes.
- Realizar acciones sobre cada tarea, como editarla o eliminarla.

---