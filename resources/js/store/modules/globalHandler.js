import { apiGetCategories, apiGetOwnProfile, apiPostCreateCategory, apiPostUpdateCategory } from "../../api/api";

/*  取得類別、取得user



 */

export default {
    namespaced: true,
    state: {
        categories: {},
        category_groups: {},
    },
    mutations: {
        setCategories: (state, { categories, category_groups = {} }) => {
            // console.log("setCategories", categories);
            state.categories = categories;
            if (category_groups)
                state.category_groups = category_groups;
        },
    },
    actions: {
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
        /* 取得類別 */
        getCategories: async({ commit }) => {
            const { categories, category_groups } = await apiGetCategories();

            // console.log("setCategories", Object.entries(categories));
            commit("setCategories", { categories, category_groups });
        },
        /* 檢查類別 */
        checkCategory: async({ commit }, category) => {
            // console.log("checkCategory", category);
            let msg = "";
            if (!category) msg = "請選擇類別";
            commit(
                "setStatus", {
                    type: "category",
                    msg: msg,
                }, { root: true }
            );
        },
        /* 檢查類別群組 */
        checkCategoryGroup: async({ commit }, category_group) => {
            // console.log("checkCategory", category);
            let msg = "";
            if (!category_group) msg = "請選擇類別群組";
            commit(
                "setStatus", {
                    type: "category_group",
                    msg: msg,
                }, { root: true }
            );
        },
        // 檢查類別名稱
        checkName: async({ commit }, name) => {
            let msg = "";
            if (name.length > 10) msg = "類別名稱最多10字元";
            commit(
                "setStatus", {
                    type: "category_name",
                    msg: msg,
                }, { root: true }
            );
        },
        /* 新增類別 */
        createCategory: async({ dispatch, rootState }, { data, type }) => {
            /* type = category 或 category_group */
            await dispatch("checkName", data.name);
            if (type === 'category')
                await dispatch("checkCategoryGroup", data.category_group_id);

            if (rootState.status !== "error") {
                if (type === 'category_group')
                    delete data.category_group_id;
                data['type'] = type
                await apiPostCreateCategory(data);
            }
        },
        /* 編輯類別 */
        updateCategory: async({ dispatch, rootState }, { data, type }) => {
            /* type = category 或 category_group */
            await dispatch("checkName", data.name);
            if (type === 'category')
                await dispatch("checkCategoryGroup", data.category_group_id);

            if (rootState.status !== "error") {
                if (type === 'category_group')
                    delete data.category_group_id;
                data['type'] = type;
                await apiPostUpdateCategory(data);
            }
        }
    },
    getters: {
        category_menu_lists: (state) => {
            const list = {};
            for (const [key, val] of Object.entries(state.categories)) {
                const obj = {
                    text: key,
                    children: Array.from(val, (x) => ({
                        text: x.name,
                        url_path: x.url_path,
                    })),
                };
                list[key] = obj;
            }
            return list;
        }
    },
    modules: {},
};