<template>
  <div class="login-register-form w-sm-80 w-lg-60">
    <alert-box class="mb-1"></alert-box>

    <input-text
      title="帳號"
      placeholder="account"
      v-model.trim="account"
      :valueChange="handleCheckAccount"
      :value="account"
      focus
      ref="accountDOM"
    ></input-text>
    <input-text
      type="password"
      placeholder="password"
      title="密碼"
      :value="password"
      v-model.trim="password"
      :valueChange="handleCheckPassword"
    ></input-text>
    <input-text
      type="password"
      title="再次輸入密碼"
      placeholder="check password"
      :value="check_password"
      v-model.trim="check_password"
      :valueChange="handleCheckAgainPassword"
    ></input-text>
    <input-text
      title="電子郵件"
      placeholder="email"
      :value="email"
      v-model.trim="email"
      :valueChange="handleCheckEmail"
    ></input-text>
    <div class="col px-sm-2 pb-2">
      <input type="checkbox" name="remember" v-model="remember" />
      <label class="ps-1" for="remember">保持登入</label>
    </div>
    <div class="col flex-jc">
      <input type="button" value="註冊" @click="handleRegister" />
    </div>
  </div>
</template>

<script>
import InputText from "../Objects/InputText.vue";
import AlertBox from "../Objects/AlertBox.vue";
import { reactive, ref, toRefs } from "@vue/reactivity";
import { useRouter } from "vue-router";
import {
  checkAccount,
  checkAgainPassword,
  checkEmail,
  checkPassword,
  register,
} from "../../composition/userHandler";
import { inject } from "@vue/runtime-core";

export default {
  components: {
    AlertBox,
    InputText,
  },
  setup() {
    const { state,userRegister, setStatus } = inject("store");
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

    const handleCheckAccount = async () => {
      // console.log("account", register_data);
      const error = await checkAccount(register_data.account);
      setStatus("error",error,"account");
    };
    const handleCheckEmail = async () => {
      const error = await checkEmail(register_data.email);
      // console.log(error);
      setStatus("error",error,"email");
    };
    const handleCheckPassword = async () => {
      const error = await checkPassword(register_data.password);
      handleCheckAgainPassword();
      // console.log([...error, ...error2]);
      setStatus("error",error,"password");
    };
    const handleCheckAgainPassword = async () => {
      const error = await checkAgainPassword(
        register_data.password,
        check_password.value
      );
      setStatus("error",error,"check_password");
    };

    const handleRegister = async () => {
      if (state.status !== "error") {
        console.log(state);
        const res = await register(register_data);
        console.log(res);
        // console.log(res);
        if (res.status) {
          setStatus("error", res.status_obj, res.status);
        } else {
          userRegister(register_data.account);
          router.push({ name: "user" });
        }
      }
    };
    //更新狀態
    return {
      accountDOM,
      ...toRefs(register_data),
      check_password,
      handleRegister,
      handleCheckAccount,
      handleCheckEmail,
      handleCheckPassword,
      handleCheckAgainPassword,
    };
  },
};
</script>

<style scoped>
</style>