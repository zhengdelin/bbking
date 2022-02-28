import { apiGetUserInfo, apiPostCreateUser, apiPostUserLogin, apiPostUserRegister, apiGetAllUserInfo } from "../api/api"
// import {} from "../store"
// const { userLogin } =
import store from "../store/store"
//取得當前userinfo
export const getUserInfo = async() => {
        const res = await apiGetUserInfo();

        return res.data;
    }
    //登入
export const login = async(data) => {
        const res = await apiPostUserLogin(data);
        return res.data;
    }
    //註冊
export const register = async(data) => {
    const res = await apiPostUserRegister(data);
    return res.data;
}


//admin
export const handleCreateUser = async(data) => {
    await handleCheckAccount(data.account)
    await handleCheckPassword(data.password)
    await handleCheckEmail(data.email)
        // console.log(data);
    if (store.state.status !== 'error') {
        const res = await apiPostCreateUser(data);
        store.setStatus(res.data.status, res.data.status_obj);
    }
};
//取得所有欄位資料
export const handleGetAllUserInfo = async() => {
    const res = await apiGetAllUserInfo();
    // console.log(res.data);
    // const keys = res.data ? Object.keys(res.data[0]) : [];
    let datas = res.data
        // res.data.forEach((i) => {
        //     console.log(i);
        //     datas[i.account] = i;
        // });

    // return { keys, datas };
    return { datas };
};
//處理欄位格式
export const handleCheckAccount = async(account) => {
    // console.log('handle checkaccount');
    let error = [];
    if (!account) {
        error.push("帳號欄位不能為空");
    } else {
        const accountformat = /^\w+([\.-]?\w+)*/;
        if (!account.match(accountformat)) error.push("帳號格式錯誤");
        if (account.length > 20) error.push("帳號不能大於20位數");
    }
    store.setStatus("error", error, "account");
};
export const handleCheckPassword = async(password, check_password) => {
    let error = [];
    if (!password) {
        error.push("密碼欄位不能為空");
    } else {
        if (password.length > 30)
            error.push("密碼不能大於30位數");
    }
    store.setStatus("error", error, "password");
    // console.log(check_password);
    if (check_password !== undefined)
        handleCheckAgainPassword(password, check_password);
};
export const handleCheckAgainPassword = async(password, check_password) => {
    let error = [];
    // console.log(password);
    // console.log(check_password);
    if (!check_password) {
        error.push("請再次確認密碼");
    } else if (password !== check_password)
        error.push("密碼不相同");
    store.setStatus("error", error, "check_password");
};
export const handleCheckEmail = async(email) => {
    let error = [];
    if (!email) {
        error.push("請填寫Email欄位");
    } else {
        if (email.length > 30) {
            error.push("Email不能大於30位數");
        } else {
            const mailformat = /^\w+([\.-]?\w+)*@gmail.com$/;
            if (!email.match(mailformat)) error.push("Email格式錯誤");
        }
    }
    store.setStatus("error", error, "email");
};
export const handleCheckName = async(name) => {
    let error = [];
    if (name.length > 10)
        error.push("姓名最多10字元");
    store.setStatus("error", error, "name");
};
export const handleCheckPhone = async(phone) => {
    let error = [];
    if (phone.length === 10 || phone.length === 9) {
        const phoneformat = /0?\d{9}$/;
        if (!phone.match(phoneformat)) error.push("請輸入正確的手機號");

    } else {
        error.push("請輸入10位或9位數字")
    }
    store.setStatus("error", error, "phone");
};
export const handleCheckAddress = async(address) => {
    let error = []
    if (address.length > 50) error.push("地址最多50字元");
    store.setStatus("error", error, "address");
};