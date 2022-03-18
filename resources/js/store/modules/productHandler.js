import {
    apiGetProducts,
    apiPostCreateProduct,
    apiPostUpdateProduct,
} from "../../api/api";

export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        //檢查名字
        checkName: async({ commit }, name) => {
            // console.log("checkTitle", title);
            let msg = "";
            if (!name) msg = "請輸入名字";
            else if (name.length > 50) msg = "名字最多50字元";
            commit(
                "setStatus", {
                    type: "name",
                    msg: msg,
                }, { root: true }
            );
        },
        //檢查描述
        checkDescription: async({ commit }, description) => {
            // console.log("checkTitle", title);
            let msg = "";
            if (description.length > 200) msg = "描述最多200字元";
            commit(
                "setStatus", {
                    type: "description",
                    msg: msg,
                }, { root: true }
            );
        },
        //檢查價格
        checkPrice: async({ commit }, price) => {
            let msg = "";
            console.log(price);
            if (!price) msg = "請輸入價格";
            commit(
                "setStatus", {
                    type: "price",
                    msg: msg,
                }, { root: true }
            );
        },
        getProducts: async() => {
            const { products } = await apiGetProducts();
            return products ? products : [];
        },
        //新增產品
        createProduct: async({ dispatch, rootState }, data) => {
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
        updateProduct: async({ rootState, dispatch }, data) => {
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
    },
    getters: {},
    modules: {},
};