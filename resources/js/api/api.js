import {
    getUser,
    postUserLogout,
    postUserLogin,
    postUserRegister,
    getUserInfo,
    getAllUserInfo,
    postCreateUser
} from "./user";

export const apiGetUser = getUser;
export const apiGetUserInfo = getUserInfo;
export const apiPostUserLogout = postUserLogout;
export const apiPostUserLogin = postUserLogin;
export const apiPostUserRegister = postUserRegister;


//admin
export const apiGetAllUserInfo = getAllUserInfo;
export const apiPostCreateUser = postCreateUser;