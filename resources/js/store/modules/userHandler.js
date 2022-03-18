import {
    apiGetUserMember,
    apiPostUserLogin,
    apiPostUserRegister,
    apiPostUserLogout,
    apiPostUpdateOwnProfile,
    apiPostCreateUserMember,
    apiPostUpdateUserMember,
} from "../../api/api";

export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        //登入
        login: async({ dispatch }, data) => {
            const { token, user_info } = await apiPostUserLogin(data);
            if (token && user_info) {
                dispatch(
                    "updateUserStatus", {
                        token: token,
                        user_info: user_info,
                        remember: data.remember,
                    }, { root: true }
                );
            }
        },
        //註冊
        register: async({ rootState, dispatch }, data) => {
            if (rootState.status !== "error") {
                const { token, user_info } = await apiPostUserRegister(data);
                if (token && user_info) {
                    dispatch(
                        "updateUserStatus", {
                            token: token,
                            user_info: user_info,
                            remember: data.remember,
                        }, { root: true }
                    );
                }
            }
        },
        /* 登出 */
        logout: async({ commit, dispatch }) => {
            if (confirm("確認登出?")) {
                await apiPostUserLogout().then(() => {
                    commit("clearUser", {}, { root: true });
                    dispatch("addRoute", {}, { root: true });
                });
            }
        },
        updateOwnProfile: async({ rootState, dispatch }, data) => {
            await Promise.all([
                dispatch("checkAccount", data.account),
                dispatch("checkEmail", data.email),
                dispatch("checkName", data.name),
                dispatch("checkPhone", data.phone),
                dispatch("checkAddress", data.address),
            ]);
            if (rootState.status !== "error") {
                await apiPostUpdateOwnProfile(data);
            }
        },
    },
    getters: {},
    modules: {
        check__format: {
            actions: {
                //帳號
                checkAccount: async({ commit }, account) => {
                    let msg = "";
                    const accountformat = /^\w+([\.-]?\w+)*/;
                    if (!account) msg = "帳號欄位不能為空";
                    else if (account.length > 20) msg = "帳號不能大於20位數";
                    else if (!account.match(accountformat))
                        msg = "帳號格式錯誤";
                    commit(
                        "setStatus", {
                            type: "account",
                            msg: msg,
                        }, { root: true }
                    );
                },
                //密碼
                checkPassword: async({ dispatch, commit }, { password, check_password = undefined }) => {
                    let msg = "";
                    if (!password) msg = "密碼欄位不能為空";
                    else if (password.length > 30) msg = "密碼不能大於30位數";
                    commit(
                        "setStatus", {
                            type: "password",
                            msg: msg,
                        }, { root: true }
                    );
                    // console.log(check_password);
                    if (check_password !== undefined)
                        dispatch("checkAgainPassword", {
                            password,
                            check_password,
                        });
                },
                //再次確認密碼
                checkAgainPassword: async({ commit }, { password, check_password }) => {
                    let msg = "";
                    // console.log(password);
                    // console.log(check_password);
                    if (!check_password) msg = "請再次確認密碼";
                    else if (password !== check_password) msg = "密碼不相同";
                    commit(
                        "setStatus", {
                            type: "check_password",
                            msg: msg,
                        }, { root: true }
                    );
                },
                // email
                checkEmail: async({ commit }, email) => {
                    let msg = "";
                    const mailformat = /^\w+([\.-]?\w+)*@gmail.com$/;
                    if (!email) msg = "請填寫Email欄位";
                    else if (email.length > 30) msg = "Email不能大於30位數";
                    else if (!email.match(mailformat)) msg = "Email格式錯誤";
                    commit(
                        "setStatus", {
                            type: "email",
                            msg: msg,
                        }, { root: true }
                    );
                },
                // 名字
                checkName: async({ commit }, name) => {
                    let msg = "";
                    if (name.length > 10) msg = "姓名最多10字元";
                    commit(
                        "setStatus", {
                            type: "name",
                            msg: msg,
                        }, { root: true }
                    );
                },
                // 電話
                checkPhone: async({ commit }, phone) => {
                    let msg = "";
                    const phoneformat = /[0-9]{8,10}/;
                    if (phone) {
                        if (!phone.toString().match(phoneformat))
                            msg = "請輸入正確的手機號";
                    }
                    commit(
                        "setStatus", {
                            type: "phone",
                            msg: msg,
                        }, { root: true }
                    );
                },
                // 地址
                checkAddress: async({ commit }, address) => {
                    let msg = "";
                    if (address.length > 50) msg = "地址最多50字元";
                    commit(
                        "setStatus", {
                            type: "address",
                            msg: msg,
                        }, { root: true }
                    );
                },
            },
        },
        admin: {
            actions: {
                getUserMember: async() => {
                    const { all_user_info } = await apiGetUserMember();
                    return all_user_info ? all_user_info : [];
                },
                createUserMember: async({ rootState, dispatch }, data) => {
                    // console.log("createUser", data);
                    await Promise.all([
                        dispatch("checkAccount", data.account),
                        dispatch("checkPassword", {
                            password: data.password,
                        }),
                        dispatch("checkEmail", data.email),
                        dispatch("checkName", data.name),
                        dispatch("checkPhone", data.phone),
                        dispatch("checkAddress", data.address),
                    ]);
                    if (rootState.status !== "error") {
                        await apiPostCreateUserMember(data);
                    }
                },
                updateUserMember: async({ rootState }, data) => {
                    await Promise.all([
                        dispatch("checkAccount", data.account),
                        dispatch("checkEmail", data.email),
                        dispatch("checkName", data.name),
                        dispatch("checkPhone", data.phone),
                        dispatch("checkAddress", data.address),
                    ]);
                    if (rootState.status !== "error") {
                        await apiPostUpdateUserMember(data);
                    }
                },
            },
        },
    },
};