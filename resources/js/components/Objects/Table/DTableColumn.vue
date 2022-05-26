<template>
    <tr v-if="labelPosition === 'left'" class="w-full">
        <td class="w-2/5">
            {{ label }}
        </td>
        <td class="px-2 py-2.5">
            <slot :prop="prop" :data="data[prop]">{{ data[prop] }}</slot>
        </td>
    </tr>
    <template v-else-if="labelPosition === 'top'">
        <tr>
            <td colspan="2" class="pt-2.5">{{ label }}</td>
        </tr>
        <tr>
            <td class="py-2.5" colspan="2">
                <slot :prop="prop" :data="data[prop]">{{ data[prop] }}</slot>
            </td>
        </tr>
    </template>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { computed, inject } from "@vue/runtime-core";
import { TITLE } from "../../../TITLE";

export default {
    name:"DescriptionTableColumn",
    props: {
        label: { type: String, default: "" },
        prop: { type: String, default: "" },
        labelPosition: { type: String, default: "left" },
    },
    setup(props) {
        const { prop, labelPosition } = toRefs(props);
        const label = computed(() => props.label || TITLE[prop.value]);
        const data = inject("data");

        return { label, data, prop, labelPosition };
    },
};
</script>

<style scoped>
tr > td:first-child {
    font-weight: bold;
}
</style>
