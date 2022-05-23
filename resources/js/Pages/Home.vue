<template>
    <div class="p-3">
        <activity-img-banner></activity-img-banner>
        <CategoryMenu class="bg-white" />
    </div>
</template>

<script>
import ActivityImgBanner from "../components/Global/ActivityImgBanner.vue";
import { reactive, ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";
import AllCategories from "../SubPages/Category/AllCategories.vue";
import CategoryMenu from "../components/Global/Menu/CategoryMenu.vue";

export default {
    components: {
        ActivityImgBanner,
        AllCategories,
        CategoryMenu,
    },
    setup() {
        return {};
    },
};
</script>

<style></style>
