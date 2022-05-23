<template>
    <EmptyContainer :data="article">
        <div class="bg-white rounded-md px-8 py-3 duration-500">
            <div class="flex relative">
                <title-item class="w-[95%]" :title="article.title" />
                <div class="absolute right-2 top-5">
                    <CollectIcon
                        v-model="isCollected"
                    />
                </div>
            </div>
            <div class="pl-4 text-gray-500">
                上次更新 :
                <span class="hover:underline">{{ article.updated_at }}</span>
            </div>
            <hr class="mt-4 mb-6" />
            <div class="no-tailwind-base" v-html="article.content"></div>
        </div>
        <template #emptyText>查無文章</template>
    </EmptyContainer>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import TitleItem from "../../../components/Objects/Title/TitleItem.vue";
import EmptyContainer from "../../../components/Global/EmptyContainer.vue";
import CollectIcon from "../../../components/User/Article/CollectIcon.vue";
export default {
    components: { TitleItem, EmptyContainer, CollectIcon },
    async setup() {
        const route = useRoute();
        // console.log(route);
        const { dispatch, getters } = useStore();
        await dispatch("articleHandler/getCollectedArticles")
        /* id */
        const id = computed(() => route.params.id);
        /* 文章 */
        const article = computed(() =>
            getters["articleHandler/getArticle"](id.value)
        );
        if (!article.value) {
            /* 取得文章內容 */
            await dispatch("articleHandler/getArticleById", {
                article_id: id.value,
            });
        }
        const isCollected = computed({
            get: () =>
                getters["articleHandler/articleIsCollected"](article.value.id),
            set: (val) =>
                dispatch("articleHandler/collectArticle", {
                    article: article.value,
                    status: val,
                }),
        });
        return { article, isCollected };
    },
};
</script>

<style scoped></style>
