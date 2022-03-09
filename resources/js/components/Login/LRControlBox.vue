<template>
  <div class="flex-cc text-center w-full">
    <router-link
      :to="{ name: 'user_login' }"
      class="w-full font-bold login-register-option"
      :class="{ 'opt-selected': login_register === 'login' }"
    >
      登入
    </router-link>
    <router-link
      :to="{ name: 'user_register' }"
      class="w-full font-bold login-register-option"
      :class="{ 'opt-selected': login_register === 'register' }"
    >
      註冊
    </router-link>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";

export default {
  props: {
    login_register: String,
  },
  setup(props) {
    const login_register = computed(() => props.login_register);
    return { login_register };
  },
};
</script>

<style>
.login-register-option {
  text-decoration: none;
  color: black;
  display: inline-block;
  padding: 0.3rem 0.6rem;
  text-align: center;
  vertical-align: middle;
  background-color: #fff;
  border: 1px #ccc solid;
  border-radius: 4px;
}
.login-register-option.opt-selected {
  background-color: rgb(58, 52, 52);
  color: white;
}
</style>