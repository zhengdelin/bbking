<template>
    <EmptyContainer :data="articles" >
        <transition name="fade-from-bottom-15px">
            <div v-if="show">
                <div class="grid grid-cols-1 bg-white rounded-md">
                    <ArticleListItem
                        v-for="article in articles"
                        :key="article.id"
                        :article="article"
                    />
                </div>
                <div class="bg-white rounded-md py-4 flex justify-center">
                    <button class="border-gray-300 border-[1px] mx-2">
                        上一頁
                    </button>
                    <button class="border-gray-300 border-[1px] mx-2">
                        下一頁
                    </button>
                </div>
            </div>
        </transition>
        <template #emptyText>暫無文章</template>
    </EmptyContainer>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { useStore } from "vuex";
import ArticleListItem from "../../../components/User/Article/ArticleListItem.vue";
import EmptyContainer from "../../../components/Global/EmptyContainer.vue";
export default {
    name: "ArticleList",
    components: { ArticleListItem, EmptyContainer },
    async setup() {
        const show = ref(false);
        onMounted(() => {
            show.value = true;
        });
        const route = useRoute();
        const { dispatch, getters } = useStore();

        const first_category = computed(
            () => getters["globalHandler/first_category"]
        );
        const category = computed(
            () => route.params.category || first_category.value
        );

        onBeforeRouteUpdate(async (to) => {
            show.value = false;
            /* 監控路由在文章之間切換 */
            const cat = to.params.category || first_category.value;
            if (
                cat &&
                !getters["articleHandler/getArticleList"](to.params.category)
            ) {
                await dispatch("articleHandler/getArticlesByCategory", {
                    category: cat,
                });
            }
            setTimeout(() => {
                show.value = true;
            }, 50);
        });
        dispatch("articleHandler/getCollectedArticles");
        const articles = computed(() =>
            getters["articleHandler/getArticleList"](category.value)
        );
        if (!articles.value) {
            //一開始取得資料
            await dispatch("articleHandler/getArticlesByCategory", {
                category: category.value,
            });
        }

        return { category, articles, show };
    },
};
</script>

<style></style>
