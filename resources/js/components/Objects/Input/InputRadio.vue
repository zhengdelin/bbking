<template>
    <div>
        <div class="font-bold">
            <span v-if="required" class="text-red-500">* </span>
            <span class="font-MicrosoftJhengHei">{{ title }}</span>
        </div>
        <div class="w-full py-1 flex flex-wrap gap-2">
            <label v-for="option in options" :key="option.value">
                <input
                    type="radio"
                    v-model="modelValue"
                    :value="option.value"
                />
                {{ option.label }}
            </label>
        </div>
    </div>
</template>

<script>
import { computed, toRefs } from "@vue/runtime-core";
export default {
    props: {
        value: { type: [String,Number], default: "" },
        required: { type: Boolean, default: true },
        title: { type: String, default: "" },
        options: { type: Object, default: () => ({}) },
    },
    setup(props, { emit }) {
        const { required, title, options } = toRefs(props);
        const modelValue = computed({
            get: () => props.value,
            set: (val) => emit("update:value", val),
        });

        return { required, title, modelValue, options };
    },
};
</script>

<style scoped></style>
