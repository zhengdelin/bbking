import {
    apiGetArticleById,
    apiGetArticles,
    apiGetArticlesByCategory,
    apiGetCollectedArticles,
    apiPostCollectArticle,
    apiPostCreateArticle,
    apiPostUpdateArticle,
} from "../../api/api";

export default {
    namespaced: true,
    state: {
        articles: {},
        articles_by_id: {},
        collected_articles: {},
    },
    mutations: {
        setArticlesByCategory: (state, { articles, category }) => {
            articles = articles.reduce((acc, val) => {
                acc[val.id] = val;
                return acc;
            }, {});
            state.articles[category] = articles;
            state.articles_by_id = { ...state.articles_by_id, ...articles };
        },
        setArticleById: (state, { article, article_id }) => {
            state.articles_by_id[article_id] = article;
        },
        setCollectedArticles: (state, articles) => {
            // console.log("setCollectedArticles",articles);
            state.collected_articles = articles;
            // .reduce((acc, val) => {
            //     acc[val.id] = val;
            //     return acc;
            // }, {});
        },
        collectArticle: (state, { id, status }) => {
            if (status) state.collected_articles.push({ id });
            else
                state.collected_articles.splice(
                    state.collected_articles.findIndex((val) => val.id === id),
                    1
                );
        },
    },
    actions: {
        //檢查標題
        checkTitle: async ({ commit }, title) => {
            // console.log("checkTitle", title);
            let msg = "";
            if (!title) msg = "請輸入標題";
            else if (title.length > 100) msg = "標題最多100字元";
            commit(
                "setStatus",
                {
                    type: "title",
                    msg: msg,
                },
                { root: true }
            );
        },
        //確認內容
        checkContent: async ({ commit }, content) => {
            let msg = "";
            if (!content) msg = "請輸入內文";
            // console.log("checkTitle", content, msg);
            commit(
                "setStatus",
                {
                    type: "article_content",
                    msg: msg,
                },
                { root: true }
            );
        },
        getArticles: async () => {
            let { articles } = await apiGetArticles();
            return articles ? articles : [];
        },
        createArticle: async ({ dispatch, rootState }, data) => {
            // console.log(data);
            await Promise.all([
                dispatch("checkTitle", data.title),
                dispatch("checkContent", data.content),
                dispatch("globalHandler/checkCategory", data.category_id, {
                    root: true,
                }),
            ]);
            if (rootState.status !== "error") {
                await apiPostCreateArticle(data);
            }
        },
        updateArticle: async ({ rootState, dispatch }, data) => {
            await Promise.all([
                dispatch("checkTitle", data.title),
                dispatch("checkContent", data.content),
                dispatch("globalHandler/checkCategory", data.category_id, {
                    root: true,
                }),
            ]);
            if (rootState.status !== "error") {
                await apiPostUpdateArticle(data);
            }
        },
        getArticlesByCategory: async ({ commit }, { category }) => {
            const { articles } = await apiGetArticlesByCategory({ category });
            commit("setArticlesByCategory", { articles, category });
        },
        getArticleById: async ({ commit }, { article_id }) => {
            const { article } = await apiGetArticleById({ article_id });
            commit("setArticleById", { article, article_id });
        },
        //珍藏文章
        collectArticle: async ({ commit }, { article, status }) => {
            apiPostCollectArticle({
                article_id: article.id,
                status,
            });
            commit("collectArticle", { id: article.id, status });
            // console.log("collectArticle", rootState, article);
        },
        //取得珍藏文章
        getCollectedArticles: async ({ commit, rootState }) => {
            // console.log("rootState",rootState);
            if (rootState.is_login) {
                const { articles } = await apiGetCollectedArticles();
                commit("setCollectedArticles", articles);
            }
        },
    },
    getters: {
        getArticleList: (state) => (category) => {
            return state.articles[category];
        },
        getArticle: (state) => (id) => {
            return state.articles_by_id[id];
        },
        getCollectedArticlesKeys: (state) => {
            // return Object.keys(state.collected_articles);
            // console.log(
            //     "Array.from(state.collected_articles, (i) => i.id)",
            //     Array.from(state.collected_articles, (i) => i.id)
            // );
            return Array.from(state.collected_articles, (i) => i.id);
        },
        articleIsCollected: (_, getters) => (id) => {
            // console.log("state",state,getters.getCollectedArticlesKeys,id);
            return getters.getCollectedArticlesKeys.includes(id);
        },

        grouped_collected_articles: (state) => {
            // const articles = Object.values(state.collected_articles);
            // console.log("grouped_collected_articles",articles);
            // return articles.reduce((acc, val) => {
            //     acc[val.category_id] = acc[val.category_id] || [];
            //     acc[val.category_id].push(val);
            //     return acc;
            // }, {});
            return state.collected_articles.reduce((acc, val) => {
                acc[val.category_id] = acc[val.category_id] || [];
                acc[val.category_id].push(val);
                return acc;
            }, {});
        },
    },
    modules: {},
};
