<template>
    <ul class="flex flex-wrap flex-1">
        <li
            v-for="item in options"
            :key="item[optionKey]"
            :class="[
                'bg-white text-center border-b-2 hover:cursor-pointer hover:text-blue-500 hover:font-bold duration-500 transition-[border]',
                modelValue === item[optionValueKey]
                    ? 'border-blue-500 text-blue-500 font-bold'
                    : 'border-slate-300',
                itemClass,
            ]"
            :style="itemStyle || { width: `${(1 / (length || options.length)) * 100}%` }"
            @click="modelValue = item[optionValueKey]"
        >
            <slot :item="item"></slot>
        </li>
    </ul>
</template>

<script>
import { computed, toRefs } from "@vue/runtime-core";
export default {
    props: {
        length: { type: Number, default: 0 },
        options: { type: [Array, Object], default: () => [] },
        //用來綁定v-for的key, 默認為id
        optionKey: { type: String, default: "id" },
        //用來點擊menu時要切換的值的key, 默認為value
        optionValueKey: { type: String, default: "value" },
        itemClass: { type: String, default: "py-4" },
        itemStyle: { type: Object, default: () => null },
    },
    emits: ["update:modelValue"],
    setup(props, { emit, attrs }) {
        const modelValue = computed({
            get: () => attrs.modelValue,
            set: (val) => emit("update:modelValue", val),
        });
        return { ...toRefs(props), modelValue };
    },
};
</script>

<style scoped></style>
