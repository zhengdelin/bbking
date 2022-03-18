<template>
  <teleport to="#instrument_platform">
    <div
      class="
        fixed
        w-screen
        h-screen
        flex
        items-center
        justify-center
        bg-gray-700 bg-opacity-60
      "
    >
      <div class="w-[90%] lg:w-[95%] h-[95%] bg-white rounded-lg p-3 relative">
        <div
          class="p-2 m-3 hover:cursor-pointer absolute top-0 left-0"
          @click="toggleShow(id)"
        >
          <svg-render-vue type="return" class="text-blue-500"></svg-render-vue>
        </div>
        <template v-if="typeof src === 'string'">
          <div class="h-full flex items-center justify-center">
            <img
              :src="src"
              class="
                max-w-[300px]
                md:max-w-[400px]
                lg:max-w-[500px]
                max-h-[90%]
              "
            />
          </div>
        </template>
        <template v-else>
          <img :src="item" v-for="item in src" :key="item" />
        </template>
      </div>
    </div>
  </teleport>
</template>

<script>
import { computed } from "@vue/runtime-core";

export default {
  props: {
    id:{
      type:Number,
      default:null
    },
    src: {
      type: String || Array,
      default: "",
    },
    toggleShow: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    //data
    const { src, id, toggleShow } = props;
    return { src, id, toggleShow };
  },
};
</script>

<style scoped>
</style>