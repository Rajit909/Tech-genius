<?php
use App\Http\Controllers\ApplyController;
use Illuminate\Support\Facades\Route;

Route::get('apply', [ApplyController::class, 'apply'])
->name('apply');

Route::post('apply', [ApplyController::class, 'store']);