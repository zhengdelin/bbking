import {get, post } from "../baseAxios";

//global
export const getOwnProfile = () => get("user/member/getOwnProfile");
export const postUpdateUser = (data) => post("user/member/updateUser", data);

export const postUserLogout = () => post("user/member/userLogout");
export const postUserLogin = (data) => post("user/member/userLogin", data);
export const postUserRegister = (data) =>
    post("user/member/userRegister", data);

//admin

export const getUserMember = () => get("user/admin/getUserMember");
export const postCreateUserMember = (data) =>
    post("user/admin/createUserMember", data);
export const postUpdateUserMember = (data) =>
    post("user/admin/updateUserMember", data);