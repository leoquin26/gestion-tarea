@extends('layouts.app')

@section('title', 'Editar Tarea')

@section('content')
<div id="successMessage" class="alert alert-success mt-3" style="display: none;">
    Tarea actualizada exitosamente.
</div>
    <div class="d-flex justify-content-center align-items-center">
        <form id="updateTaskForm" class="w-50" onsubmit="updateTask(event)">
            <h1 class="mb-4">Editar Tarea</h1>
            @csrf
            <div class="form-group">
                <label for="dni">DNI:</label>
                <input type="text" class="form-control" id="dni" name="dni" maxlength="8" value="{{ $task->dni }}">
                <small id="dniMessage" class="text-muted">Ingrese al menos 8 dígitos numéricos.</small>
            </div>
            <div class="form-group">
                <label for="title">Título:</label>
                <input type="text" class="form-control" id="title" name="title" value="{{ $task->title }}">
            </div>
            <div class="form-group">
                <label for="description">Descripción:</label>
                <textarea class="form-control" id="description" name="description" rows="3">{{ $task->description }}</textarea>
            </div>
            <div class="form-group">
                <label for="due_date">Fecha de Vencimiento:</label>
                <input type="date" class="form-control" id="due_date" name="due_date" value="{{ $task->due_date }}">
            </div>
            <div class="form-group">
                <label for="status">Estado:</label>
                <select class="form-control" id="status" name="status">
                    <option value="pendiente" @if($task->status === 'pendiente') selected @endif>Pendiente</option>
                    <option value="en_progreso" @if($task->status === 'en_progreso') selected @endif>En Progreso</option>
                    <option value="completada" @if($task->status === 'completada') selected @endif>Completada</option>
                </select>
            </div>

            <div class="form-group mt-3">
                <button type="submit" class="btn btn-primary">Actualizar Tarea</button>
            </div>
        </form>
    </div>
    <script src="{{ mix('js/tasks_update.js') }}"></script>
@endsection
