import axios from "axios";
import store from "../store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// NProgress.inc(0.2);
// NProgress.configure({ easing: 'linear', speed: 500, showSpinner: false, trickle: false })

axios.defaults.baseURL = "/api/";
console.log("process",process.env.MIX_URL);
//設置請求超時
// axios.defaults.timeout = 10000;
//攔截request
axios.interceptors.request.use(
    (config) => {
        NProgress.start();
        const token = store.getters.getToken;
        config.headers.token = token;
        // console.log(`${config.url}: request->`, config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// 攔截response
axios.interceptors.response.use(
    (response) => {
        NProgress.done();

        const { data } = response;
        console.log(`${response.config.url}: response->`, response);
        if (data.msg) {
            store.commit("setStatus", {
                status: data.status,
                msg: data.msg,
            });
        }
        return data;
    },
    (error) => {
        const { response } = error;
        if (!response || response.status === 404 || response.status === 500) {
            if (!response) {
                console.error(`404 error ${error}`);
            } else {
                console.error(`${response.status} error =>${error}`);
                store.commit("setStatus", {
                    msg: "伺服器異常，請稍後再試",
                });
            }
        }
        return Promise.reject(error.message);
    }
);

export const post = (url, data) => {
    return axios.post(url, data);
};
export const get = async (url) => {
    return axios.get(url);
};

export const put = async (url, data) => {
    return axios.put(url, data);
};
export const patch = async (url, data) => {
    return axios.patch(url, data);
};
