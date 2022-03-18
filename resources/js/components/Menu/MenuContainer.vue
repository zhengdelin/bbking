// menu

<template>
    <div id="menu" class="sticky top-0 duration-700" :class="getMenuWidth">
        <!-- 摺疊按鈕 -->
        <div
            class="absolute top-4 -right-4 w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center hover:cursor-pointer"
            v-if="enable_collapse"
            @click="collapseMenu"
        >
            <svg-render-vue
                type="arrow_right"
                :class="[{ ' rotate-180': !collapse_menu }, 'duration-500']"
            ></svg-render-vue>
        </div>
        <!-- title -->
        <div class="h-12 flex-cc font-bold" v-if="title">
            <transition name="title">
                <span v-show="show_title">{{ title }}</span>
            </transition>
        </div>
        <slot name="menu_item" :collapse_menu="collapse_menu"></slot>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";

export default {
    name:"MenuContainer",
    props: {
        title: {
            type: String,
            default: "",
        },
        enable_collapse: {
            type: Boolean,
            default: true,
        },
    },
    setup(props) {
        //data
        const enable_collapse = computed(() => props.enable_collapse);
        const title = computed(() => props.title);
        const collapse_menu = ref(enable_collapse.value);
        //function
        const collapseMenu = () => {
            collapse_menu.value = !collapse_menu.value;
        };
        const getMenuWidth = computed(() => {
            if (enable_collapse.value) {
                return collapse_menu.value ? "w-[4.5rem]" : "w-52";
            } else {
                return "";
            }
        });

        //show title
        const show_title = ref(false);
        onMounted(() => {
            setTimeout(() => {
                show_title.value = true;
            }, 500);
        });
        return {
            title,
            enable_collapse,
            collapse_menu,
            show_title,
            getMenuWidth,
            collapseMenu,
        };
    },
};
</script>

<style>
.title-enter-active,
.title-leave-active {
    transition: all 1s;
}
.title-enter-from, .title-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(-50%);
    opacity: 0;
}
</style>
