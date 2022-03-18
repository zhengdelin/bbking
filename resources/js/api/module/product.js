import {get, post } from "../baseAxios";


//admin
export const getProducts = () => get("product/admin/getProducts");
export const postCreateProduct = (data) => post("product/admin/createProduct", data);
export const postUpdateProduct = data => post("product/admin/updateProduct", data)