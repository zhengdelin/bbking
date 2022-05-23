<template>
    <div>
        <div class="font-bold">
            <span v-if="required" class="text-red-500">* </span>
            <span class="font-MicrosoftJhengHei">{{ title }}</span>
        </div>
        <div class="w-full py-1">
            <!-- component v-model時
      要加:value = "attrs.modelValue",
      @input="$emit('update:modelValue',$event.targe.value)" 
      -->
            <input
                class="w-full h-[40px] border-gray-500 border-opacity-50 border-[1px] rounded-sm pl-4"
                :type="type || 'text'"
                v-bind="attrs"
                ref="field"
                :value="attrs.modelValue"
                @input="emitInput"
            />
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
export default {
    inheritAttrs: false,
    props: {
        title: {
            type: String,
            default: "",
        },
        focus: {
            type: Boolean,
            default: false,
        },
        trim: {
            type: Boolean,
            default: true,
        },
        isNumber: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: "text",
        },
    },
    emits: {
        "update:modelValue": {
            type: String,
            default: "",
        },
    },
    setup(props, { attrs, emit }) {
        //ref
        const field = ref();
        // data
        const { title, trim, focus, isNumber, type } = props;
        const required = computed(() => props.required);
        //emit
        const emitInput = (e) => {
            let value = e.target.value;
            if (trim) value = value.trim();
            if (isNumber) value = value.replace(/[^0-9]/gi, "");
            emit("update:modelValue", value);
        };
        onMounted(() => {
            if (focus) field.value.focus();
        });
        return { title, attrs, required, field, emitInput, type };
    },
};
</script>

<style></style>
