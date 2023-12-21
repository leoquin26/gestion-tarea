<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Task;

class TaskController extends Controller
{
    public function edit($id)
    {
        // Obtener la tarea con el ID proporcionado
        $task = Task::findOrFail($id);

        // Pasar el ID y los datos de la tarea a la vista 'tasks.edit'
        return view('tasks.edit', ['taskId' => $id, 'task' => $task]);
    }
}
