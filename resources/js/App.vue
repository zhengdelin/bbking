<template>
    <alert-box-vue></alert-box-vue>
    <RouterView name="nav"></RouterView>
    <div class="flex-1 flex flex-col">
        <RouterView v-slot="{ Component }">
        <template v-if="Component">
            <Suspense :timeout="0">
                <component :is="Component" class="flex-1"></component>
                <template #fallback>
                    <loading-vue></loading-vue>
                </template>
            </Suspense>
        </template>
    </RouterView>
    </div>
    <RouterView name="footer"></RouterView>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import AlertBoxVue from "./components/Objects/AlertBox.vue";
export default {
    components: { AlertBoxVue },
    setup() {
        const { dispatch } = useStore();
        onMounted(async () => {
            console.log('app onMounted');
            await Promise.all([
                dispatch("globalHandler/getUser"),
                dispatch("globalHandler/getActivityImgs"),
                dispatch("globalHandler/getCategories"),
                dispatch("globalHandler/getStoreInfos")
            ]);
        });
    },
};
</script>

<style scoped></style>
