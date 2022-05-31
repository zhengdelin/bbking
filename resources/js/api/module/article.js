import { get, patch, post } from "../baseAxios";

export const getArticlesByCategory = (data) =>
    get(`article/category/${data.category}`);
export const getArticleById = (data) => get(`article/${data.article_id}`);


//admin
export const getArticles = () => get("admin/articles");
export const postCreateArticle = (data) =>
    post("admin/article", data);
export const postUpdateArticle = (data) =>
    patch(`admin/article/${data.id}`, data);
