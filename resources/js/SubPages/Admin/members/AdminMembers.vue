<template>
  <title-item title="會員資訊">
    <template v-slot:button>
      <router-link :to="{ name: 'admin-members-create' }">
        <create-button-vue target_text="會員"></create-button-vue>
      </router-link>
    </template>
  </title-item>
  <admin-table-vue
    :column_heads="column_heads"
    :datas="all_user_info"
    :keys="keys"
    update_route_name="admin-members-update"
  >
  </admin-table-vue>
</template>

<script>
import { computed, ref, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import CreateButtonVue from "../../../components/Objects/Button/CreateButton.vue";
import AdminTableVue from "../../../components/Admin/AdminTable.vue";
import TitleItem from '../../../components/Objects/Title/TitleItem.vue';

export default {
  name: "AdminMembers",
  components: {
    AdminTableVue,
    CreateButtonVue,
    TitleItem,
  },
  async setup() {
    const route = useRoute();
    const { dispatch } = useStore();
    //欄位標頭
    const column_heads = [
      "帳號",
      "姓名",
      "電子郵件",
      "電話",
      "地址",
      "身分",
      "狀態",
    ];
    //key
    const keys = [
      "account",
      "name",
      "email",
      "phone",
      "address",
      "role",
      { name: "status", type: "boolean" },
    ];
    //取得資料
    const all_user_info = ref();
    const res = await dispatch("userHandler/getUserMember");
    all_user_info.value = res;

    const update_user_info = computed(() => route.params.update_user_info);
    watch(update_user_info, async () => {
      if (update_user_info.value) {
        const res = await dispatch("userHandler/getUserMember");
        all_user_info.value = res;
      }
    });

    return { all_user_info, column_heads, keys };
  },
};
</script>

<style scoped>
</style>