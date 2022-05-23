<template>
    <div class="w-[450px] bg-slate-50 pt-4 pb-8 shadow-md h-full px-12 flex flex-col">
        <slot name="title">
            <TitleItem :title="title" class="text-center font-cwTeXFangSong" />
        </slot>
        <form :class="['w-full flex-1 flex flex-col', formClass]" @submit.prevent>
            <slot></slot>
        </form>
    </div>
</template>

<script setup>
import TitleItem from "../Objects/Title/TitleItem.vue";
import { toRefs } from "@vue/reactivity";

const props = defineProps({
    title: { type: String },
    formClass: { type: String, default: "gap-2" },
});
const { title, formClass } = toRefs(props);
</script>

<style scoped></style>
