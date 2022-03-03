<template>
  <div id="nav" class="w-100">
    <div
      class="
        flex
        items-center
        justify-center sm:justify-start
      "
    >
      <v-mobile-nav-btn
        class="sm:hidden"
        @click="mobileNavSwitch()"
      ></v-mobile-nav-btn>
      <v-nav-logo></v-nav-logo>
      <div class="hidden sm:block ms-5">
        <v-nav-box class=""></v-nav-box>
      </div>
      <v-nav-icon></v-nav-icon>
    </div>
    <transition name="slide">
      <v-nav-box class="sm:hidden" v-if="mobile_nav_toggle"></v-nav-box>
    </transition>
  </div>
</template>

<script>
import NavLogo from "./Nav/NavLogo.vue";
import NavIcon from "./Nav/NavIcon.vue";
import NavBox from "./Nav/NavBox.vue";
import NavBtn from "./Nav/NavBtn.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "@vue/runtime-core";
export default {
  components: {
    "v-nav-logo": NavLogo,
    "v-nav-icon": NavIcon,
    "v-mobile-nav-btn": NavBtn,
    "v-nav-box": NavBox,
  },
  setup() {
    const route = useRoute();
    const mobile_nav_toggle = ref(false);

    const mobileNavClose = () => {
      mobile_nav_toggle.value = false;
    };
    const mobileNavSwitch = () => {
      mobile_nav_toggle.value = !mobile_nav_toggle.value;
    };

    watch(route, () => {
      mobileNavClose();
    });
    return { mobile_nav_toggle, mobileNavSwitch };
  },
};
</script>

<style>
#nav {
  z-index: 2;
  position: sticky;
  top:0;
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