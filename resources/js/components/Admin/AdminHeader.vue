<template>
  <header class="bg-slate-800 w-full h-16 text-white px-6 py-3">
    <div class="h-full w-full flex items-center justify-between">
      <div class="text-2xl font-cwTeXFangSong">{{title}}</div>
      <div class="flex items-center">
          <div class=" border-slate-200 border-2 rounded-md px-2 py-1">管理員</div>
          <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center ml-3">T</div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const title = ref("比比王樂器 後台管理");
    return { title };
  },
};
</script>

<style scoped>
</style>