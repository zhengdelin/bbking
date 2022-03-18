<template>
    <div id="admin" class="flex static bg-gray-200 min-h-screen">
        <menu-container
            class="hidden md:block bg-neutral-900 text-white h-screen pt-2"
        >
            <template #menu_item="{ collapse_menu }">
                <menu-item
                    v-for="list in admin_menu_lists"
                    :key="list.text"
                    :item="list"
                    :collapse="collapse_menu"
                ></menu-item>
            </template>
        </menu-container>
        <div class="flex-1 pb-14 w-96">
            <admin-header-vue></admin-header-vue>
            <div class="px-3">
                <router-view v-slot="{ Component }">
                    <keep-alive :include="keep_alive">
                        <suspense>
                            <template #default>
                                <component :is="Component"></component>
                            </template>
                            <template #fallback>
                                <loading-vue></loading-vue>
                            </template>
                        </suspense>
                    </keep-alive>
                </router-view>
            </div>
        </div>
    </div>
</template>

<script>
import MenuContainer from "../components/Menu/MenuContainer.vue";
import AdminHeaderVue from "../components/Admin/AdminHeader.vue";
import MenuItem from "../components/Menu/MenuItem.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
    components: { MenuContainer, AdminHeaderVue, MenuItem },
    setup() {
        const { state } = useStore();
        const keep_alive = computed(() => state.keep_alive);
        const admin_menu_lists = [
            {
                text: "首頁",
                route_name: "home",
                svg_name: "home",
            },
            {
                text: "會員",
                route_name: "admin-members",
                svg_name: "user",
            },
            {
                text: "產品",
                route_name: "admin-products",
                svg_name: "product",
            },
            {
                text: "文章",
                route_name: "admin-articles",
                svg_name: "article",
            },
            {
                text: "類別",
                route_name: "admin-categories",
                svg_name: "category",
            },
        ];
        return { keep_alive, admin_menu_lists };
    },
};
</script>

<style>
#admin #menu a:hover,
#admin #menu a.router-link-exact-active {
    background-color: rgb(23, 23, 23);
    color: rgb(103, 232, 249);
}
</style>
