<template>
  <div>
    <div class="font-bold">
      <span v-if="required" class="text-red-500">* </span>
      <span class="font-MicrosoftJhengHei">{{ title }}</span>
    </div>
    <div class="w-full py-1">
      <textarea
        class="
          w-full
          whitespace-nowrap
          border-gray-500 border-opacity-50 border-[1px]
          rounded-[10px]
          pl-4 pt-2
        "
        type="textarea"
        v-bind="attrs"
        ref="field"
        :value="attrs.modelValue"
        @input="emitInput"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";

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
    required:{
      type:Boolean,
      default:false,
    }
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
    const {title,focus} = props;
    const required = computed(()=>props.required);
    const emitInput = (e) => {
      emit("update:modelValue", e.target.value);
    };
    onMounted(() => {
      if (focus) field.value.focus();
    });
    return { title,required, attrs, field, emitInput };
  },
};
</script>

<style scoped>
</style>