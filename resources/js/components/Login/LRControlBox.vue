<template>
  <div class="flex-cc text-center w-full">
    <router-link
      :to="{ name: 'user_login'}"
      class="w-full font-bold login-register-option"
      :class="{ 'opt-selected': login_register === 'login' }"
      @click="routeChange"
    >
      登入
    </router-link>
    <router-link
      :to="{ name: 'user_register' }"
      class="w-full font-bold login-register-option"
      :class="{ 'opt-selected': login_register === 'register' }"
      @click="routeChange"
    >
      註冊
    </router-link>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  
  props: {
    login_register: String,
  },
  data() {
    return {
      // login_register: "login",
    };
  },
  computed:{
    csrf_token() {
      axios.get("/getCsrfToken").then((res) => {
          return res.data.csrf_token;
      });
    },
  },
  methods: {
    routeChange(){
      this.$emit('routeChange', []);
    }
  },
  mounted() {},
  // beforeRouteEnter(to, from, next) {
  //   // ...
  //   console.log('123')
  //   next(vm=>{

  //     vm.Select();
  //   })
  // },
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