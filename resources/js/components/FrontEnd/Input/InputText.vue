<template>
    <div class="mb-3">
        <span class="font-bold text-sm">
            <span v-if="required" class="text-red-500">* </span>
            <span class="font-MicrosoftJhengHei">{{ title }}</span>
        </span>

        <input
            ref="field"
            v-model="modelValue"
            :readonly="readonly"
            class="placeholder:font-bold w-full border-gray-500 border-opacity-50 border-b rounded-sm py-1 focus:outline-none"
            :type="type"
            :placeholder="placeholder"
            @change="modelValueChange"
            :required="required"
            autocomplete="off"
        />
    </div>
</template>

<script>
import { computed, onMounted, ref, toRefs } from "@vue/runtime-core";
export default {
    props: {
        title: { type: String, default: "" },
        placeholder: { type: String, default: "" },
        focus: { type: Boolean, default: false },
        trim: { type: Boolean, default: true },
        isNumber: { type: Boolean, default: false },
        required: { type: Boolean, default: false },
        type: { type: String, default: "text" },
        readonly: { type: Boolean, default: false },
    },
    emits: ["update:modelValue"],
    setup(props, { attrs, emit }) {
        //ref
        const field = ref();
        // data
        const { trim, focus, isNumber } = toRefs(props);
        const modelValue = computed({
            get: () => attrs.modelValue,
            set: (val) => emit("update:modelValue", val),
        });
        // modelValue.value = attrs.modelValue;
        //emit
        const modelValueChange = () => {
            if (trim.value) modelValue.value = modelValue.value.trim();
            if (isNumber.value)
                modelValue.value = modelValue.value.replace(/[^0-9]/gi, "");
            // emit("update:modelValue", modelValue.value);
        };
        onMounted(() => {
            if (focus.value) field.value.focus();
        });
        return {
            field,
            modelValueChange,
            modelValue,
            ...toRefs(props),
        };
    },
};
</script>

<style></style>
