<template>
  <div class="d-flex pt-3 h-100">
    <div
      class="h-sm-100 col col-md-2 p-2 px-4 p-md-0"
      :class="{ 'd-none d-md-block': !is_now_user }"
    >
      <transition name="fade">
        <menu-vue v-if="show" class=""></menu-vue>
      </transition>
    </div>

    <div
      class="flex-cc w-100 h-100"
      :class="{ 'd-none d-md-flex': is_now_user }"
    >
      <div
        class="col-11 h-100 p-2 px-4 p-sm-4 border-gray-radius overflow-scroll"
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