// 新增使用者
<template>
  <div class="flex flex-col">
    <admin-page-title-vue
      target="admin-members"
      title="會員 - 新增會員"
    ></admin-page-title-vue>
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
import AdminPageTitleVue from "../../../components/Admin/AdminPageTitle.vue";
import AdminTitleVue from "../../../components/Admin/AdminTitle.vue";
import CreateButtonVue from "../../../components/Objects/Button/CreateButton.vue";
import AdminInputBoxVue from "../../../components/Admin/AdminInputBox.vue";
import { watch } from "@vue/runtime-core";
export default {
  components: {
    CreateButtonVue,
    AdminTitleVue,
    AdminPageTitleVue,
    AdminInputBoxVue,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { dispatch, state } = useStore();
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
      await dispatch("userHandler/createUserMember", user_info.value);
      // console.log(state);
      if (state.status === "success") {
        router.push({
          name: "admin-members",
          params: { update_user_info: true },
        });
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
        func_call: "userHandler/checkAccount",
        func_datas: ["account"],
      },
      {
        model: "password",
        func_call: "userHandler/checkPassword",
        func_datas: ["password"],
      },
      {
        model: "name",
        func_call: "userHandler/checkName",
        func_datas: ["name"],
      },
      {
        model: "phone",
        func_call: "userHandler/checkPhone",
        func_datas: ["phone"],
      },
      {
        model: "email",
        func_call: "userHandler/checkEmail",
        func_datas: ["email"],
      },
      {
        model: "address",
        func_call: "userHandler/checkAddress",
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