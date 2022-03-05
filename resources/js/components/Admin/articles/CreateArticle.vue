<template>
  <div class="flex flex-col">
    <admin-page-title-vue
      target="admin-articles"
      title="文章 - 新增文章"
    ></admin-page-title-vue>
    <div class="flex flex-col">
      <admin-title-vue title="文章資訊">
        <template v-slot:button>
          <create-button-vue></create-button-vue>
        </template>
      </admin-title-vue>
      <tinymce-editor-vue></tinymce-editor-vue>
      {{content}}
      <div v-html="content"></div>
      <button @click="getContent">getContent</button>
    </div>
  </div>
</template>

<script>
import AdminPageTitleVue from "../../Objects/Admin/AdminPageTitle.vue";
import AdminTitleVue from "../../Objects/Admin/AdminTitle.vue";
import CreateButtonVue from "../../Objects/Button/CreateButton.vue";
import { ref } from "@vue/reactivity";
import TinymceEditorVue from "../../Objects/TinymceEditor.vue";
// import TipTapEditorVue from '../../Objects/TipTapEditor.vue';
export default {
  components: {
    AdminPageTitleVue,
    AdminTitleVue,
    CreateButtonVue,
    TinymceEditorVue,
    // TipTapEditorVue,
  },
  setup() {
    const content = ref();
    const getContent = () => {
      content.value = tinymce.get("tinymce_editor").getContent();
      return;
    };
    return { content,getContent };
  },
};
</script>

<style scoped>
.tox .tox-toolbar__group {
  /* align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 0; */
  padding: 0 5px 0 5px !important;
}
</style>