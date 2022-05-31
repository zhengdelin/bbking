<template>
    <div class="font-bold">
        <span v-if="required" class="text-red-500">* </span>
        <span>{{ title }}</span>
    </div>
    <div class="w-full py-1">
        <select
            class="font-bold w-full border-gray-500 border-opacity-50 border-[1px] border-solid rounded-sm p-2"
            v-model="modelValue"
        >
            <option disabled value="">點擊選擇</option>
            <template v-if="!group">
                <option
                    class="font-bold"
                    v-for="option in options"
                    :key="option[valueKey]"
                    :value="option[valueKey]"
                >
                    {{ option[labelKey] }}
                </option>
            </template>
            <template v-else>
                <optgroup
                class="text-blue-500 font-bold"
                    v-for="(groupOptions, key) in options"
                    :key="key"
                    :label="key"
                >
                    <option
                        class="text-black font-bold"
                        v-for="option in groupOptions"
                        :key="option[valueKey]"
                        :value="option[valueKey]"
                    >
                        {{ option[labelKey] }}
                    </option>
                </optgroup>
            </template>
        </select>
    </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
    inheritAttrs: false,
    props: {
        title: {
            type: String,
            default: "",
        },
        required: {
            type: Boolean,
            default: false,
        },
        options: {
            type: [Array, Object],
            default: () => [],
        },
        labelKey: { type: String, default: "name" },
        valueKey: { type: String, default: "id" },
        group: { type: Boolean, default: false },
    },
    emits: {
        "update:modelValue": {
            type: String,
            default: "",
        },
    },
    setup(props, { attrs, emit }) {
        // console.log("inputSelect", props);
        const modelValue = computed({
            get: () => attrs.modelValue,
            set: (val) => {
                emit("update:modelValue", val);
            },
        });
        return { ...toRefs(props), modelValue };
    },
};
</script>

<style scoped></style>
