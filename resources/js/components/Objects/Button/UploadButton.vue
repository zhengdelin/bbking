<template>
  <button class="text-white bg-cyan-400 hover:bg-cyan-500 hover:cursor-pointer">
    <svg-render-vue :type="svg_name" class="mr-1"></svg-render-vue>
    <span>上傳{{ target_text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    svg_name: {
      type: String,
      default: "",
    },
    target_text: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { target_text, svg_name } = props;
    return { target_text, svg_name };
  },
};
</script>

<style scoped>
</style>