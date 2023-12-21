<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('/tasks/index');
});

Route::get('/create', function () {
    return view('/tasks/create');
});

// Route::get('/tasks/{id}/edit', function ($id) {
//     return view('/tasks/edit', $id);
// });

// Ruta en web.php para la vista de edición con un parámetro de ID
Route::get('/edit/{id}', [TaskController::class, 'edit'])->name('tasks.edit');
