<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AppointmentController;
use App\Http\Middleware\ForceHttps;
use Illuminate\Http\Request;

Route::get('/a', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

/*Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');*/

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


    Route::get('/',[AppointmentController::class,'homepage'])->name('homepage');
    Route::post('/add_consultation',[AppointmentController::class,'add_consultation']);
    Route::get('/adminpage',[AppointmentController::class,'adminpage'])->middleware(['auth', 'verified']);
    Route::post('/filter',[AppointmentController::class,'filter'])->middleware(['auth', 'verified']);
    Route::delete('/deleteAppointmentWithBox',[AppointmentController::class,'deletewithgroup'])->middleware(['auth', 'verified']);
    Route::post('/editlabel',[AppointmentController::class,'editlabel'])->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';
