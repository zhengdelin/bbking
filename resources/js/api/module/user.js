import { get, patch, post, put } from "../baseAxios";

//global

export const getOwnProfile = () => get("user/auth");
export const postUpdateOwnProfile = (data) => patch(`user/${data.id}`, data);

export const postUserLogout = () => post("user/logout");
export const postUserLogin = (data) => post("user/login", data);
export const postUserRegister = (data) => post("user/register", data);
export const postUpdatePassword = (data) => put(`user/password`, data);
export const postForgetPassword = (data) => post("user/forgetPassword", data);

export const postCollectArticle = (data) =>
    put(`user/article/${data.article_id}`, data);
export const getCollectedArticles = () => get(`user/article`);
//admin

export const getUserMember = () => get("admin/user");
export const postCreateUserMember = (data) => post("admin/user", data);
export const postUpdateUserMember = (data) =>
    patch(`admin/user/${data.id}`, data);

//boss
export const getRoles = () => get("boss/roles");
