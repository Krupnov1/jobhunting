<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\ResumeController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//resume
Route::get('/resume', [ResumeController::class, 'index']);
Route::get('/resume/{id}', [ResumeController::class, 'show']);

//vacancy
Route::get('/vacancy', [JobController::class, 'index']);
Route::get('/vacancy/category', [JobController::class, 'vacancyCategoryShow']);
Route::get('/vacancy/category/{id}', [JobController::class, 'vacanciesOutput']);
Route::get('/vacancy/{id}', [JobController::class, 'vacancyShow']);

//register
Route::post('/register', [RegisterController::class, 'registerApplicant']);
Route::post('/register/employer', [RegisterController::class, 'registerEmployer']);

//login
Route::post('/login/applicant', [AuthController::class, 'authApplicant']);
Route::post('/login/employer', [AuthController::class, 'authEmployer']);

//user
Route::post('/applicant/user', [UserController::class, 'userResumeAdd']);
Route::post('/employer/user', [UserController::class, 'userVacancyAdd']);