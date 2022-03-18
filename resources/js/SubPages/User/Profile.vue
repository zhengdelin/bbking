<template>
  <div>
    {{user_info}}
    <title-item title="會員專區">
      <template #return_router>
        <router-link :to="{ name: 'user' }" class="md:hidden text-blue-500">
          <svg-render-vue type="return" size="lg"></svg-render-vue>
        </router-link>
      </template>
      <template #button>
        <edit-button @click="toEdit" v-if="read_only"></edit-button>
        <template v-else>
          <cancel-button @click="cancel"></cancel-button>
          <save-button @click="handleUpdateOwnProfile"></save-button>
        </template>
      </template>
    </title-item>
    <div class="grid gap-3 pt-2 sm:p-0">
      <input-text
        title="姓名"
        v-model.trim="user_info.name"
        placeholder="姓名"
        :readonly="read_only"
        @change="dispatch('userHandler/checkName',user_info.name)"
      ></input-text>
      <input-text
        title="手機號碼"
        v-model.trim="user_info.phone"
        :readonly="read_only"
        placeholder="手機號碼"
        @change="dispatch('userHandler/checkPhone',user_info.phone)"
      ></input-text>
      <input-text
        title="帳號"
        v-model.trim="user_info.account"
        :readonly="read_only"
        :required="!read_only"
        @change="dispatch('userHandler/checkAccount',user_info.account)"
      ></input-text>
      <input-text
        title="Email"
        v-model.trim="user_info.email"
        :readonly="read_only"
        :required="!read_only"
        @change="dispatch('userHandler/checkEmail',user_info.email)"
      ></input-text>
      <!-- <input-text
        title="地址"
        v-model.trim="user_info.address"
        :readonly="read_only"
        @change="dispatch('userHandler/checkAddress',user_info.address)"
      ></input-text> -->
      <div class="md:col-span-2">
        <input-textarea
          title="地址"
          v-model.trim="user_info.address"
          :readonly="read_only"
          rows="4"
          @change="dispatch('userHandler/checkAddress',user_info.address)"
        ></input-textarea>
      </div>
    </div>
  </div>
</template>

<script>
import InputTextarea from "../../components/Objects/Input/InputTextarea.vue";
import InputText from "../../components/Objects/Input/InputText.vue";
import EditButton from "../../components/Objects/Button/EditButton.vue";
import SaveButton from "../../components/Objects/Button/SaveButton.vue";
import CancelButton from "../../components/Objects/Button/CancelButton.vue";
import ReturnButton from "../../components/Objects/Button/ReturnButton.vue";
import ChangePas from "../../components/User/ChangePas.vue";
import { ref } from "@vue/reactivity";
import { computed, nextTick, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import TitleItem from "../../components/Objects/TitleItem.vue";
export default {
  components: {
    InputTextarea,
    InputText,
    EditButton,
    SaveButton,
    CancelButton,
    ReturnButton,
    ChangePas,
    TitleItem,
  },
  setup() {
    const { state, dispatch,commit } = useStore();
    //data
    const show = ref(false);
    const read_only = ref(true);
    const state_user_info = computed(() => state.user_info);
    const user_info = ref();
    user_info.value = { ...state_user_info.value };
    //進入編輯
    const toEdit = () => {
      read_only.value = false;
    };
    //更新
    const handleUpdateOwnProfile = async () => {
      if (changed.value) {
        await dispatch("userHandler/updateOwnProfile", user_info.value).then(() => {
          if (state.status !== "error"){
            commit("setUserInfo",user_info.value);
            read_only.value = true;
          }
        });
      } else read_only.value = true;
    };
    //取消
    const cancel = () => {
      nextTick(() => {
        user_info.value = { ...state_user_info.value };
        read_only.value = true;
      });
    };
    const changed = computed(() => {
      return (
        JSON.stringify(user_info.value) !==
        JSON.stringify(state_user_info.value)
      );
    });
    return {
      show,
      read_only,
      user_info,
      toEdit,
      handleUpdateOwnProfile,
      cancel,
      dispatch,
    };
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.border-black {
  border: 1.5px solid black !important;
}
</style>
