import {get, post } from "../baseAxios";

//global

export const getOwnProfile = () => get("user/getOwnProfile");
export const postUpdateOwnProfile = (data) => post("user/updateOwnProfile", data);

export const postUserLogout = () => post("user/userLogout");
export const postUserLogin = (data) => post("user/userLogin", data);
export const postUserRegister = (data) =>
    post("user/userRegister", data);
export const postUpdatePassword = data=>post("user/updatePassword",data);
export const postForgetPassword = data=>post("user/forgetPassword",data);
//admin

export const getUserMember = () => get("user/admin/getUserMember");
export const postCreateUserMember = (data) =>
    post("user/admin/createUserMember", data);
export const postUpdateUserMember = (data) =>
    post("user/admin/updateUserMember", data);