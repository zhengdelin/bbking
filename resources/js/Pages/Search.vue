<template>
    <div class="py-5 px-20">
        <div class="flex justify-center">
            <SearchBox v-model="content" :search="searchBtnClick" />
        </div>
        <template v-if="articles.length && !products.length">
            <TitleItem title="文章" />
            <EmptyContainer :data="articles">
                <ArticleListItem
                    class="bg-white"
                    v-for="article in articles"
                    :key="article.id"
                    :article="article"
                    :collectable="false"
                ></ArticleListItem>
                <template #emptyText>暫無文章</template>
            </EmptyContainer>
            <TitleItem title="產品" />
            <EmptyContainer :data="products">
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-3 min-h-[70vh]"
                >
                    <ProductListItem
                        v-for="product in products"
                        :key="product.id"
                        :product="product"
                    />
                </div>
                <template #emptyText>暫無商品</template>
            </EmptyContainer>
        </template>
        <template v-else>
            <TitleItem title="產品" />
            <EmptyContainer :data="products">
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-3 min-h-[70vh]"
                >
                    <ProductListItem
                        v-for="product in products"
                        :key="product.id"
                        :product="product"
                    />
                </div>
                <template #emptyText>暫無商品</template>
            </EmptyContainer>
            <TitleItem title="文章" />
            <EmptyContainer :data="articles">
                <ArticleListItem
                    class="bg-white"
                    v-for="article in articles"
                    :key="article.id"
                    :article="article"
                    :collectable="false"
                ></ArticleListItem>
                <template #emptyText>暫無文章</template>
            </EmptyContainer>
        </template>
    </div>
</template>

<script>
import SearchBox from "../components/FrontEnd/Input/SearchBox.vue";
import { reactive, ref, toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { computed } from "@vue/runtime-core";
import TitleItem from "../components/Objects/Title/TitleItem.vue";
import EmptyContainer from "../components/Global/EmptyContainer.vue";
import ArticleListItem from "../components/User/Article/ArticleListItem.vue";
import ProductListItem from "../components/User/Product/ProductListItem.vue";
export default {
    components: {
        SearchBox,
        TitleItem,
        EmptyContainer,
        ArticleListItem,
        ProductListItem,
    },
    async setup() {
        const router = useRouter();
        const route = useRoute();
        const { dispatch } = useStore();
        //搜尋的參數
        const s = computed(() => route.query.s);
        console.log("s", s.value, route);
        const content = ref();
        //點擊搜尋按鈕執行搜尋
        const searchBtnClick = async () => {
            if (content.value && content.value !== s.value) {
                router.replace(`/search?s=${content.value}`);
                await search(content.value);
            }
        };
        const data = reactive({
            products: [],
            articles: [],
        });
        const search = async (s) => {
            const { products, articles } = await dispatch(
                "globalHandler/search",
                s
            );
            data.products = products;
            data.articles = articles;
        };

        if (s.value) {
            content.value = s.value;
            await search(s.value);
        }

        const order = reactive(["products", "articles"]);
        const title = {
            products: "產品",
            articles: "文章",
        };
        return { content, searchBtnClick, ...toRefs(data), order, title };
    },
};
</script>

<style scoped></style>
