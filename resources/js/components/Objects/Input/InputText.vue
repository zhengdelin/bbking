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
                class="w-full h-[40px] placeholder:font-bold border-gray-500 border-opacity-50 border-[1px] rounded-sm pl-4"
                :type="type || 'text'"
                ref="field"
                v-model="modelValue"
                :placeholder="placeholder"
                @change="modelValueChange"
                :required="required"
            />
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref, toRefs } from "@vue/runtime-core";
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
        const { title, trim, focus, isNumber } = toRefs(props);
        const placeholder = computed(() => "輸入" + title.value);
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
        return { modelValue, placeholder, ...toRefs(props), modelValueChange, field };
    },
};
</script>

<style></style>
