<template>
    <svg-render-vue
    v-if="isLogin"
        @click="modelValue = !modelValue"
        :class="['hover:cursor-pointer ', { 'text-white': !modelValue }]"
        path-class="stroke-black stroke-[30px]"
        type="star"
        size="xl"
    />
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from 'vuex';
export default {
    emits: ["update:modelValue"],
    setup(props, { emit, attrs }) {
        const modelValue = computed({
            get: () => attrs.modelValue,
            set: (val) => emit("update:modelValue", val),
        });
        const {state} = useStore();
        const isLogin = computed(()=>state.is_login)
        return { modelValue, isLogin };
    },
};
</script>

<style scoped></style>
