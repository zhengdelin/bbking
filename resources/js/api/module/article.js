import {get, post } from "../baseAxios";


//admin
export const getArticles = () => get("article/admin/getArticles");
export const postCreateArticle = (data) => post("article/admin/createArticle", data);
export const postUpdateArticle = data => post("article/admin/updateArticle", data)