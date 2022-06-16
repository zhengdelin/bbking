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
    postCollectArticle,
    getCollectedArticles,
    getRoles,
} from "./module/user";
import {
    getArticleById,
    getArticles,
    getArticlesByCategory,
    postCreateArticle,
    postUpdateArticle,
} from "./module/article";
import {
    getActivityImgs,
    getAllActivityImgs,
    getCategories,
    getAllStoreInfos,
    postCreateActivityImg,
    postCreateCategory,
    postUpdateActivityImg,
    postUpdateCategory,
    postCreateStoreInfo,
    postUpdateStoreInfo,
    getStoreInfos,
    getSearch,
    getNews,
} from "./module/global";
import {
    getAllOrders,
    getCartByMember,
    getOrders,
    getProductById,
    getProducts,
    getProductsByCategory,
    patchOrder,
    postAddProductToCart,
    postCancelOrder,
    postCreateOrder,
    postCreateProduct,
    deleteCartProduct,
    postEvaluate,
    postRecoverOrder,
    postShoppingAgain,
    postUpdateProduct,
    putOrderStatus,
    postFinishOrder,
} from "./module/product";

/* global */
export const apiGetCategories = getCategories;
export const apiGetActivityImgs = getActivityImgs;
export const apiGetStoreInfos = getStoreInfos;
export const apiGetSearch = getSearch;
export const apiGetNews = getNews;

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
export const apiPostCollectArticle = postCollectArticle;
export const apiGetCollectedArticles = getCollectedArticles;
//user admin
export const apiGetUserMember = getUserMember;
export const apiPostCreateUserMember = postCreateUserMember;
export const apiPostUpdateUserMember = postUpdateUserMember;

/* article */
export const apiGetArticlesByCategory = getArticlesByCategory;
export const apiGetArticleById = getArticleById;
//admin
export const apiPostCreateArticle = postCreateArticle;
export const apiGetArticles = getArticles;
export const apiPostUpdateArticle = postUpdateArticle;

/* product */
export const apiGetProductsByCategory = getProductsByCategory;
export const apiGetProductById = getProductById;
export const apiPostAddProductToCart = postAddProductToCart;
export const apiGetCartByMember = getCartByMember;
export const apiDeleteCartProduct = deleteCartProduct;
export const apiPostCreateOrder = postCreateOrder;
export const apiGetOrders = getOrders;
// export const apiGetOrderById = getOrderById;
export const apiPostCancelOrder = postCancelOrder;
export const apiPostRecoverOrder = postRecoverOrder;
export const apiPostFinishOrder = postFinishOrder;
export const apiPostShoppingAgain = postShoppingAgain;
export const apiPostEvaluate = postEvaluate;
//admin
export const apiGetProducts = getProducts;
export const apiPostCreateProduct = postCreateProduct;
export const apiPostUpdateProduct = postUpdateProduct;
export const apiGetAllOrders = getAllOrders;
export const apiPutOrderStatus = putOrderStatus;
export const apiPatchOrder = patchOrder;

// boss
export const apiGetRoles = getRoles;
