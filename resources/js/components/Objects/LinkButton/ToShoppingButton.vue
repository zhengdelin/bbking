<template>
    <RouterLink :to="category ? `/products/${category}` : '/products'">
        <button
            :class="[
                'bg-yellow-500 font-bold hover:bg-yellow-400',
                buttonClass,
            ]"
        >
            <slot>前往購物</slot>
        </button>
    </RouterLink>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
    props: {
        category: { type: String, default: "" },
        buttonClass: { type: String, default: "" },
    },
    setup(props) {
        const { getters } = useStore();
        const first_category = computed(
            () => getters["globalHandler/first_category"]
        );
        const category = computed(() => props.category || first_category.value);
        const buttonClass = computed(() => props.buttonClass);
        return { category, buttonClass };
    },
};
</script>

<style scoped></style>
