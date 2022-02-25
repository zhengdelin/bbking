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
    successes: [],
    errors: {}
})
apiGetUser().then(res => {
        state.user = res.data.user;
    })
    //function
const setStatus = async(status_type, arr, error_type) => {
    // console.log("setStatus");
    if (status_type === 'success') {
        state.errors = {};
        state.status = 'success'
        state.successes = arr;
    } else if (status_type === 'error') {
        state.successes = [];
        state.status = 'error'
        state.errors[error_type] = arr;
        if (error_type !== 'api_error') clearApiError()
        confirmErrorStatus();
    }
}
const clearApiError = async() => {
    state.errors.api_error = []
}
const clearStatus = async() => {
    // console.log("clearStatus");
    state.status = ''
    state.successes = []
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