@extends('layouts.app')

@section('title', 'Crear Tarea')

@section('content')
    <div id="successMessage" class="alert alert-success mt-3" style="display: none;">
        Tarea creada exitosamente.
    </div>

    <div id="errorMessage" class="alert alert-danger mt-3" style="display: none; color: red;"></div>

    <div class="d-flex justify-content-center align-items-center">
        <form id="createTaskForm" class="w-50" onsubmit="submitForm(event)">
            <h1 class="mb-4">Crear Nueva Tarea</h1>
            @csrf
            <div class="form-group">
                <label for="dni">DNI:</label>
                <input type="text" class="form-control" id="dni" name="dni" maxlength="8">
                <small id="dniMessage" class="text-muted">Ingrese al menos 8 dígitos numéricos.</small>
            </div>
            <div class="form-group">
                <label for="title">Título:</label>
                <input type="text" class="form-control" id="title" name="title">
            </div>
            <div class="form-group">
                <label for="description">Descripción:</label>
                <textarea class="form-control" id="description" name="description" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="due_date">Fecha de Vencimiento:</label>
                <input type="date" class="form-control" id="due_date" name="due_date">
            </div>
            <div class="form-group">
                <label for="status">Estado:</label>
                <select class="form-control" id="status" name="status">
                    <option value="pendiente">Pendiente</option>
                    <option value="en_progreso">En Progreso</option>
                    <option value="completada">Completada</option>
                </select>
            </div>

            <div class="form-group mt-3">
                <button type="submit" class="btn btn-primary">Crear Tarea</button>
            </div>

        </form>
    </div>

    <script src="{{ mix('js/tasks_create.js') }}"></script>
@endsection
