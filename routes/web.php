<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\AdminController;
use Illuminate\Auth\Events\Login;
use Illuminate\Support\Facades\Route;
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

Route::post('/user/api/getUserInfo', [LoginController::class, 'getUserInfo']);
Route::post('/user/api/saveUserInfo', [LoginController::class, 'saveUserInfo']);

Route::post('/user/api/getUser', [LoginController::class, 'getUser']);
// Route::post('getCsrfToken',[LoginController::class,'getCsrfToken']);
Route::post('/user/api/userLogin', [LoginController::class, 'userLogin']);
Route::post('/user/api/userRegister', [LoginController::class, 'userRegister']);
Route::post('/user/api/userLogout', [LoginController::class, 'userLogout']);

Route::post('/user/api/upLoadBase64Img', [LoginController::class, 'upLoadBase64Img']);



//admin api
Route::post('/admin/api/getAllUserInfo', [AdminController::class, 'getAllUserInfo']);
Route::post('/admin/api/createUser', [AdminController::class, 'createUser']);
Route::get('/{path}', function () {
    return view('user.home');
})->where('path', '^((?!api).)*$');
