import { createApp, provide, watch } from "vue";
import { useRoute } from "vue-router";
import { router } from "./router/router";
import store from "./store/store"
const app = createApp({
    components: {},
    setup() {
        const route = useRoute()
        const { clearStatus } = store;
        provide('store', store);
        watch(route, () => {
            clearStatus()
        })
    },
})
app.use(router);
app.mount('#instrument_platform');