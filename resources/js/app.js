import { computed, createApp, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { router } from "./router/router";
import AlertBoxVue from "./components/Objects/AlertBox";
import LoadingVue from "./components/Loading/Loading";
import SvgRenderVue from "./components/Objects/SvgRender";
import store from "./store/index";
import "@fortawesome/fontawesome-free/js/all";
const app = createApp({
    components: { AlertBoxVue },
    setup() {
        const router = useRouter();
        onMounted(async() => {
            await Promise.all([
                store.dispatch("globalHandler/getUser"),
                store.dispatch("globalHandler/getCategories"),
            ]);
            // if (store.state.is_login && !store.state.is_init) {
            //     router.push({ name: "init" });
            // }
        });
    },
});
app.component("svg-render-vue", SvgRenderVue);
app.component("loading-vue", LoadingVue);
app.use(store);
app.use(router);
app.mount("#instrument_platform");