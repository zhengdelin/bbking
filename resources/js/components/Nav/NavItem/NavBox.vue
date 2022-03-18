<template>
  <div
    class="
      h-screen
      md:h-auto
      flex
      align-center
      flex-col
      md:flex-row
      w-full
      text-center
    "
  >
    <router-link
      class="
        border-b
        md:border-0
        border-gray-300
        px-4
        py-3
        hover:bg-cyan-200
        hover:bg-opacity-50
        hover:rounded-lg
        hover:text-purple-600
        font-bold font-cwTeXYen
        text-xl
      "
      v-for="item in nav"
      :key="item.router_name"
      :to="{ name: item.router_name }"
      >{{ item.text }}</router-link
    >
    <!-- <a href="#" class="border-b sm:border-0 border-gray-500">商品</a>
    <a href="#" class="border-b sm:border-0 border-gray-500">文章</a> -->
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup(props) {
    const { state } = useStore();
    const is_login = computed(() => state.is_login);
    const nav = computed(() => state.nav);
    return { is_login, nav };
  },
};
</script>

<style scoped>
.router-link-active {
  background-color: rgba(165, 243, 252, 0.5);
  color: rgb(147, 51, 234);
  border-radius: 0.5rem;
}
</style>