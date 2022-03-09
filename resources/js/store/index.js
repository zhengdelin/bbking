import global from "./modules/global";
import userHandler from "./modules/userHandler";
import { createStore } from "vuex";
import articleHandler from "./modules/articleHandler";
import globalHandler from "./modules/globalHandler";
//彙總
export default createStore({
    ...global,
    modules: {
        userHandler: userHandler,
        articleHandler: articleHandler,
        globalHandler: globalHandler
    },
});