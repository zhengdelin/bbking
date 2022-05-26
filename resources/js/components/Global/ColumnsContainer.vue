<template>
    <div class="px-8 py-6 bg-white rounded-sm shadow-md">
        <div class="mb-2">
            <slot name="header"></slot>
        </div>
        <div :class="['columns_container', columnsClass]">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
export default {
    props: {
        columnsClass: { type: String, default: "columns-1 md:columns-2" },
    },
    setup(props) {
        const { columnsClass } = toRefs(props);

        return { columnsClass };
    },
};
</script>

<style scoped>
.columns_container > * {
    -webkit-column-break-inside: avoid;
}
.columns_container {
    column-rule: 1px rgb(209, 213, 219) solid;
    column-gap: 2rem;
}
</style>
