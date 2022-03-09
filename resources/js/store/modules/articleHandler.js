import { apiGetArticles, apiPostCreateArticle } from "../../api/api";

export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        createArticle: async({}, data) => {
            await apiPostCreateArticle(data);
        },
        getArticles: async() => {
            const { articles } = await apiGetArticles();
            return articles ? articles : [];
        },
    },
    getters: {},
    modules: {},
};