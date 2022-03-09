<template>
  <div class="">
    <div class="font-bold">
      {{ props.title }}
    </div>
    <div class="w-full py-1">
      <select
      class="font-bold w-full h-[40px] border-gray-500 border-opacity-50 border-[1px] border-solid rounded-[10px] pl-2"
        :value="attrs.modelValue"
        @change="emitInput"
      >
        <option value="">請選擇</option>
        <template v-if="option_group">
        <optgroup
          v-for="(options, key) in option_group"
          :key="key"
          :label="key"
        >
          <option v-for="option in options" :key="option.id" :value="option.id">{{ option.name }}</option>
        </optgroup>
          
        </template>
        <template v-else>
          <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
        </template>
      </select>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  inheritAttrs: false,
  props: {
    title:{
      type:String,
      default:"多選"
    },
    option_group: {
      type: Object || Array,
      default: () => [] || {},
    },
    options:{
      type:Array,
      default:()=>[]
    }
  },
  emits: {
    "update:modelValue": {
      type: String,
      default: "",
    },
  },
  setup(props, { attrs, emit }) {
    // console.log("inputSelect",props);
    const option_group = computed(() => props.option_group);
    const emitInput = (e) => {
      emit("update:modelValue", e.target.value);
    };
    return { option_group, emitInput, attrs,props };
  },
};
</script>

<style scoped>
</style>