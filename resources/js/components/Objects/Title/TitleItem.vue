<template>
  <div class="flex items-center justify-between">
    <router-link
      :to="{ name: return_to_route_name }"
      class="text-blue-500"
      @click="commit('clearStatus')"
      v-if="return_to_route_name"
    >
      <svg-render-vue type="return" size="lg"></svg-render-vue>
    </router-link>
    <slot name="return_router"></slot>
    <div class="flex-auto px-2 py-4 font-bold text-2xl" :class="py">
      {{ title }}
    </div>
    <div class="grid grid-flow-col gap-4">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from "vuex";

export default {
  props: {
    title: {
      type: String,
      default: "管理",
    },
    //返回目標name
    return_to_route_name: {
      type: String,
      default: "",
    },
    py:{
      type:String,
      default:"",
    }
  },
  setup(props) {
    const { commit } = useStore();
    const { return_to_route_name,py } = props;
    const title = computed(()=>props.title)
    return { title, return_to_route_name,py, commit };
  },
};
</script>

<style scoped>
</style>