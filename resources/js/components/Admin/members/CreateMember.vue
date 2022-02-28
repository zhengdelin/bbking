// 新增使用者
<template>
  <div class="flex flex-col">
    <admin-page-title-vue
      target="admin-members"
      title="會員資訊"
    ></admin-page-title-vue>
    <alert-box-vue></alert-box-vue>
    <div class="flex flex-col">
      <admin-title-vue title="會員資訊">
        <template v-slot:button>
          <create-button-vue @click="createUser"></create-button-vue>
        </template>
      </admin-title-vue>
      <div class="bg-white rounded-md border-gray-500 p-4">
        <div class="grid grid-cols-6 gap-4">
          <div class="col-span-6 md:col-span-3 lg:col-span-2">
            <input-text-vue
              title="帳號"
              v-model.trim="account"
              @change="handleCheckAccount(account)"
            ></input-text-vue>
          </div>
          <div class="col-span-6 md:col-span-3 lg:col-span-2">
            <input-text-vue
              title="密碼"
              v-model.trim="password"
              @change="handleCheckPassword(password)"
            ></input-text-vue>
          </div>
          <div class="col-span-6 md:col-span-3 lg:col-span-2">
            <input-text-vue
              title="電子郵件"
              v-model.trim="email"
              @change="handleCheckEmail(email)"
            ></input-text-vue>
          </div>
          <div class="col-span-6 md:col-span-3 lg:col-span-2">
            <input-text-vue
              title="姓名"
              v-model.trim="name"
              @change="handleCheckName(name)"
              class="col-span-6 md:col-span-3 lg:col-span-2"
            ></input-text-vue>
          </div>
          <div class="col-span-6 md:col-span-3 lg:col-span-2">
            <input-text-vue
              title="電話"
              v-model.trim="phone"
              @change="handleCheckPhone(phone)"
              class="col-span-6 md:col-span-3 lg:col-span-2"
            ></input-text-vue>
          </div>
          <div class="col-span-6 md:col-span-3 lg:col-span-2">
            <input-text-vue
              title="地址"
              v-model.trim="address"
              @change="handleCheckAddress(address)"
              class="col-span-6 md:col-span-3 lg:col-span-2"
            ></input-text-vue>
          </div>
          <div class="col-span-6 md:col-span-3 lg:col-span-2">
            <input-single-checkbox-vue></input-single-checkbox-vue>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import {
  handleCheckAccount,
  handleCheckAddress,
  handleCheckEmail,
  handleCheckName,
  handleCheckPassword,
  handleCheckPhone,
  handleCreateUser,
} from "../../../composition/userHandler";
import AdminPageTitleVue from "../../Objects/Admin/AdminPageTitle.vue";
import AdminTitleVue from "../../Objects/Admin/AdminTitle.vue";
import CreateButtonVue from "../../Objects/Button/CreateButton.vue";
import InputTextVue from "../../Objects/Input/InputText.vue";
import AlertBoxVue from "../../Objects/AlertBox.vue";
import { inject } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import InputSingleCheckboxVue from '../../Objects/Input/InputSingleCheckbox.vue';

export default {
  components: {
    InputTextVue,
    CreateButtonVue,
    AdminTitleVue,
    AdminPageTitleVue,
    AlertBoxVue,InputSingleCheckboxVue
  },
  setup() {
    const router = useRouter();
    const { state } = inject("store");
    const user_info = reactive({
      account: "",
      password: "",
      email: "",
      name: "",
      phone: "",
      address: "",
    });
    const createUser = async () => {
      await handleCreateUser(user_info);
      // console.log(state);
      if (state.status !== "error") {
        router.push({ name: "admin-members" });
      }
    };
    const a=[
      {title:'帳號',model:account,trim:true,valChangeFun:handleCheckAccount,valChangeFunParams:[account]}
    ]
    return {
      ...toRefs(user_info),
      handleCheckAccount,
      handleCheckPassword,
      handleCheckEmail,
      handleCheckName,
      handleCheckPhone,
      handleCheckAddress,
      createUser,
    };
  },
};
</script>

<style scoped>
</style>