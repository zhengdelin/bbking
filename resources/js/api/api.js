import {
    getOwnProfile,
    postUserLogout,
    postUserLogin,
    postUserRegister,
    getUserMember,
    postCreateUserMember,
    postUpdateUser,
    postUpdateUserMember,
} from "./user";

//user
////user/global
// export const apiPostUpdataUser = postUpdateUser;
export const apiGetOwnProfile = getOwnProfile;
////user/user
export const apiPostUserLogout = postUserLogout;
export const apiPostUserLogin = postUserLogin;
export const apiPostUserRegister = postUserRegister;
//user/admin
export const apiGetUserMember = getUserMember;
export const apiPostCreateUserMember = postCreateUserMember;
export const apiPostUpdateUserMember = postUpdateUserMember;