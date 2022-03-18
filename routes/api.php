<?php

use App\Http\Controllers\ArticleAdminController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GlobalController;
use App\Http\Controllers\ProductAdminController;
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

/* test */
Route::post('test', [GlobalController::class, 'test']);
Route::get('getCsrfToken', [GlobalController::class, 'getCsrfToken']);
Route::get('getBossToken', [GlobalController::class, 'getBossToken']);

/* 不用token的 */

Route::post('user/member/userLogin', [UserMemberController::class, 'userLogin']);//登入
Route::post('user/member/userRegister', [UserMemberController::class, 'userRegister']);//註冊
Route::post('article/admin/uploadArticlePic',[ArticleAdminController::class,'uploadArticlePic']);//上傳文章圖片

/* global api */

Route::get("global/getCategories",[GlobalController::class,"getCategories"]);//取得類別

/* 需要token的 */
Route::middleware('token_middleware')->group(function () {
    /* user_member api */
    
    Route::get('user/member/getOwnProfile', [UserMemberController::class, 'getOwnProfile']);//取得個人資訊
    Route::post('user/member/updateOwnProfile', [UserMemberController::class, 'updateOwnProfile']);//更新個人資訊
    Route::post('user/member/userLogout', [UserMemberController::class, 'userLogout']);//登出

    /* admin api 需要經過is_admin middleware判斷身分是否為admin之上*/
    Route::middleware('is_admin')->group(function () {
        //admin user_member
        Route::get('user/admin/getUserMember', [UserAdminController::class, 'getUserMember']);//取得所有user
        Route::post('user/admin/createUserMember', [UserAdminController::class, 'createUserMember']);//新增user
        Route::post('user/admin/updateUserMember', [UserAdminController::class, 'updateUserMember']);//更新user資訊

        //admin article
        Route::get('article/admin/getArticles',[ArticleAdminController::class,'getArticles']);//取得所有文章
        Route::post("article/admin/createArticle",[ArticleAdminController::class,'createArticle']);//新增文章
        Route::post("article/admin/updateArticle",[ArticleAdminController::class,'updateArticle']);//更新文章
        
        /* admin product */
        Route::get("product/admin/getProducts",[ProductAdminController::class,'getProducts']);//取得所有產品
        Route::post("product/admin/createProduct",[ProductAdminController::class,'createProduct']);//新增產品
        Route::post("product/admin/updateProduct",[ProductAdminController::class,'updateProduct']);//更新產品
    
        /* admin category */
        Route::post("global/createCategory",[GlobalController::class,'createCategory']);//新增類別
        Route::post("global/updateCategory",[GlobalController::class,'updateCategory']);//更新類別
    });
});

