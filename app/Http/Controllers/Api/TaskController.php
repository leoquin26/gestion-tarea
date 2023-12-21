<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Task;
use App\Helpers\TaskHelper;
use App\Http\Controllers\Controller;

class TaskController extends Controller
{
    public function index(): JsonResponse
    {
        $tasks = Task::all();

        return response()->json([
            'status' => 'success',
            'data' => $tasks
        ]);
    }

    public function show($id): JsonResponse
    {
        $task = Task::findOrFail($id);

        return response()->json([
            'status' => 'success',
            'data' => $task
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), TaskHelper::validationRules());

        if ($validator->fails()) {
            return TaskHelper::validationErrorResponse($validator->errors());
        }

        $task = Task::create($request->all());

        return response()->json([
            'status' => 'success',
            'data' => $task
        ], 201);
    }

    public function update(Request $request, $id): JsonResponse
    {   
        $validator = Validator::make($request->all(), TaskHelper::validationRules());

        if ($validator->fails()) {
            return TaskHelper::validationErrorResponse($validator->errors());
        }

        $task = Task::findOrFail($id);
        $task->update($request->all());

        return response()->json([
            'status' => 'success',
            'data' => $task
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $task = Task::findOrFail($id);
        $task->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Task deleted successfully'
        ]);
    }
}

