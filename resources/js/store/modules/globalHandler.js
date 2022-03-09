import { apiGetCategories, apiGetOwnProfile } from "../../api/api";
/*  取得類別、取得user



 */

export default {
    namespaced: true,
    state: {
        categories: {},
    },
    mutations: {
        setCategories: (state, categories) => {
            // console.log("setCategories", categories);
            state.categories = categories;
        },
    },
    actions: {
        /* 取得類別 */
        getCategories: async({ commit }) => {
            const { categories } = await apiGetCategories();
            // console.log("setCategories", res);
            commit("setCategories", categories);
        },
        /* 每次進來畫面時如果localstorage有token就請求token是否過期、正確 */
        getUser: async({ commit, dispatch }) => {
            const user_token = localStorage.getItem("token");
            if (user_token) {
                //如果有token將token放入state
                commit("setUserToken", user_token, { root: true });
                //向後端要求驗證token
                const { token, user_info } = await apiGetOwnProfile();
                // console.log("getUser->", user_info, token);
                if (token && user_info) {
                    //如果success,更新user狀態(token)
                    dispatch(
                        "updateUserStatus", {
                            token,
                            user_info,
                            remember: 1,
                        }, { root: true }
                    );
                } else {
                    //如果fail,清除user
                    commit("clearUser", {}, { root: true });
                }
            }
        },
    },
    getters: {},
    modules: {},
};