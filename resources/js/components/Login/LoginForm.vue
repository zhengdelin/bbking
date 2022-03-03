<template>
  <div class="login-register-form sm:w-[80%] lg:w-[60%]">
    <alert-box class="mb-1"></alert-box>

    <input-text
      title="帳號"
      v-model.trim="account"
      placeholder="account"
      :value="account"
      focus
      :valueChange="commit('clearApiError')"
    ></input-text>
    <input-text
      title="密碼"
      v-model.trim="password"
      :value="password"
      type="password"
      placeholder="password"
      :valueChange="commit('clearApiError')"
    ></input-text>
    <div class="w-full sm:px-2 pb-2">
      <input type="checkbox" name="remember" v-model="remember" />
      <label class="ps-1" for="remember">保持登入</label>
    </div>
    <div class="w-full flex-jc hover:cursor-pointer">
      <input type="button" value="登入" @click="login()" />
    </div>
  </div>
</template>

<script>
import InputText from "../Objects/Input/InputText.vue";
import AlertBox from "../Objects/AlertBox.vue";
import { reactive, toRefs } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  components: {
    AlertBox,
    InputText,
  },
  setup() {
    const { dispatch, state, commit } = useStore();
    const router = useRouter();
    //data
    const login_data = reactive({
      account: "",
      password: "",
      remember: true,
    });
    //function
    const login = async () => {
      const res = await dispatch("userHandler/handleLogin", login_data);
      // console.log('loginForm->',state);
      if (state.is_login) {
        router.push({ name: "user" });
      }
    };
    return {
      ...toRefs(login_data),
      login,
      commit,
    };
  },
};
</script>

<style scoped>
</style>