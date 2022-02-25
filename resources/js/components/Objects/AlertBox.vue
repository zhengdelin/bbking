<template>
  <div class="alert-box" :class="status" v-if="status && datas.length">
    <ul>
      <li v-for="item in datas" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { computed, inject, toRefs } from "@vue/runtime-core";
export default {
  setup() {
    const { state } = inject("store");
    // console.log({ ...toRefs(state) });
    // console.log(state);
    const datas = computed(() => {
      if (state.status === "success") {
        return state.successes;
      } else if (state.status === "error") {
        let array = [];
        Object.values(state.errors).forEach((i) => {
          array = array.concat(i);
        });
        // console.log(array);
        return array;
      }
    });

    return { datas, ...toRefs(state) };
  },
};
</script>

<style>
ul {
  margin: 0;
}
.alert-box {
  position: relative;
  padding: 0.5rem 0;
  /* margin: 0.25rem 0; */
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
.alert-box.success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
.alert-box.error {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
</style>