import {
    getOwnProfile,
    postUserLogout,
    postUserLogin,
    postUserRegister,
    getUserMember,
    postCreateUserMember,
    postUpdateUser,
    postUpdateUserMember,
    postUpdateOwnProfile,
} from "./module/user";
import {
    getArticles,
    postCreateArticle,
    postUpdateArticle,
} from "./module/article";
import { getCategories, postCreateCategory, postUpdateCategory } from "./module/global";
import { getProducts, postCreateProduct, postUpdateProduct } from "./module/product";

/* global */
export const apiGetCategories = getCategories;
/* global admin */
export const apiPostCreateCategory = postCreateCategory;
export const apiPostUpdateCategory = postUpdateCategory;

/* user */

export const apiPostUpdateOwnProfile = postUpdateOwnProfile;
export const apiGetOwnProfile = getOwnProfile;
export const apiPostUserLogout = postUserLogout;
export const apiPostUserLogin = postUserLogin;
export const apiPostUserRegister = postUserRegister;
//user admin
export const apiGetUserMember = getUserMember;
export const apiPostCreateUserMember = postCreateUserMember;
export const apiPostUpdateUserMember = postUpdateUserMember;

/* article */

//admin
export const apiPostCreateArticle = postCreateArticle;
export const apiGetArticles = getArticles;
export const apiPostUpdateArticle = postUpdateArticle;

/* product */

//admin
export const apiGetProducts = getProducts;
export const apiPostCreateProduct = postCreateProduct;
export const apiPostUpdateProduct = postUpdateProduct;