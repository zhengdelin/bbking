import {
    getOwnProfile,
    postUserLogout,
    postUserLogin,
    postUserRegister,
    getUserMember,
    postCreateUserMember,
    postUpdateUser,
    postUpdateUserMember,
} from "./module/user";
import { getArticles, postCreateArticle } from "./module/article";
import { getCategories } from "./module/global";

/* global */
export const apiGetCategories = getCategories;

/* user */

// export const apiPostUpdataUser = postUpdateUser;
////user/user
export const apiGetOwnProfile = getOwnProfile;
export const apiPostUserLogout = postUserLogout;
export const apiPostUserLogin = postUserLogin;
export const apiPostUserRegister = postUserRegister;
//user/admin
export const apiGetUserMember = getUserMember;
export const apiPostCreateUserMember = postCreateUserMember;
export const apiPostUpdateUserMember = postUpdateUserMember;

/* article */

//admin
export const apiPostCreateArticle = postCreateArticle;
export const apiGetArticles = getArticles;