// 每個menu的item

<template>
  <router-link
    class="py-3 text-center hover:border-b hover:pb-[11px] border-purple-300"
    :to="{ name: route_name }"
  >
    <div class="pl-6 flex h-[24px]">
      <slot></slot>
      <transition name="leave-to-left-500">
        <span v-if="!collapse" class="whitespace-nowrap">
          {{ text }}
        </span>
      </transition>
    </div>
  </router-link>
</template>

<script>
import { computed, watch } from "@vue/runtime-core";
export default {
  props: {
    route_name: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    collapse: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const text = props.text;
    const route_name = props.route_name;
    const collapse = computed(() => {
      return props.collapse;
    });
    watch(props, () => {
      // console.log(props);
    });
    return {
      text,
      route_name,
      collapse,
    };
  },
};
</script>

<style scoped>

</style>