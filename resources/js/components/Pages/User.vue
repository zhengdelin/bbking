<template>
  <!-- <v-loading v-if="loading"></v-loading> -->
  <div class="d-flex pt-3 h-100">
    <div
      class="h-sm-100 col col-md-2 p-2 px-4 p-md-0"
      :class="{ 'd-none d-md-block': !is_now_user }"
    >
      <transition name="fade">
        <v-menu v-if="show" class=""></v-menu>
      </transition>
      <!-- <v-menu></v-menu> -->
    </div>
    <!-- <div class="w-100 "> -->

    <div class="flex-cc w-100 h-100" :class="{'d-none d-md-flex':is_now_user}">
      <div
        class="col-11 h-100 p-2 px-4 p-sm-4 border-gray-radius overflow-scroll"
      >
      
        <router-view v-slot="{ Component }">
          <transition name="roll-up" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingVue from "../Globals/Loading.vue";
import MenuVue from "../User/Menu.vue";
export default {
  components: {
    "v-menu": MenuVue,
    "v-loading": LoadingVue,
  },
  data() {
    return {
      show: false,
      show_mobile_user_menu: false,
      is_now_user: false,
    };
  },
  methods: {
  },
  mounted() {
    if (this.$route.name === "user") {
      this.is_now_user = true;
    }
    if (document.body.clientWidth > 768 && this.is_now_user) {
      this.$router.push({ name: "user_profile" });
    }
    setTimeout(() => {
      this.show = true;
    }, 300);
  },
  watch: {
    $route(to) {
      if (to.name === "user") {
        this.is_now_user = true;
      } else {
        this.is_now_user = false;
      }
      if (document.body.clientWidth > 768 && this.is_now_user) {
      this.$router.push({ name: "user_profile" });
    }
    },
  },
};
</script>

<style >
::-webkit-scrollbar {
  display: none;
}
.return-box {
  height: 3rem;
  background-color: white;
}
.z-index-3 {
  z-index: 3;
}

</style>