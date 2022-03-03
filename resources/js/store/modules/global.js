import { apiPostUserLogout, apiGetOwnProfile } from "../../api/api";

//全局
export default {
    state: {
        user: "",
        token: "",
        is_login: false,
        user_info: {},
        status: "",
        status_msg: "",
        errors: {},
        exception_error: false,
    },
    mutations: {
        setUserToken: (state, token) => {
            state.token = token;
            state.is_login = true;
        },

        saveToStorage: (state, { token, remember }) => {
            //remember false to sessionStorage
            //remember true to localStorage
            if (remember) {
                // console.log('saveTOLocalStorage->token:', token);
                localStorage.setItem("token", token);
            } else {
                localStorage.removeItem('token')
                sessionStorage.setItem("token", token);
            }
        },
        setUserInfo(state, user_info) {
            state.user_info = user_info;
        },
        clearUser: (state) => {
            state.token = "";
            localStorage.removeItem("token");
            sessionStorage.removeItem("token");
            state.is_login = false;
        },

        setErrors: (state, { error_type, item }) => {
            // console.log("store.setErrors->", state, payload);
            // const {} = payload;
            state.status = "error";
            state.errors[error_type] = item;
        },
        setStatus: (state, { status, msg }) => {
            // console.log("setStatus->", payload);
            state.status = status;
            state.status_msg = msg;
        },
        clearErrors: (state) => {
            state.errors = {};
        },
        clearApiError: (state) => {
            state.status_msg = "";
        },
        clearStatus: (state) => {
            // console.log("clearStatus");
            state.status = "";
            state.status_msg = "";
            state.errors = {};
        },
        exceptionOccur: (state, error) => {
            state.exception_error = true;
            console.log(
                "----------------------exceptionOccur---------------------------"
            );
            console.log(error);
            console.log(
                "----------------------exceptionOccur---------------------------"
            );
        },
    },
    actions: {
        //更新user狀態,包括token,storage,userinfo
        updateUserStatus: async({ commit }, { token, user_info, remember }) => {
            // console.log('updateUserStatus->', token, user_info, remember);
            //state.token
            commit("setUserToken", token);
            //state.userinfo
            commit("setUserInfo", user_info);
            //localStorage or sessionStorage
            commit("saveToStorage", {
                token: token,
                remember: remember,
            });
        },
        //每次進來畫面時如果localstorage有token就請求token是否過期、正確
        getUser: async({ commit, dispatch }) => {
            const token = localStorage.getItem("token");
            if (token) {
                commit("setUserToken", token);
                try {
                    const res = await apiGetOwnProfile();
                    // console.log("store.getUser->", token, res);
                    if (res.data.status === 200) {
                        //如果success,更新user狀態(token)
                        dispatch("updateUserStatus", {
                            token: res.data.data.token,
                            user_info: res.data.data.user_info,
                            remember: 1,
                        });
                    } else {
                        //如果fail,清除user
                        commit("clearUser");
                    }
                } catch (error) {
                    commit("exceptionOccur", error);
                }
            }
        },
        userLogout: ({ commit }) => {
            if (confirm("確認登出?")) {
                try {
                    apiPostUserLogout();
                    commit("clearUser");
                } catch (error) {
                    commit("exceptionOccur", error);
                }
            }
        },
        setStatus: async({ commit, dispatch }, { status_type, item, error_type }) => {
            //200表示成功
            // console.log(payload);
            if (status_type === 200) {
                commit("clearErrors");
                commit("setStatus", { status: "success", msg: item });
            } else {
                //error 表示前端攔截的error
                if (status_type === "error") {
                    commit("setErrors", { error_type: error_type, item: item });
                    commit("clearApiError");
                } else if (status_type === 400) {
                    //400表示後端回傳的error
                    commit("clearErrors");
                    commit("setStatus", { status: "error", msg: item });
                }
                dispatch("confirmErrorStatus");
            }
        },
        confirmErrorStatus: async({ state, commit }) => {
            let arr = [];
            arr = Object.values(state.errors).map((item) => item.length);
            const num = arr.reduce((a, b) => a + b, 0);
            // console.log("confirmErrorStatus", arr, state);
            if (!num) commit("clearStatus");
        },
    },
    getters: {
        getToken: (state) => {
            // console.log('getUser');
            return state.token;
        },
    },
};