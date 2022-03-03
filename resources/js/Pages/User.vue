<template>
  <div class="flex pt-3 h-full">
    <div
      class="sm:h-full w-full md:w-[16.666%] p-2 px-4 md:p-0"
      :class="{ 'hidden md:block': !is_now_user }"
    >
      <transition name="fade">
        <menu-vue v-if="show" class=""></menu-vue>
      </transition>
    </div>

    <div
      class="flex items-center justify-center w-full h-full"
      :class="{ 'hidden md:flex': is_now_user }"
    >
      <div
        class="w-[90%] h-full p-2 px-4 sm:p-4 border-gray-radius overflow-scroll"
      >
        <router-view v-slot="{ Component }">
          <transition name="roll-up" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import MenuVue from "../components/User/Menu.vue";
export default {
  components: {
    MenuVue,
  },
  setup() {
    const route = useRoute();
    const show = ref(false);
    const is_now_user = computed(() => {
      return route.name === "user" ? true : false;
    });
    onMounted(() => {
      console.log("user onMounted");

      setTimeout(() => {
        show.value = true;
      }, 300);
    });
    return { show, is_now_user };
  },
};
</script>

<style >
::-webkit-scrollbar {
  display: none;
}
.return-box {
  height: 3rem;
  background-color: white;
}
.z-index-3 {
  z-index: 3;
}
</style>