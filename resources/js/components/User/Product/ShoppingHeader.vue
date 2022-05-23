<template>
    <div
        :class="[
            'bg-white grid p-2 border-gray-300-sm  text-center font-bold',
            gridColsClass,
        ]"
    >
        <div :class="[colClass, 'col-span-1 md:col-span-4']">商品</div>
        <div :class="[colClass, 'col-span-1']">單價</div>
        <div :class="[colClass, 'col-span-1 md:col-span-2']">數量</div>
        <div :class="[colClass, 'col-span-1']">小計</div>
        <slot :style="colClass"></slot>
    </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
export default {
    props: {
        gridColsClass: { type: String, default: "grid-cols-4 md:grid-cols-8" },
        colClass: { type: String, default: "py-1.5" },
    },
    setup(props) {
        return { ...toRefs(props) };
    },
};
</script>

<style scoped></style>
