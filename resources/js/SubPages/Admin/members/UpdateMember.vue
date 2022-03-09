// 新增使用者
<template>
  <div class="flex flex-col">
    <admin-page-title-vue
      target="admin-members"
      title="會員 - 編輯會員"
    ></admin-page-title-vue>
    <div class="flex flex-col">
      <admin-title-vue title="會員資訊">
        <template v-slot:button>
          <save-button-vue @click="updateUserMember"></save-button-vue>
        </template>
      </admin-title-vue>
      <admin-input-box-vue :input_cols="input_cols" :data_source="user_info">
      </admin-input-box-vue>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import {  nextTick, watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
//components

import AdminPageTitleVue from "../../../components/Admin/AdminPageTitle.vue";
import AdminTitleVue from "../../../components/Admin/AdminTitle.vue";
import AdminInputBoxVue from "../../../components/Admin/AdminInputBox.vue";
import SaveButtonVue from "../../../components/Objects/Button/SaveButton.vue";
import { useStore } from "vuex";

export default {
  props: {
    info: {
      type: String,
      default: () => {},
    },
  },
  components: {
    SaveButtonVue,
    AdminTitleVue,
    AdminPageTitleVue,
    AdminInputBoxVue,
  },
  setup(props) {
    const router = useRouter();
    const { dispatch, state } = useStore();
    if (!props.info) {
      router.push({ name: "admin-members" });
    }
    const user_info = ref(props.info ? JSON.parse(props.info) : {})
    // console.log('updatemember->',user_info);

    const updateUserMember = async () => {
      await dispatch("userHandler/updateUserMember", user_info.value);
      if (state.status === "success") {
        router.push({
          name: "admin-members",
          params: { update_user_info: 1 },
        });
      }
    };

    const input_cols = reactive([
      {
        model: "account",
        func_call: "userHandler/checkAccount",
        func_datas: ["account"],
      },
      {
        model: "email",
        func_call: "userHandler/checkEmail",
        func_datas: ["email"],
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
        model: "address",
        func_call: "userHandler/checkAddress",
        func_datas: ["address"],
      },
      {
        model: "active",
        component: "input-single-checkbox-vue",
      },
    ]);
    watch(router.currentRoute, () => {
      nextTick(() => {
        // console.log(props.info);
        user_info.value = props.info ? JSON.parse(props.info) : {};
      });
    });
    return {
      user_info,
      input_cols,
      updateUserMember,
    };
  },
};
</script>

<style scoped>
</style>