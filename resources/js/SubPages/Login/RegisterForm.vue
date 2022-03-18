<template>
  <div class="sm:w-[80%] lg:w-[60%]  m-auto py-1">
    <input-text
      :title="TITLE.account"
      :focus="true"
      :required="true"
      v-model.trim="account"
      placeholder="account"
      @change="dispatch('userHandler/checkAccount', account )"
    ></input-text>
    <input-text
      :title="TITLE.password"
      :required="true"
      type="password"
      v-model.trim="password"
      placeholder="password"
      @change="
        dispatch('userHandler/checkPassword', {
          password,
          check_password,
        })
      "
    ></input-text>
    <input-text
      type="password"
      title="再次輸入密碼"
      placeholder="check password"
      v-model.trim="check_password"
      @change="
        dispatch('userHandler/checkAgainPassword', {
          password,
          check_password,
        })
      "
    ></input-text>
    <input-text
      title="電子郵件"
      placeholder="email"
      v-model.trim="email"
      @change="dispatch('userHandler/checkEmail', email )"
    ></input-text>
    <input-single-checkbox title="保持登入" v-model="remember">
    </input-single-checkbox>
    <div class="w-full flex-jc hover:cursor-pointer mt-1">
      <input type="button" value="註冊" @click="handleRegister()" />
    </div>
  </div>
</template>

<script>
import InputText from "../../components/Objects/Input/InputText.vue";
import AlertBox from "../../components/Objects/AlertBox.vue";
import { reactive, ref, toRefs } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { TITLE } from '../../TITLE';
import InputSingleCheckbox from '../../components/Objects/Input/InputSingleCheckbox.vue';

export default {
  components: {
    AlertBox,
    InputText,
    InputSingleCheckbox,
  },
  setup() {
    const { dispatch, state } = useStore();
    //router
    const router = useRouter();
    //註冊資料
    const register_data = reactive({
      account: "",
      password: "",
      email: "",
      remember: true,
    });
    const check_password = ref("");
    //function
    const handleRegister = async () => {
      await dispatch("userHandler/register", register_data);
      if (state.is_login) router.push("/user");
    };
    //更新狀態
    return {
      ...toRefs(register_data),
      check_password,
      handleRegister,
      dispatch,
      TITLE
    };
  },
};
</script>

<style scoped>
</style>