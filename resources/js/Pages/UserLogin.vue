<template>
  <div id="login-register-page" class="flex-cc pt-1 h-100 a">
    <div class="login-register-container w-80 w-md-60">
      <div class="login-register-box w-100 p-3">
        <v-lr-control-box
          :login_register="login_register"
        ></v-lr-control-box>
        <hr />
        <router-view></router-view>
        <!-- <v-error v-if="error" :error="error"></v-error> -->
      </div>
    </div>
  </div>
</template>

<script>
import LRControlBoxVue from "../components/Login/LRControlBox.vue";
export default {
  data() {
    return {
      error: "",
    };
  },
  components: {
    "v-lr-control-box": LRControlBoxVue,
  },
  computed: {
    login_register() {
      let path = this.$route.fullPath;
      path = path.substr(path.lastIndexOf("/") + 1);
      return path;
    },
  },
  methods: {
  },

  //   beforeRouteEnter(to, from,next) {
  //     axios.get("/getCsrfToken").then((res) => {
  //       let csrf_token = res.data.csrf_token;
  //       next (vm=>{
  //           vm.csrf_token=csrf_token;
  //           console.log(vm.csrf_token);

  //       })
  //     });
  //   },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}

/* #login-register-page {
  overflow: scroll;
} */
.login-register-container {
  margin:auto;
  padding:1rem 0;
}
.login-register-box {
  /* position: absolute;
  top: 0;
  left: 0; */
  /* font-size: 1.2rem; */
  border: black 2px solid;
  border-radius: 10px;
}
.login-register-form {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
}
.login-register-form input[type="button"] {
  padding: 0.5rem 0.6rem;
  width: 100%;
  background-color: rgb(77, 7, 124);
  color: white;
  border: none;
  border-radius: 5px;
}
</style>