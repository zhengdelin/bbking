import { apiGetUserInfo, apiPostUserLogin, apiPostUserRegister } from "../api/api"
// import {} from "../store"
// const { userLogin } =

export const getUserInfo = async() => {
    const res = await apiGetUserInfo();
    return res.data;
}
export const login = async(data) => {
    const res = await apiPostUserLogin(data);
    return res.data;
}
export const register = async(data) => {
    const res = await apiPostUserRegister(data);
    return res.data;
}
export const checkName = async(name) => {
    let error = [];
    if (name.length > 10)
        error.push("姓名最多10字元");
    return error;
}
export const checkPhone = async(phone) => {
    let error = [];
    if (phone.length > 15) error.push("手機號碼最多15字元");
    const phoneformat = /^\d+([-]?\d+)?([-]?\d+)?$/;
    if (!phone.match(phoneformat)) error.push("手機號碼格式錯誤");
    return error;
}
export const checkAccount = async(account) => {
    // console.log('checkAccount', account)
    let error = [];
    if (!account) {
        error.push("帳號欄位不能為空");
    } else {
        const accountformat = /^\w+([\.-]?\w+)*/;
        if (!account.match(accountformat)) error.push("帳號格式錯誤");
        if (account.length > 20) error.push("帳號不能大於20位數");
    }
    return error;
}
export const checkPassword = async(password) => {
    let error = [];
    if (!password) {
        error.push("密碼欄位不能為空");
    } else {
        if (password.length > 30)
            error.push("密碼不能大於30位數");
    }
    return error;
}
export const checkAgainPassword = async(password, check_password) => {
    let error = [];
    // console.log(password, check_password);
    if (!check_password) {
        error.push("請再次確認密碼");
    } else if (password !== check_password)
        error.push("密碼不相同");

    return error;
}
export const checkEmail = async(email) => {
    let error = [];
    if (!email) {
        error.push("請填寫Email欄位");
    } else {
        const mailformat = /^\w+([\.-]?\w+)*@gmail.com$/;
        if (!email.match(mailformat)) error.push("Email格式錯誤");
        if (email.length > 30) error.push("Email不能大於30位數");
    }
    return error;
}
export const checkAddress = async(address) => {
    let error = []
    if (address.length > 50) error.push("地址最多50字元");
    return error;
}