import {get, post } from "../baseAxios";

export const getCategories = () => get("global/getCategories");
export const getActivityImgs = ()=>get("global/getActivityImgs");
export const getStoreInfos = ()=>get("global/getStoreInfos");
/* admin */
export const postCreateCategory = (data) => post("global/createCategory", data);
export const postUpdateCategory = (data) => post("global/updateCategory", data);

export const getAllActivityImgs = () => get("global/getAllActivityImgs");
export const postCreateActivityImg = data=>post("global/createActivityImg",data);
export const postUpdateActivityImg = data=>post("global/updateActivityImg",data);


export const getAllStoreInfos = ()=>get("global/getAllStoreInfos");
export const postCreateStoreInfo = data=>post("global/createStoreInfo",data)
export const postUpdateStoreInfo = data=>post("global/updateStoreInfo",data);