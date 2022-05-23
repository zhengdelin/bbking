import {
    getOwnProfile,
    postUserLogout,
    postUserLogin,
    postUserRegister,
    getUserMember,
    postCreateUserMember,
    postUpdateUserMember,
    postUpdateOwnProfile,
    postUpdatePassword,
    postForgetPassword,
} from "./module/user";
import {
    getArticleById,
    getArticles,
    getArticlesByCategory,
    getCollectedArticles,
    postCollectArticle,
    postCreateArticle,
    postUpdateArticle,
} from "./module/article";
import { getActivityImgs, getAllActivityImgs, getCategories, getAllStoreInfos, postCreateActivityImg, postCreateCategory, postUpdateActivityImg, postUpdateCategory, postCreateStoreInfo, postUpdateStoreInfo, getStoreInfos } from "./module/global";
import { getCartByMember, getOrderById, getOrders, getProductById, getProducts, getProductsByCategory, postAddProductToCart, postCancelOrder, postCreateOrder, postCreateProduct, postDeleteCartProduct, postEvaluate, postRecoverOrder, postShoppingAgain, postUpdateProduct } from "./module/product";

/* global */
export const apiGetCategories = getCategories;
export const apiGetActivityImgs = getActivityImgs;
export const apiGetStoreInfos = getStoreInfos;
/* global admin */
export const apiPostCreateCategory = postCreateCategory;
export const apiPostUpdateCategory = postUpdateCategory;
export const apiPostCreateActivityImg = postCreateActivityImg;
export const apiGetAllActivityImgs = getAllActivityImgs;
export const apiPostUpdateActivityImg = postUpdateActivityImg;
export const apiGetAllStoreInfos = getAllStoreInfos;
export const apiPostCreateStoreInfo = postCreateStoreInfo;
export const apiPostUpdateStoreInfo = postUpdateStoreInfo;
/* user */

export const apiPostUpdateOwnProfile = postUpdateOwnProfile;
export const apiGetOwnProfile = getOwnProfile;
export const apiPostUserLogout = postUserLogout;
export const apiPostUserLogin = postUserLogin;
export const apiPostUserRegister = postUserRegister;
export const apiPostUpdatePassword = postUpdatePassword;
export const apiPostForgetPassword = postForgetPassword;
//user admin
export const apiGetUserMember = getUserMember;
export const apiPostCreateUserMember = postCreateUserMember;
export const apiPostUpdateUserMember = postUpdateUserMember;

/* article */
export const apiGetArticlesByCategory = getArticlesByCategory;
export const apiGetArticleById = getArticleById;
export const apiPostCollectArticle = postCollectArticle;
export const apiGetCollectedArticles = getCollectedArticles;
//admin
export const apiPostCreateArticle = postCreateArticle;
export const apiGetArticles = getArticles;
export const apiPostUpdateArticle = postUpdateArticle;

/* product */
export const apiGetProductsByCategory = getProductsByCategory;
export const apiGetProductById = getProductById;
export const apiPostAddProductToCart = postAddProductToCart;
export const apiGetCartByMember = getCartByMember;
export const apiPostDeleteCartProduct = postDeleteCartProduct;
export const apiPostCreateOrder = postCreateOrder;
export const apiGetOrders = getOrders;
// export const apiGetOrderById = getOrderById;
export const apiPostCancelOrder = postCancelOrder;
export const apiPostRecoverOrder = postRecoverOrder;
export const apiPostShoppingAgain = postShoppingAgain;
export const apiPostEvaluate = postEvaluate;
//admin
export const apiGetProducts = getProducts;
export const apiPostCreateProduct = postCreateProduct;
export const apiPostUpdateProduct = postUpdateProduct;