import { computed, reactive } from "vue";
import {
    apiGetActivityImgs,
    apiGetAllActivityImgs,
    apiGetCategories,
    apiGetOwnProfile,
    apiGetAllStoreInfos,
    apiPostCreateActivityImg,
    apiPostCreateCategory,
    apiPostUpdateActivityImg,
    apiPostUpdateCategory,
    apiPostCreateStoreInfo,
    apiPostUpdateStoreInfo,
    apiGetStoreInfos,
    apiGetSearch,
    apiGetNews,
} from "../../api/api";
import { router } from "../../router/router";
/*  取得類別、取得user



 */

export default {
    namespaced: true,
    state: {
        categories: [],
        category_groups: {},
        activity_imgs: {},
        store_infos: [],
        news: null,
    },
    mutations: {
        setCategories: (state, { categories, category_groups = {} }) => {
            // console.log("setCategories", Object.values(categories)[0][0].eng_name);
            state.categories = categories;
            if (category_groups) state.category_groups = category_groups;
        },
        setActivityImgs: (state, activity_imgs) => {
            state.activity_imgs = activity_imgs;
        },
        setStoreInfos: (state, store_infos) => {
            state.store_infos = store_infos.reduce((acc, val) => {
                acc[val.id] = val;
                return acc;
            }, {});
        },
        setNews: (state, { articles, products }) => {
            state.news = { articles, products };
        },
    },
    actions: {
        /* 每次進來畫面時如果localstorage有token就請求token是否過期、正確 */
        getUser: async ({ commit, dispatch }) => {
            const user_token = localStorage.getItem("token");
            if (user_token) {
                //如果有token將token放入state
                commit("setUserToken", user_token, { root: true });
                //向後端要求驗證token
                const { status, user_info } = await apiGetOwnProfile();
                // console.log("getUser->", user_info, token);
                if (status === 200) {
                    //如果success,更新user info
                    await dispatch(
                        "updateUserStatus",
                        {
                            user_info,
                            remember: 1,
                        },
                        { root: true }
                    );
                } else {
                    //如果fail,清除user
                    commit("clearUser", {}, { root: true });
                }
            }
        },
        /* 取得類別 */
        getCategories: async ({ commit, dispatch, getters }) => {
            const { categories, category_groups } = await apiGetCategories();

            // console.log("setCategories", Object.entries(categories));
            commit("setCategories", { categories, category_groups });
            await dispatch("setArticleProductRoute", getters.first_category, {
                root: true,
            });
        },
        /* 檢查類別 */
        checkCategory: async ({ commit }, category) => {
            // console.log("checkCategory", category);
            let msg = "";
            if (!category) msg = "請選擇類別";
            commit(
                "setStatus",
                {
                    type: "category",
                    msg: msg,
                },
                { root: true }
            );
        },
        /* 檢查類別群組 */
        checkCategoryGroup: async ({ commit }, category_group) => {
            // console.log("checkCategory", category);
            let msg = "";
            if (!category_group) msg = "請選擇類別群組";
            commit(
                "setStatus",
                {
                    type: "category_group",
                    msg: msg,
                },
                { root: true }
            );
        },
        // 檢查類別名稱
        checkName: async ({ commit }, name) => {
            let msg = "";
            if (!name) msg = "請填寫類別名稱";
            else if (name.length > 10) msg = "類別名稱最多10字元";
            commit(
                "setStatus",
                {
                    type: "name",
                    msg: msg,
                },
                { root: true }
            );
        },
        // 檢查類別英文名稱
        checkEngName: async ({ commit }, eng_name) => {
            let msg = "";
            if (!eng_name) msg = "請填寫類別英文名稱";
            else if (eng_name.length > 30) msg = "英文名稱最多30字元";
            commit(
                "setStatus",
                {
                    type: "eng_name",
                    msg: msg,
                },
                { root: true }
            );
        },
        /* 新增類別 */
        createCategory: async ({ dispatch, rootState }, { data, type }) => {
            /* type = category 或 category_group */
            await dispatch("checkName", data.name);
            if (type === "category") {
                await Promise.all([
                    dispatch("checkCategoryGroup", data.category_group_id),
                    dispatch("checkEngName", data.eng_name),
                ]);
            }
            if (rootState.status !== "error") {
                if (type === "category_group") delete data.category_group_id;
                data["type"] = type;
                await apiPostCreateCategory(data);
            }
        },
        /* 編輯類別 */
        updateCategory: async ({ dispatch, rootState }, { data, type }) => {
            /* type = category 或 category_group */
            await dispatch("checkName", data.name);
            if (type === "category") {
                await Promise.all([
                    dispatch("checkCategoryGroup", data.category_group_id),
                    dispatch("checkEngName", data.eng_name),
                ]);
            }

            if (rootState.status !== "error") {
                if (type === "category_group") delete data.category_group_id;
                data["type"] = type;
                await apiPostUpdateCategory(data);
            }
        },
        /* 確認圖片 */
        checkActivityImg: async ({ commit }, file) => {
            const image_format = /\.(png|jpe?g|gif|svg)(\?.*)?$/;
            let msg = "";
            if (typeof file === "string") {
                if (!file.match(image_format)) msg = "圖片格式錯誤";
            } else if (!(file && file["type"].split("/")[0] === "image")) {
                msg = "請選擇圖片";
            }
            commit(
                "setStatus",
                {
                    type: "img",
                    msg: msg,
                },
                { root: true }
            );
        },
        /* 取得活動圖片 */
        getActivityImgs: async ({ commit }) => {
            const { activity_imgs } = await apiGetActivityImgs();
            commit("setActivityImgs", activity_imgs);
            return activity_imgs;
        },
        /* 取得所有活動圖片(管理員) */
        getAllActivityImgs: async () => {
            const { activity_imgs } = await apiGetAllActivityImgs();
            return activity_imgs;
        },
        /* 新增活動圖片 */
        createActivityImg: async ({ dispatch, rootState }, data) => {
            await dispatch("checkActivityImg", data.image);
            if (rootState.status !== "error") {
                const form_data = new FormData();
                for (const [key, value] of Object.entries(data))
                    form_data.append(key, value);
                // console.log("createProduct", data, form_data.get("image"));
                await apiPostCreateActivityImg(form_data);
            }
        },
        //更新活動圖片
        updateActivityImg: async ({ rootState, dispatch }, data) => {
            await dispatch("checkActivityImg", data.image);
            if (rootState.status !== "error") {
                // console.log('updateProduct', data, typeof(data.image));
                const form_data = new FormData();
                for (const [key, value] of Object.entries(data))
                    form_data.append(key, value);
                await apiPostUpdateActivityImg(form_data);
            }
        },
        getStoreInfos: async ({ commit }) => {
            const { store_infos } = await apiGetStoreInfos();
            commit("setStoreInfos", store_infos);
        },
        /* 取得所有店面資訊 */
        getAllStoreInfos: async () => {
            const { store_infos } = await apiGetAllStoreInfos();
            return store_infos;
        },
        // 檢查store info名稱
        checkStoreInfoName: async ({ commit }, name) => {
            let msg = "";
            if (!name) msg = "請填寫店名";
            else if (name.length > 20) msg = "店名最多20字元";
            commit(
                "setStatus",
                {
                    type: "store_info_name",
                    msg: msg,
                },
                { root: true }
            );
        },
        // 檢查store info 營業時間
        checkStoreInfoBH: async ({ commit }, business_hours) => {
            let msg = "";
            if (!business_hours) msg = "請填寫營業時間";
            else if (business_hours.length > 50) msg = "營業時間最多50字元";
            commit(
                "setStatus",
                {
                    type: "business_hours",
                    msg: msg,
                },
                { root: true }
            );
        },
        /* 新增店面資訊 */
        createStoreInfo: async ({ dispatch, rootState }, data) => {
            await Promise.all([
                dispatch("checkActivityImg", data.logo),
                dispatch("checkStoreInfoName", data.name),
                dispatch("checkStoreInfoBH", data.business_hours),
            ]);
            if (rootState.status !== "error") {
                const form_data = new FormData();
                for (const [key, value] of Object.entries(data))
                    form_data.append(key, value);
                // console.log("createProduct", data, form_data.get("image"));
                await apiPostCreateStoreInfo(form_data);
            }
        },
        /* 更新店面資訊 */
        updateStoreInfo: async ({ dispatch, rootState }, data) => {
            await Promise.all([
                dispatch("checkActivityImg", data.logo),
                dispatch("checkStoreInfoName", data.name),
                dispatch("checkStoreInfoBH", data.business_hours),
            ]);
            if (rootState.status !== "error") {
                const form_data = new FormData();
                let nData = JSON.parse(JSON.stringify(data));
                if (typeof nData.logo === "string") {
                    delete nData.logo;
                }
                for (const [key, value] of Object.entries(nData))
                    form_data.append(key, value);
                // console.log("createProduct", data, form_data.get("image"));
                await apiPostUpdateStoreInfo(form_data);
            }
        },
        //搜尋
        search: async (_, search) => {
            const { products = [], articles = [] } = await apiGetSearch({
                search,
            });

            return { products, articles };
        },
        //取得最新文章和產品
        getNews: async ({ commit }) => {
            const { articles = [], products = [] } = await apiGetNews();
            commit("setNews", { articles, products });
        },
    },
    getters: {
        category_map_by_category_group: (state) => {
            return state.categories.reduce((acc, val) => {
                acc[val.category_group_name] =
                    acc[val.category_group_name] || [];
                acc[val.category_group_name].push(val);
                return acc;
            }, {});
        },
        category_map_by_key: (state) => (key) => {
            return state.categories.reduce((acc, val) => {
                acc[val[key]] = val;
                return acc;
            }, {});
        },
        category_menu_lists: (state, getters) => {
            const list = reactive({});
            const path = computed(() => router.currentRoute.value.path);
            const url_base = computed(() => {
                // 層數 /articles => ['','articles']
                const layer = path.value.split("/");
                // console.log("url_base", layer);
                if (path.value === "/") return "/products/";
                else if (layer.length >= 3)
                    return path.value.substring(
                        0,
                        path.value.indexOf("/", 1) + 1
                    );
                else return path.value + "/";
            });
            // console.log("category_menu_lists", path.value, url_base.value, "");
            const category_map_by_category_group =
                getters.category_map_by_category_group;
            for (const key of Object.keys(category_map_by_category_group)) {
                const obj = {
                    text: key,
                    children: Array.from(
                        category_map_by_category_group[key],
                        (x) => {
                            // console.log("x",x);
                            return {
                                ...x,
                                text: x.name,
                                url: url_base.value + x.eng_name,
                            };
                        }
                    ),
                };
                list[key] = obj;
            }
            // console.log(list);
            return list;
        },
        first_category: (state) => {
            return state.categories[0]?.eng_name;
        },

        /* 總部 */
        headquarter: (state) => {
            return (
                Object.values(state.store_infos).find((i) => i.isHeadquarter) ||
                {}
            );
        },
        logo: (state, getters) => {
            return getters.headquarter?.logo;
        },
    },

    modules: {},
};
