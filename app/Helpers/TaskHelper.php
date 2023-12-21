<?php

namespace App\Helpers;

class TaskHelper
{
    public static function validationRules(): array
    {
        return [
            'dni' => 'required',
            'title' => 'required',
            'description' => 'nullable',
            'due_date' => 'required|date',
            'status' => 'required|in:pendiente,en_progreso,completada',
        ];
    }

    public static function validationErrorResponse($errors)
    {
        return response()->json([
            'status' => 'error',
            'message' => 'Validation failed',
            'errors' => $errors
        ], 422);
    }
}
