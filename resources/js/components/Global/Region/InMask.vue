<template>
  <div
    :class="[
      position,
      'w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-60 top-0 left-0 z-50',
    ]"
  >
    <section class="max-h-[90vh] overflow-auto">
      <slot></slot>
    </section>
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { computed, onMounted, onUnmounted } from "@vue/runtime-core";
export default {
  props: {
    position: { type: String, default: "absolute" },
    overflowHidden: { type: Boolean, default: false },
  },
  setup(props) {
    // console.log(props);
    const { overflowHidden, position } = toRefs(props);
    /* 如果fixed並且設置不能滾動 則開啟 */
    const ov_hidden = computed(
      () => overflowHidden.value && position.value === "fixed"
    );
    onMounted(() => {
      if (ov_hidden.value) document.body.style.overflow = "hidden";
    });
    onUnmounted(() => setOverflowAuto());
    const setOverflowAuto = () => {
      if (ov_hidden.value) document.body.style.overflow = "auto";
    };
    return {};
  },
};
</script>

<style scoped></style>
