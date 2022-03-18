import {get, post } from "../baseAxios";

export const getCategories = () => get("global/getCategories");


/* admin */
export const postCreateCategory = (data) => post("global/createCategory", data);
export const postUpdateCategory = (data) => post("global/updateCategory", data);