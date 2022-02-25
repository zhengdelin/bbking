<template>
  <div class="login-register-form w-sm-80 w-lg-60">
    <alert-box class="mb-1"></alert-box>

    <input-text
      title="帳號"
      v-model.trim="account"
      placeholder="account"
      :value="account"
      focus
      :valueChange="clearApiError"
    ></input-text>
    <input-text
      title="密碼"
      v-model.trim="password"
      :value="password"
      type="password"
      placeholder="password"
      :valueChange="clearApiError"
    ></input-text>
    <div class="col px-sm-2 pb-2">
      <input type="checkbox" name="remember" v-model="remember" />
      <label class="ps-1" for="remember">保持登入</label>
    </div>
    <div class="col flex-jc">
      <input type="button" value="登入" @click="handleLogin()" />
    </div>
  </div>
</template>

<script>
import InputText from "../Objects/InputText.vue";
import AlertBox from "../Objects/AlertBox.vue";
import { reactive, ref, toRefs } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { login } from "../../composition/userHandler.js";
export default {
  components: {
    AlertBox,
    InputText,
  },
  setup() {
    const { userLogin, setStatus,clearApiError } = inject("store");
    const router = useRouter();
    //data
    const login_data = reactive({
      account: "",
      password: "",
      remember: true,
    });
    //function
    const handleLogin = async () => {
      const res = await login(login_data);
      if (res.status) {
        setStatus("error", res.status_obj, res.status);
      } else {
        userLogin(login_data.account);
        router.push({ name: "user" });
      }
    };
    return {
      ...toRefs(login_data),
      handleLogin,
      clearApiError
    };
  },
};
</script>

<style scoped>
</style>