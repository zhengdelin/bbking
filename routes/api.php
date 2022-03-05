<?php

use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BasicController;
use App\Http\Controllers\UserAdminController;
use App\Http\Controllers\UserMemberController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//test
Route::post('test', [BasicController::class, 'test']);
Route::get('getCsrfToken', [BasicController::class, 'getCsrfToken']);
Route::get('getBossToken', [BasicController::class, 'getBossToken']);
//不用token的

Route::post('user/member/userLogin', [UserMemberController::class, 'userLogin']);
Route::post('user/member/userRegister', [UserMemberController::class, 'userRegister']);

Route::post('upLoadBase64Img', [UserMemberController::class, 'upLoadBase64Img']);


//需要token的
Route::middleware('token_middleware')->group(function () {
    //global api

    //user_member api
    Route::post('user/member/getOwnProfile', [UserMemberController::class, 'getOwnProfile']);
    Route::post('user/member/updateUser', [UserMemberController::class, 'updateUser']);
    Route::post('user/member/userLogout', [UserMemberController::class, 'userLogout']);

    //admin api
    Route::middleware('is_admin')->group(function () {
        Route::post('user/admin/getUserMember', [UserAdminController::class, 'getUserMember']);
        Route::post('user/admin/createUserMember', [UserAdminController::class, 'createUserMember']);
        Route::post('user/admin/updateUserMember', [UserAdminController::class, 'updateUserMember']);
    });
});

