import {
    getUser,
    postUserLogout,
    postUserLogin,
    postUserRegister,
    getUserInfo
} from "./user";

export const apiGetUser = getUser;
export const apiGetUserInfo = getUserInfo;
export const apiPostUserLogout = postUserLogout;
export const apiPostUserLogin = postUserLogin;
export const apiPostUserRegister = postUserRegister;