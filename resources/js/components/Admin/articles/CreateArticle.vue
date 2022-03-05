<template>
  <div class="flex flex-col">
    <admin-page-title-vue
      target="admin-articles"
      title="文章 - 新增文章"
    ></admin-page-title-vue>
    <div class="flex flex-col">
      <admin-title-vue title="文章資訊">
        <template v-slot:button>
          <create-button-vue ></create-button-vue>
        </template>
      </admin-title-vue>
      <tinymce-editor-vue></tinymce-editor-vue>
      {{content}}
      
      <!-- <admin-input-box-vue :input_cols="input_cols" :data_source="user_info">
      </admin-input-box-vue> -->
    </div>
  </div>
</template>

<script>
import AdminPageTitleVue from "../../Objects/Admin/AdminPageTitle.vue";
import AdminTitleVue from "../../Objects/Admin/AdminTitle.vue";
import CreateButtonVue from "../../Objects/Button/CreateButton.vue";
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from '@vue/runtime-core';
import TinymceEditorVue from '../../Objects/TinymceEditor.vue';
// import TipTapEditorVue from '../../Objects/TipTapEditor.vue';
export default {
  components: {
    AdminPageTitleVue,
    AdminTitleVue,
    CreateButtonVue,
    TinymceEditorVue
    // TipTapEditorVue,
  },
  setup() {
    
    const init ={

    }
    const content = ref("");
    return {content,init};
  }
  
};
</script>

<style scoped>

</style>