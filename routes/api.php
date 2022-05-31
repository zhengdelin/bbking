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

Route::post('user/login', [UserMemberController::class, 'userLogin']); //登入
Route::post('user/register', [UserMemberController::class, 'userRegister']); //註冊
Route::post('user/forgetPassword', [UserMemberController::class, 'forgetPassword']); //忘記密碼
Route::post('article/admin/uploadArticlePic', [ArticleAdminController::class, 'uploadArticlePic']); //上傳文章圖片

/* global api */
Route::get("global/categories", [GlobalController::class, "getCategories"]); //取得類別
Route::get("global/activity_imgs", [GlobalController::class, "getActivityImgs"]); //取得活動圖片
Route::get("global/store_infos", [GlobalController::class, "getStoreInfos"]); //取得店面資訊
Route::get("global/search", [GlobalController::class, "search"]);
Route::get("global/news", [GlobalController::class, "getNews"]);
/* article api */
Route::get("article/category/{category}", [ArticleController::class, "getArticlesByCategory"]);
Route::get("article/{article_id}", [ArticleController::class, "getArticleById"]);
/* product api */
Route::get("product/category/{category}", [ProductController::class, 'getProductsByCategory']);
Route::get("product/{product_id}", [ProductController::class, 'getProductById']);

/* 需要token的 */
Route::middleware('token_middleware')->group(function () {
    /* user_member api */
    Route::get('user/auth', [UserMemberController::class, 'getOwnProfile']); //取得個人資訊
    Route::patch('user/{id}', [UserMemberController::class, 'updateOwnProfile']); //更新個人資訊
    Route::post('user/logout', [UserMemberController::class, 'userLogout']); //登出
    Route::put('user/password', [UserMemberController::class, 'updatePassword']); //更新user資訊

    /* product api */
    Route::put("cart/product/{product_id}/amount/{amount}", [ProductController::class, 'addProductToCart']);
    Route::get("cart", [ProductController::class, 'getCartByMember']);
    Route::delete("cart/product/{product_id}", [ProductController::class, 'deleteCartProduct']);
    Route::post("order", [ProductController::class, 'createOrder']);
    Route::get("orders", [ProductController::class, 'getOrdersByMember']);

    // Route::get("product/getOrderById", [ProductController::class, 'getOrderById']);
    Route::put("order/{order_id}", [ProductController::class, 'cancelOrder']);
    Route::put("order/{order_id}/recover", [ProductController::class, 'recoverOrder']);
    Route::post("order/{order_id}/again", [ProductController::class, 'shoppingAgain']);
    Route::post("order/evaluate/{product_id}", [ProductController::class, 'evaluate']);
    /* 使用者珍藏文章 */
    Route::put("user/article/{article_id}", [ArticleController::class, "collectArticle"]);
    Route::get("user/article", [ArticleController::class, "getCollectedArticles"]);
    /* admin api 需要經過is_admin middleware判斷身分是否為admin之上*/
    Route::middleware('is_admin')->group(function () {
        //admin user_member
        Route::get('admin/user', [UserAdminController::class, 'getUserMember']); //取得所有user
        Route::post('admin/user', [UserAdminController::class, 'createUserMember']); //新增user
        Route::patch('admin/user/{id}', [UserAdminController::class, 'updateUserMember']); //更新user資訊
        //admin article
        Route::get('admin/articles', [ArticleAdminController::class, 'getArticles']); //取得所有文章
        Route::post("admin/article", [ArticleAdminController::class, 'createArticle']); //新增文章
        Route::patch("admin/article/{id}", [ArticleAdminController::class, 'updateArticle']); //更新文章

        /* admin product */
        Route::get("admin/products", [ProductAdminController::class, 'getProducts']); //取得所有產品
        Route::post("admin/product", [ProductAdminController::class, 'createProduct']); //新增產品
        Route::patch("admin/product/{id}", [ProductAdminController::class, 'updateProduct']); //更新產品
        Route::get("admin/orders", [ProductAdminController::class, 'getAllOrders']); //取得所有產品

        Route::patch("admin/order/{order_id}", [ProductAdminController::class, 'updateOrder']);
        Route::put("admin/order/{order_id}/status/{status}", [ProductAdminController::class, 'updateOrderStatus']);
        /* admin global */
        Route::post("admin/global/category", [GlobalController::class, 'createCategory']); //新增類別
        Route::patch("admin/global/category/{id}", [GlobalController::class, 'updateCategory']); //更新類別

        Route::get('admin/global/store_infos', [GlobalController::class, 'getAllStoreInfos']);
        Route::post("admin/global/store_info", [GlobalController::class, 'createStoreInfo']);
        Route::patch("admin/global/store_info/{id}", [GlobalController::class, 'updateStoreInfo']);

        Route::get("admin/global/activity_imgs", [GlobalController::class, 'getAllActivityImgs']); //取得所有活動圖片
        Route::post("admin/global/activity_img", [GlobalController::class, 'createActivityImg']); //新增活動圖片
        Route::patch("admin/global/activity_img/{id}", [GlobalController::class, 'updateActivityImg']); //新增活動圖片


    });

    /* admin boss api  需要經過is_boss middleware判斷身分是否為boss*/
    Route::middleware('is_boss')->group(function () {
        Route::get("boss/roles", [UserAdminController::class, 'getRoles']);
    });
});
