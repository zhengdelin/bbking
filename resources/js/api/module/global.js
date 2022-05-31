import { get, patch, post } from "../baseAxios";

export const getCategories = () => get("global/categories");
export const getActivityImgs = () => get("global/activity_imgs");
export const getStoreInfos = () => get("global/store_infos");
export const getSearch = (data) => get("global/search", data);
export const getNews = () => get("global/news");
/* admin */
export const postCreateCategory = (data) => post("admin/global/category", data);
export const postUpdateCategory = (data) => patch(`admin/global/category/${data.id}`, data);

export const getAllActivityImgs = () => get("admin/global/activity_imgs");
export const postCreateActivityImg = (data) =>
    post("admin/global/activity_img", data);
export const postUpdateActivityImg = (data) =>
    post(`admin/global/activity_img/${data.get('id')}?_method=PATCH`, data);

export const getAllStoreInfos = () => get("admin/global/store_infos");
export const postCreateStoreInfo = (data) =>
    post("admin/global/store_info", data);
export const postUpdateStoreInfo = (data) =>
    post(`admin/global/store_info/${data.get('id')}?_method=PATCH`, data);
