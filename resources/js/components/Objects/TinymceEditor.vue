<template>
  <textarea
    name="tinymce_editor"
    id="tinymce_editor"
    v-model="content"
  ></textarea>
  tiny:{{ content }}
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
export default {
  setup(props) {
    const content = ref("");
    onMounted(() => {
      tinymce.init({
        selector: "#tinymce_editor",
        language_url: "../../assets/tinymce/langs/zh_TW.js",
        language: "zh_TW",
      });
      console.log(tinymce);
    });
    return { content };
  },
};
</script>

<style scoped>
</style>