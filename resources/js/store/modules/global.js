import { router } from "../../router/router";
import { after_login_routes } from "../../router/after_login_routes";
import { admin_routes } from "../../router/admin_routes";
import { boss_routes } from "../../router/boss_routes";
import { useRoute } from "vue-router";
/* 處理全局state

設置userToken、userInfo、storage、清除user、
設定error、設定api error、清除error
 */
export default {
    state: {
        user: "",
        token: "",
        is_login: false,
        is_init: false,
        user_info: {},
        status: "",
        status_msgs: {},
        exception_error: false,
        keep_alive: [
            "AdminMembers",
            "AdminArticles",
            "AdminProducts",
            "AdminCategories",
        ],
        nav: {
            home: {
                text: "首頁",
                router_name: "home",
            },
            article: {
                text: '文章',
                router_name: "article",
            },
            login: {
                text: "登入",
                router_name: "user-login",
            },
        },


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
        setStatus: (state, { msg = "", type = "api", status = "error" }) => {
            state.status =
                status === 200 ? "success" : status === 400 ? "error" : status;
            state.status_msgs["api"] = "";
            state.status_msgs[type] = msg;
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
            if (type !== "api" && state.status_msgs) {
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
        init: (state) => {
            state.is_init = true;
        },
        unInit: (state) => {
            state.is_init = false;
        },
        setNav: (state, type) => {
            if (type === "init") {
                delete state.nav.user;
                if (state.nav.admin) delete state.nav.admin;
                state.nav['login'] = {
                    text: "登入",
                    router_name: "user-login"
                };
            } else if (type === "login") {
                delete state.nav.login;
                state.nav["user"] = {
                    text: "會員專區",
                    router_name: "user",
                };
            } else if (type === "admin") {
                state.nav["admin"] = {
                    text: "後臺管理",
                    router_name: "admin-members",
                };
            }
        },
    },
    actions: {
        //更新user狀態,包括token,storage,userinfo
        updateUserStatus: async({ commit, dispatch }, { token, user_info, remember }) => {
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
            await dispatch("addRoute");
        },
        addRoute: async({ state, commit }) => {
            const not_found_route = {
                path: "/:pathMatch(.*)*",
                name: "NotFound",
                meta: {
                    title: "not found",
                },
                component: () =>
                    import ("../../Pages/404"),
            };
            if (state.is_login) {
                //先移除404
                router.removeRoute("NotFound");
                after_login_routes.forEach((i) => {
                    router.addRoute(i);
                });
                commit("setNav", "login");
                //設置nav
                if (!state.init) {
                    // console.log('addroute');

                    if (state.user_info.role_id >= 2) {
                        if (state.user_info.role_id === 2)
                            admin_routes.forEach((i) => router.addRoute(i));
                        else if (state.user_info.role_id === 3)
                            [...boss_routes, ...admin_routes].forEach((i) =>
                                router.addRoute(i)
                            );

                        commit("setNav", "admin");
                    }
                    router.addRoute(not_found_route);
                    commit("init");
                }
                router.addRoute(not_found_route);
                // console.log(router);
                // router.push({ name: router.currentRoute.value.name })
            } else {
                commit("unInit");
                commit("setNav", "init");
            }
        },
    },
    getters: {
        getToken: (state) => {
            // console.log('getUser');
            return state.token;
        },
        getStatus: (state) => {
            return state.status;
        },
    },
};