<template>
  <div class="flex items-center pt-2">
    <router-link :to="{ name: target }">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        class="fill-blue-500"
      >
        <path
          d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
        />
      </svg>
    </router-link>
    <div class="flex-auto p-2 pl-3 font-MicrosoftJhengHei font-bold text-2xl">
      {{ title }}
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: {
    //返回目標name
    target: {
      type: String,
      default: "admin",
    },
    title: {
      type: String,
      default: "管理",
    },
  },
  setup(props) {
    const target = ref(props.target);
    const title = ref(props.title);
    return { target, title };
  },
};
</script>

<style scoped>
</style>