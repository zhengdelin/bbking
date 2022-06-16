<template>
    <div class="px-10 relative">
        <div class=" max-w-[10rem] float-right">
            <img :src="store_info.logo" alt="logo" />
        </div>
        <title-item
            :title="store_info.name"
            return_to_route_name="about"
        ></title-item>
        <div class="no-tailwind-base" v-html="store_info.description"></div>
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import TitleItem from "../../components/Objects/Title/TitleItem.vue";
export default {
    components: { TitleItem },
    setup() {
        const route = useRoute();
        const id = computed(() => route.params.id);
        const { state } = useStore();
        const store_info = computed(
            () => state.globalHandler.store_infos[id.value]
        );

        return { store_info };
    },
};
</script>

<style scoped></style>
