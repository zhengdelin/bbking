<template>
    <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start"
    >
        <router-link
            :to="`/about/${store_info.id}`"
            class="bg-slate-50 hover:bg-slate-200 rounded-md border-slate-300 border p-8"
            v-for="store_info in store_infos"
            :key="store_info.id"
        >
            <div class="font-bold mb-2">{{ store_info.name }}</div>
            <div>
                <div class="w-6 inline-block">
                    <svg-render-vue type="location" />
                </div>
                <a
                    @click.stop
                    :href="`https://www.google.com/maps/place/${store_info.address}`"
                    class="hover:text-blue-500 hover:underline"
                    target="black"
                >
                    {{ store_info.address }}</a
                >
            </div>
            <div>
                <div class="w-6 inline-block">
                    <svg-render-vue type="phone" />
                </div>
                <a
                    @click.stop
                    :href="`tel:+${store_info.phone}`"
                    class="hover:text-blue-500 hover:underline"
                >
                    {{ store_info.phone }}</a
                >
            </div>
            <div>
                <div class="w-6 inline-block">
                    <svg-render-vue type="clock" />
                </div>
                <span>{{ store_info.business_hours }}</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
    setup() {
        const { state } = useStore();
        const store_infos = computed(() => state.globalHandler.store_infos);
        return { store_infos };
    },
};
</script>

<style scoped></style>
