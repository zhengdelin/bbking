<template>
  <title-item
    title="文章 - 編輯文章"
    return_to_route_name="admin-articles"
  ></title-item>
  <admin-title-vue title="文章資訊">
    <template v-slot:button>
      <save-button-vue @click="handleUpdateArticle"></save-button-vue>
    </template>
  </admin-title-vue>
  <admin-input-form-vue class="mb-2">
    <template v-slot:form_items>
      <div class="col-span-6 md:col-span-3">
        <input-text-vue
          :focus="true"
          :trim="true"
          :required="true"
          :title="TITLE.title"
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
  <tinymce-editor-vue :initial_value="article.content"></tinymce-editor-vue>
</template>

<script>

import TinymceEditorVue from "../../../components/Objects/TinymceEditor.vue";
import AdminInputFormVue from "../../../components/Admin/AdminInputForm.vue";
import InputTextVue from "../../../components/Objects/Input/InputText.vue";
import InputSelectVue from "../../../components/Objects/Input/InputSelect.vue";
import SaveButtonVue from "../../../components/Objects/Button/SaveButton.vue";

import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, onMounted } from "@vue/runtime-core";
import { TITLE } from "../../../TITLE";
import TitleItem from '../../../components/Objects/TitleItem.vue';

export default {
  components: {
    SaveButtonVue,
    TinymceEditorVue,
    AdminInputFormVue,
    InputTextVue,
    InputSelectVue,
    TitleItem,
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
    //info
    const info  = computed(()=>props.info)
    /* 如果沒東西跳轉回去 */
    if (!info.value) router.push({ name: "admin-articles" });
    //類別
    const categories = computed(() => state.globalHandler.categories);
    //掛載資料
    const article = ref();
    article.value = info.value ? JSON.parse(info.value) : {}
    // console.log(article.value);

    const handleUpdateArticle = () => {
      article.value.content = tinymce.get("tinymce_editor").getContent();
      dispatch("articleHandler/updateArticle", article.value).then(() => {
        if (state.status !== "error")
          router.push({
            name: "admin-articles",
            params: { update_article: true },
          });
      });
    };
    return { TITLE, categories, article, handleUpdateArticle, dispatch };
  },
};
</script>

<style scoped>
</style>