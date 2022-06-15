<template>
    <div
        class="flex flex-col md:flex-row flex-1 m-2 md:my-3 md:mx-5 xl:my-6 xl:mx-10"
    >
        <CategoryMenu class="top-[5rem!important]" />

        <div class="flex justify-center w-full md:w-96 flex-1">
            <div class="w-[95%] h-full flex flex-col">
                <RouterView name="tab_title_bar" v-slot="{ Component }">
                    <Transition name="fade-from-bottom-15px">
                        <Component :is="Component" :title="title" />
                    </Transition>
                </RouterView>
                <div class="relative flex-1">
                    <RouterView v-slot="{ Component }">
                        <Suspense :timeout="0">
                            <Component :is="Component" />
                            <template #fallback>
                                <loading-vue />
                            </template>
                        </Suspense>
                    </RouterView>
                </div>
                <!-- <KeepAlive :include="['ProductList', 'ArticleList']">
                    </KeepAlive> -->
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import CategoryMenu from "../components/Global/Menu/CategoryMenu.vue";
import TabTitleBar from "../components/Objects/Title/TabTitleBar.vue";
import { useStore } from "vuex";

export default {
    components: { CategoryMenu, TabTitleBar },
    async setup() {
        const route = useRoute();
        const { getters, dispatch } = useStore();
        await dispatch("globalHandler/getCategories");
        const category = computed(
            () =>
                route.params.category || getters["globalHandler/first_category"]
        );
        const category_map_by_eng_name = computed(() =>
            getters["globalHandler/category_map_by_key"]("eng_name")
        );
        const title = computed(
            () => category_map_by_eng_name.value[category.value]["name"]
        );
        return {
            title,
        };
    },
};
</script>

<style scoped>
/* .expand-top-bottom-500-enter-active,
.expand-top-bottom-500-leave-active {
    transition: height 0.5s;
}
.expand-top-bottom-500-enter-from,
.expand-top-bottom-500-leave-to {
    opacity: 0;
    height: 0;
}
.expand-top-bottom-500-enter-to,
.expand-top-bottom-500-leave-from {
    height: 96px;
    opacity: 1;
} */
</style>
