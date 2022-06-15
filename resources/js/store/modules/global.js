import { router } from "../../router/router";
import { after_login_routes } from "../../router/after_login_routes";
import { admin_routes } from "../../router/admin_routes";
import { boss_routes } from "../../router/boss_routes";
/* 處理全局state

設置userToken、userInfo、storage、清除user、
設定error、設定api error、清除error
 */
export default {
    state: {
        token: "",
        is_login: false,
        is_init: false,
        user_info: {},
        status: "",
        success_msgs: [],
        status_msgs: {},
        keep_alive: [
            "AdminMembers",
            "AdminArticles",
            "AdminProducts",
            "AdminCategories",
        ],
        nav: {
            home: {
                text: "首頁",
                route: { name: "home" },
            },
            articles: {
                text: "文章介紹",
                route: { name: "article-list" },
            },
            products: {
                text: "產品",
                route: { name: "product-list" },
            },
            about: {
                text: "關於我們",
                route: { name: "about" },
            },
            login: {
                text: "登入",
                route: { name: "user-login" },
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
            /* 
            msg:訊息，
            type:錯誤類型，ex:account、password...、api
            status:狀態，error,400,200
             */
            state.status =
                status === 200 ? "success" : status === 400 ? "error" : status;
            if (status === 200) {
                state.success_msgs = [...state.success_msgs, msg];
            } else {
                state.status_msgs["api"] = "";
                state.status_msgs[type] = msg;
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
            }
        },
        /* 清除error */
        /* 清除所有狀態 */
        clearStatus: (state) => {
            // console.log("clearStatus",Date(new Date().getTime()));
            state.status = "";
            state.status_msgs = {};
            state.success_msgs = [];
        },
        init: (state) => {
            state.is_init = true;
        },
        unInit: (state) => {
            state.is_init = false;
        },
        /* 設定導覽列 */
        setNav: (state, type) => {
            if (type === "init") {
                delete state.nav.user;
                if (state.nav.admin) delete state.nav.admin;
                state.nav["login"] = {
                    text: "登入",
                    route: { name: "user-login" },
                };
            } else if (type === "login") {
                delete state.nav.login;
                state.nav["user"] = {
                    text: "會員專區",
                    route: { name: "user" },
                };
            } else if (type === "admin") {
                state.nav["admin"] = {
                    text: "後臺管理",
                    route: { name: "admin-members" },
                };
            }
        },
        setArticleProductRoute: (state, first_category) => {
            // state.nav.articles.route.path = "/articles/" + first_category;
            // state.nav.products.route.path = "/products/" + first_category;
        },
    },
    actions: {
        //設定文章和產品的路由位置為第一個類別
        setArticleProductRoute: async ({ commit }, first_category) => {
            commit("setArticleProductRoute", first_category);
        },
        //更新user狀態,包括token,storage,userinfo
        updateUserStatus: async (
            { commit, dispatch },
            { token = null, user_info, remember }
        ) => {
            // console.log('updateUserStatus->', token, user_info, remember);
            //state.token
            if (token) {
                commit("setUserToken", token);
                //localStorage or sessionStorage
                commit("saveToStorage", {
                    token: token,
                    remember: remember,
                });
            }
            //state.userinfo
            commit("setUserInfo", user_info);

            await dispatch("addRoute");
        },
        /* 添加路由 */
        addRoute: async ({ state, commit }) => {
            const not_found_route = {
                path: "/:pathMatch(.*)*",
                name: "NotFound",
                meta: {
                    title: "not found",
                },
                component: () => import("../../Pages/404"),
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
                        if (state.user_info.role_id === 3)
                            admin_routes.children = [
                                ...admin_routes.children,
                                ...boss_routes,
                            ];
                        router.addRoute(admin_routes);

                        commit("setNav", "admin");
                    }
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
        /* 確認登陸狀況 未登錄就跳轉 */
        checkIsLogin: ({ state, commit }) => {
            if (!state.is_login) {
                commit("setStatus", {
                    type: "login",
                    msg: "請先登入再進行操作",
                });
                router.push({ name: "user-login" });
            }
        },
        /* 將圖片讀成base64 */
        readImageAsDataUrl: ({}, file) =>
            new Promise((resolve, reject) => {
                /* new file reader */
                let fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = () => resolve(fileReader.result);
                fileReader.onerror = (error) => reject(error);
            }),
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
