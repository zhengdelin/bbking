import {
    apiGetArticles,
    apiPostCreateArticle,
    apiPostUpdateArticle,
} from "../../api/api";

export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        //檢查標題
        checkTitle: async({ commit }, title) => {
            // console.log("checkTitle", title);
            let msg = "";
            if (!title) msg = "請輸入標題";
            else if (title.length > 100) msg = "標題最多100字元";
            commit(
                "setStatus", {
                    type: "title",
                    msg: msg,
                }, { root: true }
            );
        },
        //確認內容
        checkContent: async({ commit }, content) => {
            let msg = "";
            if (!content) msg = "請輸入內文";
            // console.log("checkTitle", content, msg);
            commit(
                "setStatus", {
                    type: "article_content",
                    msg: msg,
                }, { root: true }
            );
        },
        getArticles: async() => {
            let { articles } = await apiGetArticles();
            return articles ? articles : [];
        },
        createArticle: async({ dispatch, rootState }, data) => {
            // console.log(data);
            await Promise.all([
                dispatch("checkTitle", data.title),
                dispatch("checkContent", data.content),
                dispatch("globalHandler/checkCategory", data.category_id, { root: true })
            ]);
            if (rootState.status !== "error") {
                await apiPostCreateArticle(data);
            }
        },
        updateArticle: async({ rootState, dispatch }, data) => {
            await Promise.all([
                dispatch("checkTitle", data.title),
                dispatch("checkContent", data.content),
                dispatch("globalHandler/checkCategory", data.category_id, { root: true })
            ]);
            if (rootState.status !== "error") {
                await apiPostUpdateArticle(data);
            }
        },
    },
    getters: {},
    modules: {},
};