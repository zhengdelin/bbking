import { createApp } from "vue";
import { router } from "./router/router";
import store from "./store/index";
import App from "./App.vue";
import LoadingVue from "./components/Global/Loading";
import SvgRenderVue from "./components/Objects/SvgRender";
// import "@fortawesome/fontawesome-free/js/all";
createApp(App)
    .directive("md", {
        beforeMount: (el, binding) => {
            // const bindingClass = binding.value.split(" ");
            // bindingClass.forEach((val) => {
            //     el.classList.add(val);
            // });
            el.className = el.className + ' ' + binding.value;
        },
    })
    .directive("focus", {
        beforeMount: (el, binding) => {
            el.className = el.className + ' ' + binding.value;
        },
    })
    .directive("hover", {
        beforeMount: (el, binding) => {
            el.className = el.className + ' ' + binding.value;
        },
    })
    .component("svg-render-vue", SvgRenderVue)
    .component("loading-vue", LoadingVue)
    .use(store)
    .use(router)
    .mount("#instrument_platform");
