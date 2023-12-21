@extends('layouts.app')

@section('title', 'Lista de Tareas')

@section('content')
    <h1>Lista de Tareas</h1>
    <div id="deleteConfirmation" class="alert alert-success mt-3" style="display: none;">
        Tarea eliminada correctamente.
    </div>
    
    <div id="tasksList"></div>

    <script src="{{ mix('js/tasks.js') }}"></script>
@endsection
