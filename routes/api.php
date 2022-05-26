<?php

use App\Http\Controllers\Article\ArticleAdminController;
use App\Http\Controllers\Article\ArticleController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GlobalController;
use App\Http\Controllers\Product\ProductAdminController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\User\UserAdminController;
use App\Http\Controllers\User\UserMemberController;
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

Route::get('test', [GlobalController::class, 'test']);
Route::get('getCsrfToken', [GlobalController::class, 'getCsrfToken']);
Route::get('getBossToken', [GlobalController::class, 'getBossToken']);

/* 不用token的 */

Route::post('user/userLogin', [UserMemberController::class, 'userLogin']); //登入
Route::post('user/userRegister', [UserMemberController::class, 'userRegister']); //註冊
Route::post('user/forgetPassword', [UserMemberController::class, 'forgetPassword']); //忘記密碼
Route::post('article/admin/uploadArticlePic', [ArticleAdminController::class, 'uploadArticlePic']); //上傳文章圖片

/* global api */
Route::get("global/getCategories", [GlobalController::class, "getCategories"]); //取得類別
Route::get("global/getActivityImgs", [GlobalController::class, "getActivityImgs"]); //取得活動圖片
Route::get("global/getStoreInfos", [GlobalController::class, "getStoreInfos"]); //取得店面資訊
/* article api */
Route::post("article/getArticlesByCategory", [ArticleController::class, "getArticlesByCategory"]);
Route::post("article/getArticleById", [ArticleController::class, "getArticleById"]);
/* product api */
Route::post("product/getProductsByCategory", [ProductController::class, 'getProductsByCategory']);
Route::post("product/getProductById", [ProductController::class, 'getProductById']);

/* 需要token的 */
Route::middleware('token_middleware')->group(function () {
    /* user_member api */
    Route::get('user/getOwnProfile', [UserMemberController::class, 'getOwnProfile']); //取得個人資訊
    Route::post('user/updateOwnProfile', [UserMemberController::class, 'updateOwnProfile']); //更新個人資訊
    Route::post('user/userLogout', [UserMemberController::class, 'userLogout']); //登出
    Route::post('user/updatePassword', [UserMemberController::class, 'updatePassword']); //更新user資訊

    /* product api */
    Route::post("product/addProductToCart", [ProductController::class, 'addProductToCart']);
    Route::post("product/getCartByMember", [ProductController::class, 'getCartByMember']);
    Route::post("product/deleteCartProduct", [ProductController::class, 'deleteCartProduct']);
    Route::post("product/createOrder", [ProductController::class, 'createOrder']);
    Route::get("product/getOrdersByMember", [ProductController::class, 'getOrdersByMember']);

    // Route::get("product/getOrderById", [ProductController::class, 'getOrderById']);
    Route::post("product/cancelOrder", [ProductController::class, 'cancelOrder']);
    Route::post("product/recoverOrder", [ProductController::class, 'recoverOrder']);
    Route::post("product/shoppingAgain", [ProductController::class, 'shoppingAgain']);
    Route::post("product/evaluate", [ProductController::class, 'evaluate']);
    /* article api */
    Route::post("article/collectArticle", [ArticleController::class, "collectArticle"]);
    Route::get("article/getCollectedArticles", [ArticleController::class, "getCollectedArticles"]);
    /* admin api 需要經過is_admin middleware判斷身分是否為admin之上*/
    Route::middleware('is_admin')->group(function () {
        //admin user_member
        Route::get('user/admin/getUserMember', [UserAdminController::class, 'getUserMember']); //取得所有user
        Route::post('user/admin/createUserMember', [UserAdminController::class, 'createUserMember']); //新增user
        Route::post('user/admin/updateUserMember', [UserAdminController::class, 'updateUserMember']); //更新user資訊
        //admin article
        Route::get('article/admin/getArticles', [ArticleAdminController::class, 'getArticles']); //取得所有文章
        Route::post("article/admin/createArticle", [ArticleAdminController::class, 'createArticle']); //新增文章
        Route::post("article/admin/updateArticle", [ArticleAdminController::class, 'updateArticle']); //更新文章

        /* admin product */
        Route::get("product/admin/getProducts", [ProductAdminController::class, 'getProducts']); //取得所有產品
        Route::post("product/admin/createProduct", [ProductAdminController::class, 'createProduct']); //新增產品
        Route::post("product/admin/updateProduct", [ProductAdminController::class, 'updateProduct']); //更新產品
        Route::get("admin/orders", [ProductAdminController::class, 'getAllOrders']); //取得所有產品

        Route::patch("admin/order/{order_id}", [ProductAdminController::class, 'updateOrder']);
        Route::put("admin/order/{order_id}/status/{status}", [ProductAdminController::class, 'updateOrderStatus']);
        /* admin global */
        Route::post("global/createCategory", [GlobalController::class, 'createCategory']); //新增類別
        Route::post("global/updateCategory", [GlobalController::class, 'updateCategory']); //更新類別

        Route::get('global/getAllStoreInfos', [GlobalController::class, 'getAllStoreInfos']);
        Route::post("global/createStoreInfo", [GlobalController::class, 'createStoreInfo']);
        Route::post("global/updateStoreInfo", [GlobalController::class, 'updateStoreInfo']);

        Route::get("global/getAllActivityImgs", [GlobalController::class, 'getAllActivityImgs']); //取得所有活動圖片
        Route::post("global/createActivityImg", [GlobalController::class, 'createActivityImg']); //新增活動圖片
        Route::post("global/updateActivityImg", [GlobalController::class, 'updateActivityImg']); //新增活動圖片


    });

    /* admin boss api  需要經過is_admin middleware判斷身分是否為boss*/
    Route::middleware('is_admin')->group(function () {
    });
});
