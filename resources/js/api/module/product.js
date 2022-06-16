import { deleteRequest, get, patch, post, put } from "../baseAxios";

export const getProductsByCategory = (data) =>
    get(`product/category/${data.category}`);
export const getProductById = (data) => get(`product/${data.product_id}`);
export const postAddProductToCart = (data) =>
    put(`cart/product/${data.product_id}/amount/${data.amount}`, data);
export const getCartByMember = () => get(`cart`);
export const deleteCartProduct = (data) =>
    deleteRequest(`cart/product/${data.product_id}`);
export const postCreateOrder = (data) => post("order", data);
export const getOrders = () => get(`orders`);
// export const getOrderById = data=>get("product/getOrderById",data);
export const postCancelOrder = (data) => put(`order/${data.id}`);
export const postRecoverOrder = (data) => put(`order/${data.id}/recover`);
export const postFinishOrder = (data) => put(`order/${data.id}/finish`);
export const postShoppingAgain = (data) => post(`order/${data.id}/again`, data);
export const postEvaluate = (data) =>
    post(`order/evaluate/${data.product_id}`, data);
//admin
export const getProducts = () => get("admin/products");
export const postCreateProduct = (data) =>
    post("admin/product", data);
export const postUpdateProduct = (data) =>
    post(`admin/product/${data.get("id")}?_method=PATCH`, data);
export const getAllOrders = () => get("admin/orders");
export const putOrderStatus = ({ id, status }) =>
    put(`admin/order/${id}/status/${status}`);
export const patchOrder = (data) => patch(`admin/order/${data.id}`, data);
