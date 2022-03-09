import { computed, createApp, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { router } from "./router/router";
import AlertBoxVue from "./components/Objects/AlertBox"
import store from "./store/index"

const app = createApp({
        components: { AlertBoxVue },
        setup() {
            const route = useRoute()
            const router = useRouter()
            Promise.all([store.dispatch('globalHandler/getUser'), store.dispatch("globalHandler/getCategories")])

            // if (!store.state.is_login)
            //     router.push({ name: 'home' })
            const exception_error = computed(() => store.state.exception_error);
            watch(exception_error, () => {
                // console.log("exception_error occurs");
                router.push({ name: "exception_error" })
            })
            watch(route, () => {
                // store.commit('clearStatus')
            })
        },
    })
    // app.use(CKEditor);
app.use(store);
app.use(router);
app.mount('#instrument_platform');