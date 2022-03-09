<template>
  <div class="login-register-form sm:w-[80%] lg:w-[60%]">
    <alert-box class="mb-1"></alert-box>

    <input-text
      title="帳號"
      placeholder="account"
      v-model.trim="account"
      @change="dispatch('userHandler/checkAccount', { account })"
      focus
      ref="accountDOM"
    ></input-text>
    <input-text
      type="password"
      placeholder="password"
      title="密碼"
      v-model.trim="password"
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
      @change="dispatch('userHandler/checkEmail', { email })"
    ></input-text>
    <div class="col px-sm-2 pb-2">
      <input type="checkbox" name="remember" v-model="remember" />
      <label class="ps-1" for="remember">保持登入</label>
    </div>
    <div class="col flex-jc">
      <input type="button" value="註冊" @click="register" />
    </div>
  </div>
</template>

<script>
import InputText from "../../components/Objects/Input/InputText.vue";
import AlertBox from "../../components/Objects/AlertBox.vue";
import { reactive, ref, toRefs } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  components: {
    AlertBox,
    InputText,
  },
  setup() {
    const { dispatch, state } = useStore();
    // ref
    const accountDOM = ref(null);
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

    const register = async () => {
      await dispatch("userHandler/register", register_data);
      
      if (state.is_login) router.push({ name: "user" });
    };
    //更新狀態
    return {
      accountDOM,
      ...toRefs(register_data),
      check_password,
      register,
      dispatch,
    };
  },
};
</script>

<style scoped>
</style>