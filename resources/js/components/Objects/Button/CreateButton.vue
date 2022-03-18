<template>
  <button class="bg-blue-500 hover:bg-blue-400 hover:cursor-pointer text-white">
    <svg-render-vue type="plus" class="mr-1"></svg-render-vue>
    <span>新增{{ target_text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    target_text: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { target_text } = props;
    return { target_text };
  },
};
</script>

<style scoped>
</style>