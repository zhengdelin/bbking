/* 處理全局state

設置userToken、userInfo、storage、清除user、
設定error、設定api error、清除error
 */
export default {
    state: {
        user: "",
        token: "",
        is_login: false,
        user_info: {},
        status: "",
        status_msgs: {},
        exception_error: false,
    },
    mutations: {
        /* 設定user token 登入 */
        setUserToken: (state, token) => {
            state.token = token;
            state.is_login = true;
        },
        /* 將token存至storage */
        saveToStorage: (state, { token, remember }) => {
            //remember false to sessionStorage
            //remember true to localStorage
            if (remember) {
                // console.log('saveTOLocalStorage->token:', token);
                localStorage.setItem("token", token);
            } else {
                localStorage.removeItem("token");
                sessionStorage.setItem("token", token);
            }
        },
        /* 設定user_info */
        setUserInfo(state, user_info) {
            state.user_info = user_info;
        },
        /* 清除所有user */
        clearUser: (state) => {
            state.token = "";
            localStorage.removeItem("token");
            sessionStorage.removeItem("token");
            state.is_login = false;
        },
        /* 設定全域status */
        setStatus: (state, { msg, type = "api", status = "error" }) => {
            state.status =
                status === 200 ? "success" : status === 400 ? "error" : status;
            state.status_msgs[type] = msg || "";
            // console.log(
            //     "setstatus->",
            //     ",msg->",
            //     msg,
            //     "type->",
            //     type,
            //     "status->",
            //     status,
            //     state
            // );
            if (type !== "api") {
                const num = Object.values(state.status_msgs).reduce(
                    (acc, val) => {
                        return acc + val.length;
                    },
                    0
                );
                // console.log("num->", num);
                if (!num) state.status = "";
            }
        },
        /* 清除error */
        /* 清除所有狀態 */
        clearStatus: (state) => {
            // console.log("clearStatus");
            state.status = "";
            state.status_msgs = {};
        },
        /* 例外狀況 */
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
    },
    getters: {
        getToken: (state) => {
            // console.log('getUser');
            return state.token;
        },
        getStatus: (state) => {
            return state.status;
        }
    },
};