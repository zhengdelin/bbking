<template>
    <span class="text-orange-500 font-bold"
        >NT${{ formattedPrice(price) }}</span
    >
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
    props: { price: { type: [String, Number], default: 0 } },
    setup(props) {
        const { getters } = useStore();
        /* 格式化的價格 */
        const formattedPrice = (val) =>
            getters["productHandler/getFormattedPrice"](val);
        return { ...toRefs(props), formattedPrice };
    },
};
</script>

<style scoped></style>
