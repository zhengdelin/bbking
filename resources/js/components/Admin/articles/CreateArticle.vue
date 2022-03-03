<template>
  <div class="flex flex-col">
    <admin-page-title-vue
      target="admin-articles"
      title="文章 - 新增文章"
    ></admin-page-title-vue>
    <alert-box-vue></alert-box-vue>
    <div class="flex flex-col">
      <admin-title-vue title="文章資訊">
        <template v-slot:button>
          <create-button-vue @click="createUser"></create-button-vue>
        </template>
      </admin-title-vue>

      <ckeditor
        :editor="editor"
        v-model="editor_data"
        :config="editor_config"
      ></ckeditor>
      {{ editor_data }}
      <div v-html="editor_data"></div>
      <!-- <admin-input-box-vue :input_cols="input_cols" :data_source="user_info">
      </admin-input-box-vue> -->
    </div>
  </div>
</template>

<script>
import AdminPageTitleVue from "../../Objects/Admin/AdminPageTitle.vue";
import AdminTitleVue from "../../Objects/Admin/AdminTitle.vue";
import CreateButtonVue from "../../Objects/Button/CreateButton.vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { reactive, ref } from "@vue/reactivity";
export default {
  components: {
    AdminPageTitleVue,
    AdminTitleVue,
    CreateButtonVue,
  },
  setup() {
    const editor = ref(ClassicEditor);
    const editor_data = ref("");
    const editor_config = reactive({
      placeholder: "建立文章...",
      alignment: {
        options: ["left", "right"],
      },
      heading: {
        options: [
          { model: "paragraph", title: "段落", class: "ck-heading_paragraph" },
          {
            model: "heading1",
            view: "h1",
            title: "Heading 1",
            class: "ck-heading_heading1",
          },
          {
            model: "heading2",
            view: "h2",
            title: "Heading 2",
            class: "ck-heading_heading2",
          },
        ],
      },
    });

    return { editor, editor_data, editor_config };
  },
};
</script>

<style scoped>
</style>