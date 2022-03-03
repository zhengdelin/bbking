<template>
  <div class="flex flex-col">
    <admin-title-vue title="會員資訊">
      <template v-slot:button>
        <router-link :to="{ name: 'admin-members-create' }">
          <create-button-vue target_text="會員"></create-button-vue>
        </router-link>
      </template>
    </admin-title-vue>
    <admin-form-vue :column_heads="column_heads" :datas="all_user_info" :keys="keys">
    </admin-form-vue>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "@vue/runtime-core";
import AdminFormVue from "../../Objects/Admin/AdminForm.vue";
import CreateButtonVue from "../../Objects/Button/CreateButton.vue";
import AdminTitleVue from "../../Objects/Admin/AdminTitle.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  components: {
    AdminFormVue,
    CreateButtonVue,
    AdminTitleVue,
  },
  async setup() {
    const route = useRoute();
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
      "account","name","email","phone","address","role","active"
    ])
    onMounted(() => {
      console.log("admin members onmounted");
    });
    //取得資料
    let res = await dispatch("userHandler/handleGetUserMember");
    //data
    const all_user_info = ref(res);
    console.log("admin-members->",all_user_info.value);
    watch(route, async (from, to) => {
      if (to.name === "admin-members") {
        res = await dispatch("userHandler/handleGetUserMember");
        // console.log(res);
        all_user_info.value = res;
      }
    });

    return { all_user_info, column_heads,keys };
  },
};
</script>

<style scoped>
</style>