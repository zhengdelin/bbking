<template>
  <div class="font-bold">
    <span v-if="required" class="text-red-500">* </span>
    <span>{{ title }}</span>
  </div>
  <div class="w-full py-1">
    <select
      class="
        font-bold
        w-full
        h-[40px]
        border-gray-500 border-opacity-50 border-[1px] border-solid
        rounded-[10px]
        pl-2
      "
      :value="attrs.modelValue"
      @change="emitInput"
    >
      <option value="" disabled>請選擇</option>
      <template v-if="options.length">
        <option v-for="option in options" :key="option.id" :value="option.id">
          {{ option.name }}
        </option>
      </template>
      <template v-else>
        <optgroup
          v-for="(options, key) in option_group"
          :key="key"
          :label="key"
        >
          <option v-for="option in options" :key="option.id" :value="option.id">
            {{ option.name }}
          </option>
        </optgroup>
      </template>
    </select>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    option_group: {
      type: Object || Array,
      default: () => [] || {},
    },
    options: {
      type: Array,
      default: () => [],
    },
    valChangeFun: {
      type: String,
      default: "",
    },
  },
  emits: {
    "update:modelValue": {
      type: String,
      default: "",
    },
  },
  setup(props, { attrs, emit }) {
    // console.log("inputSelect", props);
    const { dispatch } = useStore();
    const { title, required, options, option_group, valChangeFun } = props;
    const emitInput = (e) => {
      if (valChangeFun) dispatch(valChangeFun, e.target.value);
      emit("update:modelValue", e.target.value);
    };
    return { title, required, option_group, options, emitInput, attrs };
  },
};
</script>

<style scoped>
</style>