<template>
  <div id="login-register" class="flex-cc flex-1 pt-1">
    <div class="w-[80%] md:w-[60%]">
      <div class=" border-black border-2 rounded-[10px] w-full p-3">
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
#login-register input[type="button"] {
  padding: 0.5rem 0.6rem;
  width: 100%;
  background-color: rgb(77, 7, 124);
  color: white;
  border: none;
  border-radius: 5px;
}
</style>