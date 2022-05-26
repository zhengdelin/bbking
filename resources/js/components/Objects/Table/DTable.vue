<template>
    <div class="space-y-4 px-3">
        <div class="pb-2.5 font-bold border-b-2 border-gray-300 text-blue-500">
            <slot name="title">{{ title }}</slot>
        </div>
        <table class="w-full">
            <slot></slot>
        </table>
    </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { provide } from "@vue/runtime-core";
export default {
    name:"DescriptionTable",
    props: {
        title: { type: String, default: "" },
        data: { type: Object, default: () => ({}) },
    },
    setup(props) {
        const { data, title } = toRefs(props);
        provide("data", data);

        return { title };
    },
};
</script>

<style scoped></style>
