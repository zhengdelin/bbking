<template>
  <div class="flex flex-col">
    <admin-title-vue title="會員資訊">
      <template v-slot:button>
        <router-link :to="{ name: 'admin-members-create' }">
          <create-button-vue target="會員"></create-button-vue>
        </router-link>
      </template>
    </admin-title-vue>
    <admin-form-vue
      :column_heads="column_heads"
      :datas="all_user_info"
    >
    </admin-form-vue>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref, watch } from "@vue/runtime-core";
import AdminFormVue from "../../Objects/Admin/AdminForm.vue";
import CreateButtonVue from "../../Objects/Button/CreateButton.vue";
import AdminTitleVue from "../../Objects/Admin/AdminTitle.vue";
import { handleGetAllUserInfo } from "../../../composition/userHandler";
import { useRoute } from 'vue-router';

export default {
  components: {
    AdminFormVue,
    CreateButtonVue,
    AdminTitleVue,
  },
  async setup() {
    const route = useRoute()
    //欄位標頭
    const column_heads = ref([
      "id",
      "帳號",
      "姓名",
      "電子郵件",
      "電話",
      "地址",
      "啟用中"
    ]);
    onMounted(() => {
      console.log("admin members onmounted");
    });
    //取得資料
    let res = await handleGetAllUserInfo();
    //data
    const all_user_info = ref(res.datas);
    watch(route,async (from,to)=>{
      if(to.name === "admin-members"){
        res = await handleGetAllUserInfo();
        all_user_info.value = res.datas;
      }
    })
    

    return { all_user_info, column_heads };
  },
};
</script>

<style scoped>
</style>