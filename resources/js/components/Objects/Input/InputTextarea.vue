<template>
  <div class="col">
    <div class="col fw-bold input-field-title">
      {{ props.title }}
    </div>
    <div class="col-12 py-1">
      <textarea
        class="w-100"
        type="textarea"
        v-bind="attrs"
        ref="field"
        :value="attrs.modelValue"
        @input="emitInput"
        @change="props.valueChange"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from "vue";

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
    const emitInput = (e) => {
      emit("update:modelValue", e.target.value);
    };
    const focus = props.focus;
    onMounted(() => {
      if (focus) field.value.focus();
    });
    return { props, attrs, field,emitInput };
  },
};
</script>

<style scoped>
textarea {
  white-space: nowrap;
  border: rgb(128, 128, 128, 0.5) solid 1px;
  border-radius: 10px;
  padding-left: 1rem;
}
</style>