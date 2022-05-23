<template>
  <title-item
    return_to_route_name="admin-articles"
    title="文章 - 新增文章"
  ></title-item>
  <title-item title="文章資訊">
    <template v-slot:button>
      <create-button-vue @click="handleCreateArticle"></create-button-vue>
    </template>
  </title-item>
  <admin-input-form-vue class="mb-2">
    <template v-slot:form_items>
      <div class="col-span-6 md:col-span-3">
        <input-text-vue
          :title="TITLE.title"
          :focus="true"
          :trim="true"
          :required="true"
          v-model="article.title"
          @change="dispatch('articleHandler/checkTitle', article.title)"
        ></input-text-vue>
      </div>
      <div class="col-span-6 md:col-span-3">
        <input-select-vue
          :required="true"
          :title="TITLE.category"
          :option_group="categories"
          v-model="article.category_id"
        ></input-select-vue>
      </div>
    </template>
  </admin-input-form-vue>
  <tinymce-editor-vue placeholder="...請輸入文章內容"></tinymce-editor-vue>
</template>

<script>
import TinymceEditorVue from "../../../components/Objects/TinymceEditor.vue";
import CreateButtonVue from "../../../components/Objects/Button/CreateButton.vue";
import AdminInputFormVue from "../../../components/Admin/AdminInputForm.vue";
import InputTextVue from "../../../components/Objects/Input/InputText.vue";
import InputSelectVue from "../../../components/Objects/Input/InputSelect.vue";

import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "@vue/runtime-core";
import { TITLE } from "../../../TITLE";
import TitleItem from "../../../components/Objects/Title/TitleItem.vue";

export default {
  components: {
    CreateButtonVue,
    TinymceEditorVue,
    AdminInputFormVue,
    InputTextVue,
    InputSelectVue,
    TitleItem,
  },
  setup() {
    const { dispatch, state } = useStore();

    const categories = computed(() => state.globalHandler.categories);

    const router = useRouter();
    const article = ref({
      title: "",
      category_id: "",
      content: ""
    });
    const handleCreateArticle = () => {
      article.value.content = tinymce.get("tinymce_editor").getContent();
      dispatch("articleHandler/createArticle", article.value).then(() => {
        if (state.status !== "error")
          router.push({
            name: "admin-articles",
            params: { update_article: true },
          });
      });
    };
    return { article, categories, handleCreateArticle, dispatch, TITLE };
  },
};
</script>

<style scoped>
</style>