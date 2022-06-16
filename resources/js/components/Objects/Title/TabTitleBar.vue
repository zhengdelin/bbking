<template>
    <div class="flex justify-between border-b-4 border-blue-500">
        <!-- <router-link
            :to="{ name: return_to_route_name }"
            class="text-blue-500"
            @click="commit('clearStatus')"
            v-if="return_to_route_name"
        >
            <svg-render-vue type="return" size="lg"></svg-render-vue>
        </router-link> -->
        <!-- <slot name="return_router"></slot> -->

        <div class="flex-auto font-bold text-2xl p-2">
            {{ title }}
        </div>
        <div class="grid grid-flow-col gap-1">
            <!-- <slot name="button"></slot> -->
            <router-link
                :to="article_route"
                class="bg-slate-300 px-7 mb-[2px] flex items-center text-lg rounded-[3px] font-bold"
            >
                文章
            </router-link>
            <router-link
                :to="product_route"
                class="bg-slate-300 px-7 mb-[2px] flex items-center text-lg rounded-[3px] font-bold"
            >
                產品
            </router-link>
        </div>
    </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { computed } from "@vue/runtime-core";
export default {
    props: {
        title: {
            type: String,
            default: "",
        },
    },
    setup(props) {
        const route = useRoute();
        const path = computed(() => route.path);
        const layer = computed(() => path.value.split("/").length);
        const article_route = computed(() =>
            layer.value === 2
                ? { name: "article-list" }
                : path.value.replace("products", "articles")
        );
        // console.log("articleRoute",article_route.value, layer.value, route);
        const product_route = computed(() =>
            layer.value === 2
                ? { name: "product-list" }
                : path.value.replace("articles", "products")
        );

        return { ...toRefs(props), article_route, product_route };
    },
};
</script>

<style scoped>
.router-link-exact-active,
.router-link-active {
    background-color: rgb(59, 130, 246);
    margin-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    color: white;
}
</style>
