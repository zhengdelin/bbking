import {
    apiPostCreateUserMember,
    apiPostUserLogin,
    apiPostUserRegister,
    apiGetUserMember,
    apiPostUpdateUserMember,
} from "../../api/api";

export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        //登入
        handleLogin: async({ dispatch, commit }, data) => {
            try {
                const res = await apiPostUserLogin(data);
                console.log(res);
                dispatch(
                    "setStatus", {
                        status_type: res.data.status,
                        item: res.data.status_obj,
                    }, { root: true }
                );
                // console.log("userHandler/handleLogin1->", res);
                if (res.data.status === 200) {
                    dispatch(
                        "updateUserStatus", {
                            token: res.data.data.token,
                            user_info: res.data.data.user_info,
                            remember: data.remember,
                        }, { root: true }
                    );
                }
            } catch (error) {
                commit("exceptionOccur", error, { root: true });
            }
        },
        //註冊
        handleRegister: async({ rootState, dispatch, commit }, data) => {
            if (rootState.status !== "error") {
                try {
                    const res = await apiPostUserRegister(data);
                    dispatch(
                        "setStatus", {
                            status_type: res.data.status,
                            item: res.data.status_obj,
                        }, { root: true }
                    );
                    if (res.data.status === 200) {
                        dispatch(
                            "updateUserStatus", {
                                token: res.data.data.token,
                                user_info: res.data.data.user_info,
                                remember: data.remember,
                            }, { root: true }
                        );
                    }
                } catch (error) {
                    commit("exceptionOccur", error, { root: true });
                }
            }
        },
        handleUpdateUser: async({ rootState, dispatch }, data) => {
            if (rootState.status !== "error") {
                const res = await apiPostUpdataUser(data);
                dispatch(
                    "setStatus", {
                        status_type: res.data.status,
                        item: res.data.status_obj,
                    }, { root: true }
                );
                if (res.data.status === 200) return true;
            }
            return false;
        },
    },
    getters: {},
    modules: {
        check_userinfo_format: {
            actions: {
                //帳號
                handleCheckAccount: async({ dispatch }, { account }) => {
                    console.log("handleCheckAccount", account);
                    let error = [];
                    if (!account) {
                        error.push("帳號欄位不能為空");
                    } else {
                        const accountformat = /^\w+([\.-]?\w+)*/;
                        if (!account.match(accountformat))
                            error.push("帳號格式錯誤");
                        if (account.length > 20)
                            error.push("帳號不能大於20位數");
                    }
                    // store.setStatus("error", error, "account");
                    dispatch(
                        "setStatus", {
                            status_type: "error",
                            item: error,
                            error_type: "account",
                        }, { root: true }
                    );
                },
                //密碼
                handleCheckPassword: async({ dispatch }, { password, check_password }) => {
                    let error = [];
                    if (!password) {
                        error.push("密碼欄位不能為空");
                    } else {
                        if (password.length > 30)
                            error.push("密碼不能大於30位數");
                    }
                    dispatch(
                        "setStatus", {
                            status_type: "error",
                            item: error,
                            error_type: "password",
                        }, { root: true }
                    );
                    // console.log(check_password);
                    if (check_password !== undefined)
                        dispatch("handleCheckAgainPassword", {
                            password,
                            check_password,
                        });
                },
                //再次確認密碼
                handleCheckAgainPassword: async({ dispatch }, { password, check_password }) => {
                    let error = [];
                    // console.log(password);
                    // console.log(check_password);
                    if (!check_password) {
                        error.push("請再次確認密碼");
                    } else if (password !== check_password)
                        error.push("密碼不相同");
                    dispatch(
                        "setStatus", {
                            status_type: "error",
                            item: error,
                            error_type: "check_password",
                        }, { root: true }
                    );
                },
                // email
                handleCheckEmail: async({ dispatch }, { email }) => {
                    let error = [];
                    if (!email) {
                        error.push("請填寫Email欄位");
                    } else {
                        if (email.length > 30) {
                            error.push("Email不能大於30位數");
                        } else {
                            const mailformat = /^\w+([\.-]?\w+)*@gmail.com$/;
                            if (!email.match(mailformat))
                                error.push("Email格式錯誤");
                        }
                    }
                    dispatch(
                        "setStatus", {
                            status_type: "error",
                            item: error,
                            error_type: "email",
                        }, { root: true }
                    );
                },
                // 名字
                handleCheckName: async({ dispatch }, { name }) => {
                    let error = [];
                    if (name.length > 10) error.push("姓名最多10字元");
                    dispatch(
                        "setStatus", {
                            status_type: "error",
                            item: error,
                            error_type: "name",
                        }, { root: true }
                    );
                },
                // 電話
                handleCheckPhone: async({ dispatch }, { phone }) => {
                    let error = [];
                    if (phone.length === 10 || phone.length === 9) {
                        const phoneformat = /0?\d{9}$/;
                        if (!phone.match(phoneformat))
                            error.push("請輸入正確的手機號");
                    } else {
                        error.push("請輸入10位或9位數字");
                    }
                    dispatch(
                        "setStatus", {
                            status_type: "error",
                            item: error,
                            error_type: "phone",
                        }, { root: true }
                    );
                },
                // 地址
                handleCheckAddress: async({ dispatch }, { address }) => {
                    let error = [];
                    if (address.length > 50) error.push("地址最多50字元");
                    dispatch(
                        "setStatus", {
                            status_type: "error",
                            item: error,
                            error_type: "address",
                        }, { root: true }
                    );
                },
            },
        },
        admin: {
            actions: {
                handleGetUserMember: async() => {
                    const res = await apiGetUserMember();
                    return res.data.all_user_info;
                },
                handleCreateUserMember: async({ rootState, dispatch, commit },
                    data
                ) => {
                    // console.log("handleCreateUser", data);
                    await dispatch("handleCheckAccount", {
                        account: data.account,
                    });
                    await dispatch("handleCheckPassword", {
                        password: data.password,
                    });
                    await dispatch("handleCheckEmail", { email: data.email });
                    if (rootState.status !== "error") {
                        try {
                            const res = await apiPostCreateUserMember(data);
                            dispatch(
                                "setStatus", {
                                    status_type: res.data.status,
                                    item: res.data.status_obj,
                                }, { root: true }
                            );
                        } catch (error) {
                            commit("exceptionOccur", error, { root: true });
                        }
                    }
                },
                handleUpdateUserMember: async({ dispatch, rootState, commit },
                    data
                ) => {
                    // console.log("handleUpdateUserMember", data);
                    if (rootState.status !== "error") {
                        try {
                            const res = await apiPostUpdateUserMember(data);
                            dispatch(
                                "setStatus", {
                                    status_type: res.data.status,
                                    item: res.data.status_obj,
                                }, { root: true }
                            );
                        } catch (error) {
                            commit("exceptionOccur", error, { root: true });
                        }
                    }
                },
            },
        },
    },
};