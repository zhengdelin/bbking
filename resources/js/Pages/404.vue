<template>
  <h1>404</h1>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const { state } = useStore();
    const router = useRouter();
    onMounted(() => {
      // console.log('404 onmounted',router);
      if (!state.is_login) router.replace({ name: "user-login" });
      else router.replace({ path: router.currentRoute.value.fullPath });
    });
  },
};
</script>

<style scoped>
</style>