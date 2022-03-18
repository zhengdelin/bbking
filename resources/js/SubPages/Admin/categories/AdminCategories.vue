<template>
  <title-item title="類別資訊">
    <template v-slot:button>
      <router-link
        :to="{ name: 'admin-categories-create', params: { type: 'category' } }"
      >
        <create-button-vue target_text="類別"></create-button-vue>
      </router-link>
    </template>
  </title-item>
  <admin-table-vue
    :datas="categories"
    :keys="keys"
    update_route_name="admin-categories-update"
    class="mb-5"
  >
  </admin-table-vue>
  <title-item title="類別群組">
    <template v-slot:button>
      <router-link
        :to="{ name: 'admin-categories-create', params: { type: 'category_group' } }"
      >
        <create-button-vue target_text="類別群組"></create-button-vue>
      </router-link>
    </template>
  </title-item>
  <admin-table-vue
    :datas="category_groups"
    :keys="cg_keys"
    update_route_name="admin-categories-update"
  >
  </admin-table-vue>
</template>

<script>
import { computed, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import CreateButtonVue from "../../../components/Objects/Button/CreateButton.vue";
import AdminTableVue from "../../../components/Admin/AdminTable.vue";
import { useRoute } from "vue-router";
import TitleItem from '../../../components/Objects/TitleItem.vue';

export default {
  name: "AdminCategories",
  components: {
    AdminTableVue,
    CreateButtonVue,
    TitleItem,
  },
  async setup() {
    const route = useRoute();
    const { dispatch, state } = useStore();
    //key
    const keys = ["name", "category_group_name"];
    const categories = computed(() => {
      return [].concat(...Object.values(state.globalHandler.categories));
    });
    //類別群組的key
    const cg_keys = ["name"];
    /* 類別群組的資料 */
    const category_groups = computed(() => state.globalHandler.category_groups);
    const update_category = computed(() => route.params.update_category);
    watch(update_category, async () => {
      if (update_category.value) {
        await dispatch("globalHandler/getCategories");
      }
    });

    return {
      keys,
      categories,
      cg_keys,
      category_groups,
    };
  },
};
</script>

<style scoped>
</style>