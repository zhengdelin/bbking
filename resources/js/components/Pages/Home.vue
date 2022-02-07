<template>
  <div :id="key" class="fp-auto-height fullpage-wrapper" ref="fullpage">
    <!-- <transition name="fade">
      <v-event-img-banner v-if="show"></v-event-img-banner>
    </transition> -->
    <div class="section" v-if="show">Section2</div>
    <div class="section" v-if="show">Some section</div>
    <div class="section" v-if="show">Some section</div>
  </div>
</template>

<script>
import EventImgBannerVue from "../EventImgBanner.vue";
// import fullpage from 'fullpage.js';

export default {
  data() {
    return {
      interval: {},
      show: false,
      show_else: false,
      count: 0,
      key: '',
    };
  },
  components: {
    "v-event-img-banner": EventImgBannerVue,
  },
  computed: {},
  methods: {
    ClearInterval() {
      clearInterval(this.interval);
    },
  },
  mounted() {
    const eib=require('../EventImgBanner.vue')
    console.log(eib)
    // const p=document.createElement('v-event-img-banner')
    // document.getElementById(this.key).append(p)
    // console.log(p);

    setTimeout(() => {
      this.show = true;
    }, 200);
    setTimeout(() => {
      this.show_else = true;
    }, 201);
    // vm.$forceUpdate();
    // var p = document.createElement("v-event-img-banner");
    // document.getElementById("fullpage").append(p);
    setTimeout(() => {
      const fullpage = require("fullpage.js");
      // console.log(document.getElementById('fullpage'))
      new fullpage(`#${this.key}`, {
        //options here
        autoScrolling: true,
        scrollHorizontally: true, //水平滑動
        slidesNavigation: true, //slide導航
        continuousVertical: true, //vertical循環
        // navigation: true, // 顯示導行列
        // navigationPosition: "top" // 導行列位置
      });
      this.interval = setInterval(function () {
        fullpage_api.moveSlideRight();
        // fullpage_api.moveSectionDown();
      }, 3000);
    }, 200);
  },
  watch: {
    $route(to) {
      // console.log("route change");
      // if (to.name === "home") {
      //   this.$forceUpdate();
      // }
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log("enter");
      console.log(vm.$refs.fullpage);
      vm.key="fullpage"+Math.floor(Math.random()*100)
      console.log("vm.key "+vm.key)
      // vm.forceUpdate()
    });
  },
  beforeRouteLeave() {
    console.log("leave");
    this.show = false;
    this.count+=1;
    console.log(this.$refs.fullpage);
    // this.$refs.fullpage.remove();
    // document.getElementById("fullpage").remove();
  },
};
</script>

<style>
</style>