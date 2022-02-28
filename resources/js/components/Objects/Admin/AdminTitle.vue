<template>
  <div class="flex items-center">
    <div class="flex-auto px-2 py-4 font-MicrosoftJhengHei font-bold text-2xl">
      {{ title }}
    </div>
    <div class="flex flex-auto justify-end">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: {
    title: {
      type: String,
      default: "default title",
    },
  },
  setup(props) {
    const title = ref(props.title);
    return { title };
  },
};
</script>

<style scoped>
</style>