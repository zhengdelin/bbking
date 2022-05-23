<template>
    <transition-group name="fade">
        <template v-if="show">
            <div v-for="(category_group, key) in categories" :key="key">
                <title-item :title="key"></title-item>
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
                >
                    <category-list-item
                        v-for="category in category_group"
                        :key="category.id"
                        :category="category"
                    ></category-list-item>
                </div>
            </div>
        </template>
    </transition-group>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import TitleItem from "../../components/Objects/Title/TitleItem.vue";
import CategoryListItem from "../../components/User/Category/CategoryListItem.vue";
export default {
    components: { TitleItem, CategoryListItem },
    setup() {
        const { state } = useStore();
        const categories = computed(() => state.globalHandler.categories);
        const show = ref(false);
        onMounted(() => (show.value = true));
        return { categories, show };
    },
};
</script>

<style scoped></style>
