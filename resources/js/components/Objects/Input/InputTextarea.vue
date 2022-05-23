<template>
    <div>
        <div class="font-bold">
            <span v-if="required" class="text-red-500">* </span>
            <span class="font-MicrosoftJhengHei">{{ title }}</span>
        </div>
        <div class="w-full py-1">
            <textarea
                class="placeholder:font-bold"
                v-model="modelValue"
                ref="field"
                rows="3"
                :placeholder="placeholder"
                @input="onInput"
            />
        </div>
    </div>
</template>

<script>
import { computed, nextTick, onMounted, ref, toRefs } from "vue";

export default {
    props: {
        title: {
            type: String,
            default: "",
        },
        focus: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        placeholder: { type: String, default: "" },
    },
    emits: ["update:modelValue"],
    setup(props, { attrs, emit }) {
        //ref
        const field = ref();
        // data
        const { title, focus, required, placeholder } = toRefs(props);

        const modelValue = computed({
            get: () => attrs.modelValue,
            set: (val) => emit("update:modelValue", val),
        });
        const onInput = () => {
            //先將高度還原 讓textarea縮回去
            field.value.style.height = "auto";
            //若高度有撐開再將高度撐開
            field.value.style.height = `${field.value.scrollHeight + 2}px`;
        };
        onMounted(() => {
            // onInput();
            if (focus.value) field.value.focus();
            // console.log("textarea", field.value.scrollHeight, modelValue.value);
            if (field.value.scrollHeight > 88) {
                field.value.style.height = `${field.value.scrollHeight + 2}px`;
            }
        });

        return { title, required, field, modelValue, placeholder, onInput };
    },
};
</script>

<style scoped>
textarea {
    width: 100%;
    border: 1px solid rgb(107 114 128 / 0.5);
    border-radius: 0.125rem;
    padding: 0.5rem 0.75rem;
    resize: none;
}
textarea:focus {
    outline-color: #3b82f6;
}
</style>
