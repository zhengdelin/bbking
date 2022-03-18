<template>
  <div class="sm:w-[80%] lg:w-[60%] m-auto py-1">
    <input-text
      :title="TITLE.account"
      :focus="true"
      :required="true"
      v-model.trim="account"
      placeholder="account"
      @change="commit('clearStatus')"
    ></input-text>
    <input-text
      :title="TITLE.password"
      :required="true"
      type="password"
      v-model.trim="password"
      placeholder="password"
      @change="commit('clearStatus')"
    ></input-text>
    <input-single-checkbox title="保持登入" v-model="remember">
    </input-single-checkbox>
    <div class="w-full flex-jc hover:cursor-pointer mt-1 font-bold">
      <input type="button" value="登入" @click="handleLogin()" />
    </div>
  </div>
</template>

<script>
import InputText from "../../components/Objects/Input/InputText.vue";
import { reactive, toRefs } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { TITLE } from "../../TITLE";
import InputSingleCheckbox from "../../components/Objects/Input/InputSingleCheckbox.vue";

export default {
  components: {
    InputText,
    InputSingleCheckbox,
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
    const handleLogin = async () => {
      await dispatch("userHandler/login", login_data).then(() => {
        // console.log('loginForm->',state);
        if (state.is_login) {
          router.push("/user");
        }
      });
    };
    return {
      ...toRefs(login_data),
      handleLogin,
      commit,
      TITLE,
    };
  },
};
</script>

<style scoped>
</style>