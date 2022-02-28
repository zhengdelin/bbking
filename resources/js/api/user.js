import axios from "axios"

const userRequest = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})

userRequest.interceptors.request.use(request => {
    return request;
});

export const getUser = () => userRequest.post("user/api/getUser")
export const getUserInfo = () => userRequest.post("user/api/getUserInfo")
export const postUserLogout = () => userRequest.post("user/api/userLogout")
export const postUserLogin = data => userRequest.post("user/api/userLogin", data)
export const postUserRegister = data => userRequest.post('user/api/userRegister', data)


//admin

export const getAllUserInfo = () => userRequest.post("admin/api/getAllUserInfo")
export const postCreateUser = (data) => userRequest.post("admin/api/createUser", data)