<?php

use App\Http\Controllers\LoginController;
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

Route::post('/getUserInfo',[LoginController::class,'getUserInfo']);
Route::post('/saveUserInfo', [LoginController::class,'saveUserInfo']);

Route::post('/getUser',[LoginController::class,'getUser']);
// Route::post('getCsrfToken',[LoginController::class,'getCsrfToken']);
Route::post('/userLogin',[LoginController::class,'userLogin']);
Route::post('/userRegister',[LoginController::class,'userRegister']);
Route::post('/userLogout',[LoginController::class,'userLogout']);


Route::get('/{path}', function () {
    return view('user.home');
})->where('path','^((?!api).)*$');

