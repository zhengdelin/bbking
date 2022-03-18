<template>
  <div class="input_single_checkbox w-full">
    <div class="py-1">
      <!-- component v-model時
      要加:value = "attrs.modelValue",
      @input="$emit('update:modelValue',$event.targe.value)" 
      -->
      <input
        name="field"
        type="checkbox"
        v-bind="attrs"
        ref="field"
        :checked="attrs.modelValue"
        @input="emitInput"
      />
      <label for="field" class="font-bold px-1"
        >{{ props.title }}</label
      >
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
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
  },
  emits: {
    "update:modelValue": {
      type: String,
      default: "",
    },
  },
  setup(props, { attrs, emit }) {
    //ref
    const field = ref(null);
    // data
    // console.log("emits", emits);
    const emitInput = (e) => {
      emit("update:modelValue", e.target.checked);
    };
    onMounted(() => {
      if (props.focus) field.value.focus();
    });
    return { props, attrs, field, emitInput };
  },
};
</script>

<style>
.input_single_checkbox input {
  border: rgb(128, 128, 128, 0.5) solid 1px;
  border-radius: 10px;
  padding-right: 1rem;
}
</style>