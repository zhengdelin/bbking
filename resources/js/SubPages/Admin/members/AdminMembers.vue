<template>
  <div class="flex flex-col">
    <admin-title-vue title="會員資訊">
      <template v-slot:button>
        <router-link :to="{ name: 'admin-members-create' }">
          <create-button-vue target_text="會員"></create-button-vue>
        </router-link>
      </template>
    </admin-title-vue>
    <admin-table-vue
      :column_heads="column_heads"
      :datas="all_user_info"
      :keys="keys"
    >
    </admin-table-vue>
  </div>
</template>

<script>
import { computed, ref, watch } from "@vue/runtime-core";
import AdminTableVue from "../../../components/Admin/AdminTable.vue";
import CreateButtonVue from "../../../components/Objects/Button/CreateButton.vue";
import AdminTitleVue from "../../../components/Admin/AdminTitle.vue";
import { useStore } from "vuex";

export default {
  components: {
    AdminTableVue,
    CreateButtonVue,
    AdminTitleVue,
  },
  props: {
    update_user_info: {
      type: String,
      default: '',
    },
  },
  async setup(props) {
    const { dispatch } = useStore();
    //欄位標頭
    const column_heads = ref([
      "帳號",
      "姓名",
      "電子郵件",
      "電話",
      "地址",
      "身分",
      "啟用中",
    ]);
    //key
    const keys = ref([
      "account",
      "name",
      "email",
      "phone",
      "address",
      "role",
      "active",
    ]);
    //取得資料
    const all_user_info = ref();
    const res = await dispatch("userHandler/getUserMember");
    all_user_info.value = res;

    const update_user_info = computed(() => props.update_user_info);
    watch(update_user_info, async () => {
      if(update_user_info.value){
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