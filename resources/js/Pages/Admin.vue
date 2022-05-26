<template>
    <div id="admin" class="flex static bg-gray-200 min-h-screen">
        <menu-container
            class="hidden md:block bg-neutral-900 text-white h-screen pt-2"
            :menu_tree="admin_menu_lists"
        >
            <template #menu_item>
                <menu-item
                    v-for="(item, key) in admin_menu_lists"
                    :key="item.text"
                    :item="item"
                    :tree_root="key"
                    :box_py="3"
                >
                </menu-item>
            </template>
        </menu-container>
        <div class="flex-1 pb-14 w-96">
            <admin-header-vue></admin-header-vue>
            <div class="px-3">
                <RouterView v-slot="{ Component }">
                    <KeepAlive :include="keep_alive">
                        <Suspense :timeout="0">
                            <component :is="Component"></component>
                            <template #fallback>
                                <loading-vue></loading-vue>
                            </template>
                        </Suspense>
                    </KeepAlive>
                </RouterView>
            </div>
        </div>
    </div>
</template>

<script>
import MenuContainer from "../components/Global/Menu/MenuContainer.vue";
import AdminHeaderVue from "../components/Admin/AdminHeader.vue";
import MenuItem from "../components/Global/Menu/MenuItem.vue";
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
                children: [
                    {
                        text: "新增會員",
                        route_name: "admin-members-create",
                        svg_name: "plus",
                    },
                ],
            },
            {
                text: "產品",
                route_name: "admin-products",
                svg_name: "product",
                children: [
                    {
                        text: "新增產品",
                        route_name: "admin-products-create",
                        svg_name: "plus",
                    },
                ],
            },
            {
                text: "文章",
                route_name: "admin-articles",
                svg_name: "article",
                children: [
                    {
                        text: "新增文章",
                        route_name: "admin-articles-create",
                        svg_name: "plus",
                    },
                ],
            },
            {
                text: "類別",
                route_name: "admin-categories",
                svg_name: "category",
            },
            {
                text: "活動圖片",
                route_name: "admin-activity_imgs",
                svg_name: "image",
                children: [
                    {
                        text: "新增活動圖片",
                        route_name: "admin-activity_imgs-create",
                        svg_name: "plus",
                    },
                ],
            },
            {
                text: "店家資訊",
                route_name: "admin-store_infos",
                svg_name: "store",
            },
            {
                text: "訂單管理",
                route_name: "admin-orders",
                svg_name: "order",
            },
        ];

        return { keep_alive, admin_menu_lists };
    },
};
</script>

<style>
#admin #menu-container a:hover,
#admin #menu-container a.router-link-exact-active {
    /* background-color: rgb(23, 23, 23); */
    color: rgb(103, 232, 249);
}
</style>
