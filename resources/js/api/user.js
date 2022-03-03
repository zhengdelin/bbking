import axios from "axios";
import store from "../store";

const userRequest = axios.create({
    baseURL: "http://127.0.0.1:8000/",
});

userRequest.interceptors.request.use((config) => {
    const token = store.getters.getToken;
    config.headers.token = token;
    console.log("user-api-request->", config);
    return config;
});
userRequest.interceptors.response.use(response => {
        console.log("user-api-response->", response);
        return response;
    })
    //global
export const getOwnProfile = () => userRequest.post("api/user/member/getOwnProfile");
export const postUpdateUser = (data) =>
    userRequest.post("api/user/member/updateUser", data);

export const postUserLogout = () =>
    userRequest.post("api/user/member/userLogout");
export const postUserLogin = (data) =>
    userRequest.post("api/user/member/userLogin", data);
export const postUserRegister = (data) =>
    userRequest.post("api/user/member/userRegister", data);

//admin

export const getUserMember = () =>
    userRequest.post("api/user/admin/getUserMember");
export const postCreateUserMember = (data) =>
    userRequest.post("api/user/admin/createUserMember", data);
export const postUpdateUserMember = (data) => {
    userRequest.post("api/user/admin/updateUserMember", data);
}