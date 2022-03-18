<template>
  <div>
    <transition name="fade">
      <v-event-img-banner></v-event-img-banner>
    </transition>
  </div>
</template>

<script>
import EventImgBannerVue from "../components/EventImgBanner.vue";
import { reactive, ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";

export default {
  components: {
    "v-event-img-banner": EventImgBannerVue,
  },
  setup() {

    onUnmounted(() => {
      console.log("home onUnMounted");
    });
    return {  };
  },
};
</script>

<style>
</style>