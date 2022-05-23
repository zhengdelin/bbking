<template>
    <svg-render-vue
        @click="modelValue = !modelValue"
        :class="['hover:cursor-pointer ', { 'text-white': !modelValue }]"
        path-class="stroke-black stroke-[30px]"
        type="star"
        size="xl"
    />
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
    emits: ["update:modelValue"],
    setup(props, { emit, attrs }) {
        const modelValue = computed({
            get: () => attrs.modelValue,
            set: (val) => emit("update:modelValue", val),
        });
        return { modelValue };
    },
};
</script>

<style scoped></style>
