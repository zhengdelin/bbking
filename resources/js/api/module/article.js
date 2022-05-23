import { get, post } from "../baseAxios";

export const getArticlesByCategory = (data) =>
    post("article/getArticlesByCategory", data);
export const getArticleById = (data) => post("article/getArticleById", data);
export const postCollectArticle = (data) =>
    post("article/collectArticle", data);
export const getCollectedArticles = () => get("article/getCollectedArticles");
//admin
export const getArticles = () => get("article/admin/getArticles");
export const postCreateArticle = (data) =>
    post("article/admin/createArticle", data);
export const postUpdateArticle = (data) =>
    post("article/admin/updateArticle", data);
