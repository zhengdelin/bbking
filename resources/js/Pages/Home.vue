<template>
    <div class="p-8 flex flex-col gap-8">
        <activity-img-banner></activity-img-banner>
        <div class="flex gap-4">
            <CategoryMenu class="flex-shrink-0" />
            <div class="flex flex-col gap-4 w-full overflow-hidden">
                <TitleItem title="最新商品" class="bg-cyan-200"></TitleItem>
                <div class="overflow-x-scroll w-full bg-white">
                    <div class="flex gap-3">
                        <ProductListItem
                            class="min-w-[250px]"
                            v-for="product in news.products"
                            :key="product.id"
                            :product="product"
                        />
                    </div>
                </div>
                <TitleItem title="最新文章" class="bg-cyan-200"></TitleItem>
                <div>
                    <ArticleListItem
                        v-for="article in news.articles"
                        :key="article.id"
                        :article="article"
                        :collectable="false"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import ActivityImgBanner from "../components/Global/ActivityImgBanner.vue";
import CategoryMenu from "../components/Global/Menu/CategoryMenu.vue";
import TitleItem from "../components/Objects/Title/TitleItem.vue";
import ProductListItem from "../components/User/Product/ProductListItem.vue";
import ArticleListItem from "../components/User/Article/ArticleListItem.vue";

export default {
    components: {
        ActivityImgBanner,
        CategoryMenu,
        TitleItem,
        ProductListItem,
        ArticleListItem,
    },
    async setup() {
        const { getters, state, dispatch } = useStore();
        const categories = computed(
            () => getters["globalHandler/category_menu_lists"]
        );

        //最新文章和產品
        const news = computed(() => state.globalHandler.news);
        if (!news.value) await dispatch("globalHandler/getNews");
        else dispatch("globalHandler/getNews");

        return { categories, news };
    },
};
</script>

<style></style>
