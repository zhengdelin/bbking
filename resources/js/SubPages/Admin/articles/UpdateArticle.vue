<template>
  <div class="flex flex-col">
    <admin-page-title-vue
      target="admin-articles"
      title="文章 - 新增文章"
    ></admin-page-title-vue>
    <div class="flex flex-col">
      <admin-title-vue title="文章資訊">
        <template v-slot:button>
          <create-button-vue @click="handleCreateArticle"></create-button-vue>
        </template>
      </admin-title-vue>
      <admin-input-box-vue
        :data_source="article"
        :input_cols="input_cols"
        class="mb-2"
      ></admin-input-box-vue>
      <tinymce-editor-vue></tinymce-editor-vue>
    </div>
  </div>
</template>

<script>
import AdminPageTitleVue from "../../../components/Admin/AdminPageTitle.vue";
import AdminTitleVue from "../../../components/Admin/AdminTitle.vue";
import CreateButtonVue from "../../../components/Objects/Button/CreateButton.vue";
import TinymceEditorVue from "../../../components/Objects/TinymceEditor.vue";
import AdminInputBoxVue from "../../../components/Admin/AdminInputBox.vue";

import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "@vue/runtime-core";
export default {
  components: {
    AdminPageTitleVue,
    AdminTitleVue,
    CreateButtonVue,
    TinymceEditorVue,
    AdminInputBoxVue,
  },
  props: {
    info: {
      type: String,
      default: () => {},
    },
  },
  setup(props) {
    const router = useRouter();
    const { dispatch, state } = useStore();
    /* 如果沒東西跳轉回去 */
    if (!props.info) 
      router.push({ name: "admin-articles" });
    
    const categories = computed(() => state.globalHandler.categories);
    const article = computed(()=>props.info ? JSON.parse(props.info) :'');

    const input_cols = reactive([
      {
        model: "title",
        // func_call: "articleHandler/handleCheckArticleTitle",
        func_datas: ["title"],
        col_span: "col-span-6",
      },
      {
        model: "category",
        component: "input-select-vue",
        option_group: categories.value,
        col_span: "col-span-6",
      },
    ]);
    const handleCreateArticle = () => {
      article.value.content = tinymce.get("tinymce_editor").getContent();
      dispatch("articleHandler/createArticle", article.value).then(
        () => {
          if (state.status!=='error') router.push({ name: "admin-articles" });
        }
      );
    };
    return { article, input_cols, handleCreateArticle };
  },
};
</script>

<style scoped>
</style>