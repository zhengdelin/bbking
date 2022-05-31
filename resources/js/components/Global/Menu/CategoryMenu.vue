<template>
    <div class="w-full md:w-[16.666%] min-h-[361px]">
        <menu-container
            :enable_collapse="false"
            :menu_tree="category_menu_lists"
            class="z-[5] bg-white text-center md:text-left h-full"
            :title="title"
        >
            <template #menu_item="{ collapse_menu }">
                <menu-item
                    v-for="(item, key) in category_menu_lists"
                    :key="key"
                    :item="item"
                    :collapse="collapse_menu"
                    :box_py="2"
                    :text_pl="4"
                    :tree_root="key"
                ></menu-item>
            </template>
        </menu-container>
        <!-- <CategorySelectMenu class="block md:hidden" v-model="cur_category" /> -->
    </div>
</template>

<script>
import MenuContainer from "./MenuContainer.vue";
import MenuItem from "./MenuItem.vue";
import { computed, ref, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import CategorySelectMenu from "./CategorySelectMenu.vue";
export default {
    components: { MenuContainer, MenuItem, CategorySelectMenu },
    setup(props) {
        const { getters, state } = useStore();
        const route = useRoute();
        const router = useRouter();
        const path = computed(() => route.path);
        const onProductPage = computed(
            () => path.value.indexOf("products") !== -1
        );
        const onArticlePage = computed(
            () => path.value.indexOf("articles") !== -1
        );
        const title = computed(() =>
            onProductPage.value
                ? "產品分類"
                : onArticlePage.value
                ? "文章分類"
                : "所有分類"
        );
        //category menu列表
        const category_menu_lists = computed(
            () => getters["globalHandler/category_menu_lists"]
        );
        //所有類別
        const categories = computed(() => state.globalHandler.categories);
        //依照id分類的類別
        const category_map_by_id = computed(() =>
            getters["globalHandler/category_map_by_key"]("id")
        );

        //目前所在的類別
        const cur_category = computed({
            get: () =>
                route.params.category ||
                getters["globalHandler/first_category"],
            set: (id) =>
                router.push(
                    `${onProductPage.value ? "/products" : "/articles"}/${
                        category_map_by_id.value[id]["eng_name"]
                    }`
                ),
        });
        //依照網址求出目前的類別群組
        const cur_category_group = computed(() => {
            // console.log(categories.value);
            return categories.value.find(
                (i) => i.eng_name === cur_category.value
            )["category_group_name"];
        });

        // console.log("category_menu_lists", category_menu_lists);
        /* const category_menu_lists = {
            人聲0: {
                children: [
                    {
                        text: "麥克風",
                        children: [
                            {
                                text: "麥克風",
                                children: [
                                    {
                                        text: "麥克風",
                                        url: "/articles/microphone",
                                    },
                                    {
                                        text: "麥克風",
                                        url: "/articles/microphone",
                                    },
                                ],
                            },
                            {
                                text: "麥克風",
                                url: "/articles/microphone",
                            },
                        ],
                    },
                    {
                        text: "麥克風",
                        children: [
                            {
                                text: "麥克風",
                                children: [
                                    {
                                        text: "麥克風",
                                        children: [
                                            {
                                                text: "麥克風",
                                                url:
                                                    "/articles/microphone",
                                            },
                                            {
                                                text: "麥克風",
                                                url:
                                                    "/articles/microphone",
                                            },
                                        ],
                                    },
                                    {
                                        text: "麥克風",
                                        children: [
                                            {
                                                text: "麥克風",
                                                url:
                                                    "/articles/microphone",
                                            },
                                            {
                                                text: "麥克風",
                                                children: [
                                                    {
                                                        text: "麥克風",
                                                        url:
                                                            "/articles/microphone",
                                                    },
                                                    {
                                                        text: "麥克風",
                                                        children: [
                                                            {
                                                                text: "麥克風",
                                                                url:
                                                                    "/articles/microphone",
                                                            },
                                                            {
                                                                text: "麥克風",
                                                                url:
                                                                    "/articles/microphone",
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                text: "麥克風",
                                children: [
                                    {
                                        text: "麥克風",
                                        url: "/articles/microphone",
                                    },
                                    {
                                        text: "麥克風",
                                        url: "/articles/microphone",
                                    },
                                ],
                            },
                        ],
                    },
                ],
                text: "人聲0",
            },
            人聲1: {
                children: [
                    {
                        text: "麥克風",
                        children: [
                            {
                                text: "麥克風",
                                url: "/articles/microphone",
                            },
                            {
                                text: "麥克風",
                                url: "/articles/microphone",
                            },
                        ],
                    },
                    {
                        text: "麥克風",
                        children: [
                            {
                                text: "麥克風",
                                url: "/articles/microphone",
                            },
                            {
                                text: "麥克風",
                                url: "/articles/microphone",
                            },
                        ],
                    },
                    {
                        text: "麥克風",
                        children: [
                            {
                                text: "麥克風",
                                url: "/articles/microphone",
                            },
                            {
                                text: "麥克風",
                                url: "/articles/microphone",
                            },
                        ],
                    },
                ],
                text: "人聲1",
            },
        }; */
        return {
            category_menu_lists,
            title,
            cur_category_group,
            cur_category,
        };
    },
};
</script>

<style scoped></style>
