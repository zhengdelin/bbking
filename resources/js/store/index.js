import global from "./modules/global";
import userHandler from "./modules/userHandler";
import { createStore } from "vuex";
import articleHandler from "./modules/articleHandler";
import globalHandler from "./modules/globalHandler";
import productHandler from "./modules/productHandler";
//彙總
export default createStore({
    ...global,
    modules: {
        userHandler,
        articleHandler,
        productHandler,
        globalHandler,

    },
});