<template>
  <div id="nav" class="position-fixed w-100">
    <div
      class="
        d-flex
        align-items-center
        justify-content-center justify-content-sm-start
      "
    >
      <v-mobile-nav-btn
        class="d-sm-none"
        @click="MobileNavSwitch()"
      ></v-mobile-nav-btn>
      <v-nav-logo></v-nav-logo>
      <div class="d-none d-sm-block ms-5">
        <v-nav-box class=""></v-nav-box>
      </div>
      <v-nav-icon></v-nav-icon>
    </div>
    <transition name="slide">
      <v-nav-box class="d-sm-none" v-if="mobile_nav_toggle"></v-nav-box>
    </transition>
  </div>
</template>

<script>
import NavLogo from "./Nav/NavLogo.vue";
import NavIcon from "./Nav/NavIcon.vue";
import NavBox from "./Nav/NavBox.vue";
import NavBtn from "./Nav/NavBtn.vue";
export default {
  components: {
    "v-nav-logo": NavLogo,
    "v-nav-icon": NavIcon,
    "v-mobile-nav-btn": NavBtn,
    "v-nav-box": NavBox,
  },
  data() {
    return {
      mobile_nav_toggle: false,
    };
  },
  watch: {
    $route(to, from) {
      this.MobileNavClose();
    },
  },
  methods: {
    MobileNavClose() {
      this.mobile_nav_toggle = false;
    },
    MobileNavSwitch() {
      this.mobile_nav_toggle = !this.mobile_nav_toggle;
    },
  },
};
</script>

<style>
#nav {
  z-index: 2;
  border-bottom: 1px solid rgba(146, 131, 131, 0.5);
  background-color: white;
}

/* #nav svg {
  fill: white;
} */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-from {
  /* opacity: 0; */
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>