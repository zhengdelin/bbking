import {
    reactive,
    readonly
} from "vue";
import {
    apiGetUser,
} from "../api/api";

const state = reactive({
    user: '',
    status: '',
    status_msg: '',
    errors: {}
})
apiGetUser().then(res => {
        state.user = res.data.user;
    })
    //function
const setStatus = async(status_type, item, error_type) => {
    // console.log("setStatus");
    //200表示成功
    if (status_type === 200) {
        state.errors = {};
        state.status = 'success'
        state.status_msg = item;
    } else {
        state.status = 'error';
        //error 表示前端攔截的error
        if (status_type === 'error') {
            clearApiError()
            state.errors[error_type] = item;
        } else if (status_type === 400) {
            //400表示後端回傳的error
            state.errors = {};
            state.status_msg = item;
        }
        confirmErrorStatus();
    }
}
const clearApiError = async() => {
    state.status_msg = '';
}
const clearStatus = async() => {
    // console.log("clearStatus");
    state.status = ''
    state.success = []
    state.errors = {}
}
const confirmErrorStatus = async() => {
    let arr = [];
    arr = Object.values(state.errors).map(item => item.length);
    const num = arr.reduce((a, b) => a + b)
    if (!num) state.status = '';
}
const userLogin = async(user) => {
    state.user = user;
}
const userRegister = async(user) => {
    state.user = user;
}
const userLogout = async() => {
    state.user = '';
};
export default {
    state: readonly(state),
    userLogout,
    userLogin,
    userRegister,
    setStatus,
    clearApiError,
    clearStatus
}