import { useStore } from "vuex";
import { TITLE } from "../TITLE";
import store from "../store";

const regexMap = {
    phone: /^09[0-9]{8}$/,
};
/**
 *
 * @param {*} data 資料
 * @param {*} rule 規則
 */
export const checkFormat = async (
    data,
    { required = true, max = 0, numMax = 0, regex = "" },
    { type = "error", tip = "" }
) => {
    tip = tip || TITLE[type];
    let msg = "";
    if (required && !data) msg = getMsg(1, tip);
    if (max && data.toString().length > max) msg = getMsg(2, tip, max);
    if (regex && !data.toString().match(regexMap[regex])) msg = getMsg(3, tip);
    // console.log("checkFormat",data,required,max,type,tip);
    store.commit("setStatus", { type, msg });
};
/**
 *
 * @param {1,2} type 1:required 2:max
 */
const getMsg = (type = 1, tip = "欄位", max = 0) => {
    switch (type) {
        case 1:
            return `${tip}為必要欄位`;
        case 2:
            return `${tip}最多${max}字元`;
        case 3:
        default:
            return `${tip}格式錯誤`;
    }
};
