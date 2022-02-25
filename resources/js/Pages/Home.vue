<template>
  
  <div id="fullpage" class="fp-auto-height fullpage-wrapper" ref="fullpage">
    <transition name="fade">
      <v-event-img-banner v-if="show"></v-event-img-banner>
    </transition>
    <div class="section" v-if="show">Section2</div>
    <div class="section" v-if="show">Some section</div>
    <div class="section" v-if="show">Some section</div>
  </div>
</template>

<script>
import EventImgBannerVue from "../components/EventImgBanner.vue";
import fullpage from "fullpage.js";
import { reactive, ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";

export default {
  components: {
    "v-event-img-banner": EventImgBannerVue,
  },
  setup() {
    const show = ref(false);
    const show_else = ref(false);

    let interval = reactive({});
    
    onMounted(() => {
      console.log("home onMounted");
      setTimeout(() => {
        show.value = true;
      }, 200);
      setTimeout(() => {
        show_else.value = true;
      }, 201);
      setTimeout(() => {
        new fullpage("#fullpage", {
          //options here
          autoScrolling: true,
          scrollHorizontally: true, //水平滑動
          slidesNavigation: true, //slide導航
          continuousVertical: true, //vertical循環
          // navigation: true, // 顯示導行列
          // navigationPosition: "top" // 導行列位置
        });
        interval = setInterval(function () {
          fullpage_api.moveSlideRight();
        }, 3000);
      }, 200);
    });
    onUnmounted(() => {
      console.log("home onUnMounted");
      clearInterval(interval);
    });
    return { show, show_else };
  },
};
</script>

<style>
</style>