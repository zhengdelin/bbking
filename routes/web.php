<?php

use App\Http\Controllers\BasicController;
use App\Http\Controllers\UserAdminController;
use App\Http\Controllers\UserMemberController;

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
//test
Route::post('api/test',[BasicController::class,'test']);
Route::get('api/getCsrfToken',[BasicController::class,'getCsrfToken']);
Route::get('api/getBossToken',[BasicController::class,'getBossToken']);
//不用token的

Route::post('api/user/member/userLogin', [UserMemberController::class, 'userLogin']);
Route::post('api/user/member/userRegister', [UserMemberController::class, 'userRegister']);

Route::post('api/api/upLoadBase64Img', [UserMemberController::class, 'upLoadBase64Img']);


//需要token的
Route::middleware('token_middleware')->group(function () {
    //global api
    
    //user_member api
    Route::post('api/user/member/getOwnProfile', [UserMemberController::class, 'getOwnProfile']);
    Route::post('api/user/member/updateUser', [UserMemberController::class, 'updateUser']);
    Route::post('api/user/member/userLogout', [UserMemberController::class, 'userLogout']);

    //admin api
    Route::middleware('is_admin')->group(function(){
        Route::post('api/user/admin/getUserMember', [UserAdminController::class, 'getUserMember']);
        Route::post('api/user/admin/createUserMember', [UserAdminController::class, 'createUserMember']);
        Route::post('api/user/admin/updateUserMember', [UserAdminController::class, 'updateUserMember']);
    });
});








Route::get('/{path}', function () {
    return view('user.home');
})->where('path', '^((?!api).)*$');
