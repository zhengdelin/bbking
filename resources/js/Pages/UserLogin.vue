<template>
  <div id="login-register-page" class="flex-cc pt-1 h-full">
    <div class="login-register-container w-[80%] md:w-[60%]">
      <div class="login-register-box w-full p-3">
        <v-lr-control-box
          :login_register="login_register"
          class="mb-3"
        ></v-lr-control-box>
        <hr />
        <router-view class="my-3"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import LRControlBoxVue from "../components/Login/LRControlBox.vue";
import { useRoute } from "vue-router";
export default {
  components: {
    "v-lr-control-box": LRControlBoxVue,
  },
  setup() {
    const route = useRoute();
    const login_register = computed(() => {
      let path = route.fullPath;
      path = path.substr(path.lastIndexOf("/") + 1);
      return path;
    });
    return { login_register };
  },
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
  margin: auto;
  padding: 1rem 0;
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