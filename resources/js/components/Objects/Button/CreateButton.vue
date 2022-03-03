<template>
  <div
    class="
      flex
      justify-center
      py-[6px]
      px-4
       rounded-md
      bg-blue-500
      hover:bg-blue-400 hover:cursor-pointer
    "
  >
    <div class="flex-ac">
      <div class="text-white font-semibold">新增{{ target_text }}</div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: {
    target_text: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const target_text = computed(() => {
      return props.target_text;
    });
    return { target_text };
  },
};
</script>

<style scoped>
</style>