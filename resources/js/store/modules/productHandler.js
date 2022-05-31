import {
    apiGetAllOrders,
    apiGetCartByMember,
    apiGetOrders,
    apiGetProductById,
    apiGetProducts,
    apiGetProductsByCategory,
    apiPatchOrder,
    apiPostAddProductToCart,
    apiPostCancelOrder,
    apiPostCreateOrder,
    apiPostCreateProduct,
    apiDeleteCartProduct,
    apiPostEvaluate,
    apiPostRecoverOrder,
    apiPostShoppingAgain,
    apiPostUpdateProduct,
    apiPutOrderStatus,
} from "../../api/api";
import { checkFormat } from "../../compositions/check";

export default {
    namespaced: true,
    state: {
        products: {},
        products_by_id: {},
        carts: [],
        orders: [],
        delivery_options: {
            1: { label: "宅配", value: 1 },
            2: { label: "到店取貨", value: 2 },
        },
        pay_method_options: {
            1: { label: "匯款", value: 1 },
            2: { label: "到店付款", value: 2 },
        },
        status: {
            0: { value: 0, label: "全部" },
            1: {
                value: 1,
                label: "待付款",
                cancelable: true,
                color: "text-yellow-700",
            },
            2: {
                value: 2,
                label: "待出貨",
                cancelable: true,
                color: "text-yellow-700",
            },
            3: { value: 3, label: "待收貨", color: "text-blue-500" },
            4: { value: 4, label: "已完成", color: "text-green-500" },
            10: {
                value: 10,
                label: "已取消",
                recoverable: true,
                color: "text-red-500",
            },
        },
        all_orders: [],
    },
    mutations: {
        setOrders: (state, orders) => {
            state.orders = orders;
        },
        setCarts: (state, carts) => {
            state.carts = carts;
        },
        setProductsByCategory: (state, { products, category }) => {
            products = products.reduce((acc, product) => {
                acc[product.id] = product;
                return acc;
            }, {});
            state.products[category] = products;
            state.products_by_id = { ...state.products_by_id, ...products };
        },
        setProductById: (state, { product, product_id }) => {
            //依照星樹分類
            // product.evaluations = product.evaluations.reduce((acc, val) => {
            //     acc[val.star] = acc[val.star] || [];
            //     acc[val.star].push(val);
            //     return acc;
            // }, {});
            state.products_by_id[product_id] = product;
        },
        setAllOrders: (state, orders) => {
            state.all_orders = orders
        },
    },
    actions: {
        //檢查名字
        checkName: async ({ commit }, name) => {
            // console.log("checkTitle", title);
            let msg = "";
            if (!name) msg = "請輸入名字";
            else if (name.length > 50) msg = "名字最多50字元";
            commit(
                "setStatus",
                {
                    type: "name",
                    msg: msg,
                },
                { root: true }
            );
        },
        //檢查簡介
        checkIntroduction: async ({ commit }, introduction) => {
            // console.log("checkTitle", title);
            let msg = "";
            if (introduction.length > 100) msg = "簡介最多100字元";
            commit(
                "setStatus",
                {
                    type: "introduction",
                    msg: msg,
                },
                { root: true }
            );
        },
        //檢查價格
        checkPrice: async ({ commit }, price) => {
            let msg = "";
            console.log(price);
            if (!price) msg = "請輸入價格";
            commit(
                "setStatus",
                {
                    type: "price",
                    msg: msg,
                },
                { root: true }
            );
        },
        getProducts: async () => {
            const { products } = await apiGetProducts();
            return products ? products : [];
        },
        //新增產品
        createProduct: async ({ dispatch, rootState }, data) => {
            await Promise.all([
                dispatch("checkName", data.name),
                dispatch("checkPrice", data.price),
                dispatch("globalHandler/checkCategory", data.category_id, {
                    root: true,
                }),
            ]);
            if (rootState.status !== "error") {
                const form_data = new FormData();
                for (const [key, value] of Object.entries(data))
                    form_data.append(key, value);
                console.log("createProduct", data, form_data.get("image"));
                await apiPostCreateProduct(form_data);
            }
        },
        //更新產品
        updateProduct: async ({ rootState, dispatch }, data) => {
            await Promise.all([
                dispatch("checkName", data.name),
                dispatch("checkPrice", data.price),
                dispatch("globalHandler/checkCategory", data.category_id, {
                    root: true,
                }),
            ]);
            if (rootState.status !== "error") {
                // console.log('updateProduct', data, typeof(data.image));
                const form_data = new FormData();
                for (const [key, value] of Object.entries(data))
                    form_data.append(key, value);
                await apiPostUpdateProduct(form_data);
            }
        },
        /* 取得產品列表 */
        getProductsByCategory: async ({ commit }, { category }) => {
            const { products } = await apiGetProductsByCategory({ category });
            commit("setProductsByCategory", { products, category });
        },
        /* 取得產品內容 */
        getProductById: async ({ commit }, { product_id }) => {
            const { product } = await apiGetProductById({ product_id });
            commit("setProductById", { product, product_id });
        },
        /* 新增產品至購物車 */
        addProductToCart: async ({ dispatch, rootState }, data) => {
            if (rootState.is_login) {
                await apiPostAddProductToCart(data);
            } else dispatch("checkIsLogin", {}, { root: true });
        },
        /* 取得購物車內容 */
        getCartByMember: async ({ commit }) => {
            const { cart_product_infos } = await apiGetCartByMember();
            commit("setCarts", cart_product_infos);
        },
        /* 刪除購物車產品 */
        deleteCartProduct: async ({ dispatch }, data) => {
            if (confirm("確認要刪除此產品?")) {
                // console.log(data);
                await apiDeleteCartProduct(data).then(() => {
                    dispatch("getCartByMember");
                });
            }
        },
        //確認帳號後五碼
        checkPayAccount: async ({ commit }, pay_account) => {
            let msg = "";
            if (!pay_account || pay_account.length != 5)
                msg = "請輸入匯款帳戶後五碼";
            commit(
                "setStatus",
                {
                    type: "pay_account",
                    msg: msg,
                },
                { root: true }
            );
        },
        createOrder: async (
            { dispatch, rootState },
            { order_info, product_list, total_price }
        ) => {
            let fun = [
                dispatch("userHandler/checkName", order_info.name, {
                    root: true,
                }),
                dispatch("userHandler/checkEmail", order_info.email, {
                    root: true,
                }),
                dispatch("userHandler/checkPhone", order_info.phone, {
                    root: true,
                }),
            ];
            if (order_info.delivery_method === 1) {
                fun.push(
                    dispatch("userHandler/checkAddress", order_info.address, {
                        root: true,
                    })
                );
            }
            if (order_info.pay_method === 1) {
                fun.push(dispatch("checkPayAccount", order_info.pay_account));
            }
            await Promise.all(fun);
            if (
                rootState.status !== "error" &&
                confirm("確認資料無誤並且提交訂單")
            ) {
                const data = {
                    id: product_list[0].order_id,
                    ...order_info,
                    total_price,
                };
                const { status } = await apiPostCreateOrder(data);
                return status === 200;
            }
        },
        getOrders: async ({ commit }) => {
            const { orders } = await apiGetOrders();
            commit("setOrders", orders);
        },
        // 取消訂單
        cancelOrder: async ({ dispatch }, { order }) => {
            // console.log("cancelOrder", order);
            if (confirm("確定要取消訂單?")) {
                await apiPostCancelOrder(order);
                await dispatch("getOrders");
                return true;
            }
            return false;
        },
        //恢復訂單
        recoverOrder: async ({ dispatch }, { order }) => {
            if (confirm("確認恢復訂單?")) {
                await apiPostRecoverOrder(order);
                await dispatch("getOrders");
                return true;
            }
            return false;
        },
        //再買一次
        shoppingAgain: async ({ dispatch }, { order }) => {
            // console.log("shoppingAgain", order);
            await apiPostShoppingAgain(order);
        },
        //檢查評論
        checkEvaluation: async ({ commit }, evaluation) => {
            let msg = "";
            if (evaluation.length > 1000) msg = "商品評價最多1000字元";
            commit(
                "setStatus",
                {
                    type: "evaluation",
                    msg: msg,
                },
                { root: true }
            );
        },
        evaluate: async (_, { product, data }) => {
            const { status } = await apiPostEvaluate({ ...product, ...data });
            return status === 200;
        },
        getAllOrders: async ({ commit }) => {
            const { orders } = await apiGetAllOrders();
            commit("setAllOrders", orders);
        },
        updateOrderStatus: async ({ dispatch }, data) => {
            const { status } = await apiPutOrderStatus(data);
            if (status === 400) await dispatch("getAllOrders");
        },
        updateOrder: async ({ dispatch, rootState }, data) => {
            await Promise.all([
                dispatch("checkReceiver", data.name),
                dispatch("checkReceiverPhone", data.phone),
                dispatch("checkReceiverEmail", data.email),
            ]);
            if (data.delivery_method === 1)
                await dispatch("checkAddress", data.address);
            if (rootState.status !== "error") {
                const { status } = await apiPatchOrder(data);
                if (status === 400) await dispatch("getAllOrders");
                return status === 200;
            }
            return false;
        },
        checkReceiver: async (_, name) => {
            checkFormat(name, { max: 10 }, { type: "receiver" });
        },
        checkReceiverPhone: async (_, phone) => {
            checkFormat(phone, { regex: "phone" }, { type: "receiver_phone" });
        },
        checkReceiverEmail: async (_, email) => {
            checkFormat(email, { max: 30 }, { type: "receiver_email" });
        },
        checkAddress: async (_address) => {
            checkFormat(_address, { max: 50 }, { type: "address" });
        },
    },
    getters: {
        getFormattedPrice: () => (price) => {
            return price.toLocaleString();
        },
        ordersById: (state) => {
            return state.orders.reduce((acc, order) => {
                acc[order.id] = order;
                return acc;
            }, {});
        },
        ordersByStatus: (state) => {
            return state.orders.reduce((acc, order) => {
                acc[order.status] = acc[order.status] || [];
                acc[order.status].push(order);
                return acc;
            }, {});
        },
        getOrdersByStatus:
            (state, getters) =>
            (status = null) => {
                if (status) return getters.ordersByStatus[status];
                return state.orders;
            },
        getOrderById: (_, getters) => (id) => {
            // console.log(getters.ordersById);
            return getters.ordersById[id] || null;
        },
        getOrderQuantities:
            (state, getters) =>
            (status = null) => {
                if (status)
                    return (
                        getters.getOrdersByStatus(status) &&
                        getters.getOrdersByStatus(status).length
                    );
                return state.orders.length;
            },
        getProducts: (state) => (category) => {
            return state.products[category];
        },
        getProduct: (state) => (id) => {
            // console.log("state",state);
            return state.products_by_id[id];
        },
        backendStatus: (state) => {
            let status = JSON.parse(JSON.stringify(state.status));
            status[3].label = "已出貨";
            console.log(status, "status");
            return status;
        },
        allOrdersById:state=>{
            return state.all_orders.reduce((acc, val) => {
                acc[val.id] = val;
                return acc;
            }, {});
        },
        allOrdersByStatus: (state) => {
            return Object.values(state.all_orders).reduce((acc, val) => {
                acc[val.status] = acc[val.status] || [];
                acc[val.status].push(val);
                return acc;
            },{});
        },
        getAllOrdersByStatus: (state, getters) => (status) => {
            return status
                ? getters.allOrdersByStatus[status]
                : state.all_orders;
        },
    },
    modules: {},
};
