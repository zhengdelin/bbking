<template>
    <div class="flex flex-1 pt-3">
        <category-menu
            :class="{ 'hidden md:block': !is_now_user }"
        ></category-menu>
        <div
            class="flex items-center justify-center w-full"
            :class="{ 'hidden md:flex': is_now_user }"
        >
            <div
                class="w-[95%] h-full md:py-2 px-4 border-0 md:border-[1px] border-gray-300 rounded-lg"
            >
                <!-- <router-view v-slot="{ Component }">
          <transition name="roll-up" mode="out-in">
            <component :is="Component" v-show="show" ></component>
          </transition>
        </router-view> -->
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import CategoryMenu from "../components/Menu/CategoryMenu.vue";

export default {
    components: { CategoryMenu },
    setup() {
        const route = useRoute();
        const is_now_user = computed(() => {
            return route.name === "user" ? true : false;
        });
        return {
            is_now_user,
        };
    },
};
</script>

<style scoped>
/* .expand-top-bottom-500-enter-active,
.expand-top-bottom-500-leave-active {
    transition: height 0.5s;
}
.expand-top-bottom-500-enter-from,
.expand-top-bottom-500-leave-to {
    opacity: 0;
    height: 0;
}
.expand-top-bottom-500-enter-to,
.expand-top-bottom-500-leave-from {
    height: 96px;
    opacity: 1;
} */
</style>
