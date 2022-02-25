import axios from "axios"

const userRequest = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})

// userRequest.interceptors.response.use(response => {
//     return response;
// };

export const getUser = () => userRequest.post("getUser")
export const getUserInfo = () => userRequest.post("/getUserInfo")
export const postUserLogout = () => userRequest.post("userLogout")
export const postUserLogin = data => userRequest.post("userLogin", data)
export const postUserRegister = data => userRequest.post('userRegister', data)