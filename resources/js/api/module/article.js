import {get, post } from "../baseAxios";


//admin
export const postCreateArticle = (data) => post("article/admin/createArticle", data);
export const getArticles = () => get("article/admin/getArticles");