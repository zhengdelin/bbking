// 新增使用者
<template>
  <div class="flex flex-col">
    <admin-page-title-vue
      target="admin-members"
      title="會員 - 新增會員"
    ></admin-page-title-vue>
    <alert-box-vue></alert-box-vue>
    <div class="flex flex-col">
      <admin-title-vue title="會員資訊">
        <template v-slot:button>
          <create-button-vue @click="createUser"></create-button-vue>
        </template>
      </admin-title-vue>
      <admin-input-box-vue :input_cols="input_cols" :data_source="user_info">
      </admin-input-box-vue>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
//components
import AdminPageTitleVue from "../../Objects/Admin/AdminPageTitle.vue";
import AdminTitleVue from "../../Objects/Admin/AdminTitle.vue";
import CreateButtonVue from "../../Objects/Button/CreateButton.vue";
import AlertBoxVue from "../../Objects/AlertBox.vue";
import AdminInputBoxVue from "../../Objects/Admin/AdminInputBox.vue";
import { watch } from "@vue/runtime-core";
export default {
  components: {
    CreateButtonVue,
    AdminTitleVue,
    AdminPageTitleVue,
    AlertBoxVue,
    AdminInputBoxVue,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const user_info = ref({
      account: "",
      password: "",
      email: "",
      name: "",
      phone: "",
      address: "",
      active: true,
    });
    const createUser = async () => {
      await store.dispatch("userHandler/handleCreateUserMember", user_info.value);
      // console.log(state);
      if (store.state.status !== "error") {
        router.push({ name: "admin-members" });
      }
    };
    watch(route, async (from, to) => {
      if (to.name === "admin-members-create") {
        user_info.value = {
          account: "",
          password: "",
          email: "",
          name: "",
          phone: "",
          address: "",
          active: true,
        };
      }
    });
    const input_cols = reactive([
      {
        model: "account",
        func_call: "userHandler/handleCheckAccount",
        func_datas: ["account"],
      },
      {
        model: "password",
        func_call: "userHandler/handleCheckPassword",
        func_datas: ["password"],
      },
      {
        model: "name",
        func_call: "userHandler/handleCheckName",
        func_datas: ["name"],
      },
      {
        model: "phone",
        func_call: "userHandler/handleCheckPhone",
        func_datas: ["phone"],
      },
      {
        model: "email",
        func_call: "userHandler/handleCheckEmail",
        func_datas: ["email"],

      },
      {
        model: "address",
        func_call: "userHandler/handleCheckAddress",
        func_datas: ["address"],
      },
      {
        model: "active",
        component: "input-single-checkbox-vue",
      },
    ]);
    return {
      user_info,
      createUser,
      input_cols,
    };
  },
};
</script>

<style scoped>
</style>