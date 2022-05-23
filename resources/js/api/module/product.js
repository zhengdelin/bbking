import { get, post } from "../baseAxios";

export const getProductsByCategory = (data) =>
    post("product/getProductsByCategory", data);
export const getProductById = (data) => post("product/getProductById", data);
export const postAddProductToCart = (data) =>
    post("product/addProductToCart", data);
export const getCartByMember = (data) => post("product/getCartByMember", data);
export const postDeleteCartProduct = (data) =>
    post("product/deleteCartProduct", data);
export const postCreateOrder = (data) => post("product/createOrder", data);
export const getOrders = (data) => get("product/getOrdersByMember", data);
// export const getOrderById = data=>get("product/getOrderById",data);
export const postCancelOrder = (data) => post("product/cancelOrder", data);
export const postRecoverOrder = (data) => post("product/recoverOrder", data);
export const postShoppingAgain = (data) => post("product/shoppingAgain", data);
export const postEvaluate = (data) => post("product/evaluate", data);
//admin
export const getProducts = () => get("product/admin/getProducts");
export const postCreateProduct = (data) =>
    post("product/admin/createProduct", data);
export const postUpdateProduct = (data) =>
    post("product/admin/updateProduct", data);
