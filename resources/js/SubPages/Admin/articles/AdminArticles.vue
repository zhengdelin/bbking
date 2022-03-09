<template>
  <div class="flex flex-col">
    <admin-title-vue title="文章一覽">
      <template v-slot:button>
        <router-link :to="{ name: 'admin-articles-create' }">
          <create-button-vue target_text="文章"></create-button-vue>
        </router-link>
      </template>
    </admin-title-vue>
    <admin-table-vue :column_heads="column_heads" :datas="articles" :keys="keys">
    </admin-table-vue>
  </div>
</template>
<script>

import { ref } from "@vue/runtime-core";
import { useStore } from "vuex";

import AdminTableVue from '../../../components/Admin/AdminTable.vue';
import AdminTitleVue from '../../../components/Admin/AdminTitle.vue';
import CreateButtonVue from '../../../components/Objects/Button/CreateButton.vue';
export default {
  components: { AdminTitleVue, AdminTableVue, CreateButtonVue },
  async setup() {
    const { dispatch } = useStore();
    const articles = ref(null);
    /* 取得資料 */
    const res = await dispatch("articleHandler/getArticles");
    articles.value = res;
    /* 標頭 */
    const column_heads = ref(["標題", "內容", "上次更新", "類別"]);
    //key
    const keys = ref(["title", "content", "updated_at", "category"]);

    return {
      articles,
      column_heads,
      keys,
    };
  },
};
</script>

<style scoped>
</style>