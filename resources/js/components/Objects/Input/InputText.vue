<template>
  <div id="input_text">
    <div class="font-bold">
      {{ props.title }}
    </div>
    <div class="w-full py-1">
      <!-- component v-model時
      要加:value = "attrs.modelValue",
      @input="$emit('update:modelValue',$event.targe.value)" 
      -->
      <input
        class="w-full"
        type="text"
        v-bind="attrs"
        ref="field"
        :value="attrs.modelValue"
        @input="emitInput"
        @change="props.valueChange"
      />
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
    valueChange: {
      type: Function,
      default: () => {},
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
      emit("update:modelValue", e.target.value);
    };
    onMounted(() => {
      if (props.focus) field.value.focus();
    });
    return { props, attrs, field, emitInput };
  },
};
</script>

<style>
#input_text input {
  height: 40px;
  border: rgb(128, 128, 128, 0.5) solid 1px;
  border-radius: 10px;
  padding-left: 1rem;
}
</style>