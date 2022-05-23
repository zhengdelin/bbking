<template>
    <div class="logo w-[15%] md:w-[5%] sm:w-[10%]">
        <img class="w-100" :src="logo" alt="Xiang's Music Store" />
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
    setup() {
        const { getters } = useStore();
        const logo = computed(() => getters["globalHandler/logo"]);
        return { logo };
    },
};
</script>

<style scoped></style>
