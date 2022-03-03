import global from "./modules/global";
import userHandler from "./modules/userHandler";
import { createStore } from "vuex";
//彙總
export default createStore({
    ...global,
    modules: {
        userHandler: userHandler
    },
});