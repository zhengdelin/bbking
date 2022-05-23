<template>
    <div class="flex">
        <svg-render-vue
            v-for="i in 5"
            :key="i"
            :class="[
                editable ? 'hover:cursor-pointer' : '',
                modelValue >= i ? fillColor : 'text-white',
            ]"
            :path-class="
                (modelValue >= i ? strokeColor : 'stroke-black') +
                ' stroke-[30px] duration-300'
            "
            type="star"
            :size="size"
            @click="onClick(i)"
        />
    </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
    props: {
        fillColor: { type: String, default: "text-yellow-500" },
        strokeColor: { type: String, default: "stroke-yellow-500" },
        editable: { type: Boolean, default: true },
        size:{type:String,default:"xl"}
    },
    emits: ["update:modelValue"],
    setup(props, { emit, attrs }) {
        const modelValue = computed({
            get: () => attrs.modelValue,
            set: (val) => emit("update:modelValue", val),
        });
        const onClick = (i) => {
            if (props.editable) modelValue.value = i;
        };
        return { ...toRefs(props), modelValue, onClick };
    },
};
</script>

<style scoped></style>
