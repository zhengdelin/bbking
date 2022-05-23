<template>
    <section>
        <CategorySelectMenu v-model="cur_category" class="mb-4" />
        <EmptyContainer :data="cur_articles">
            <div class="grid grid-cols-1 bg-white rounded-md">
                <ArticleListItem
                    v-for="article in cur_articles"
                    :key="article.id"
                    :article="article"
                />
            </div>
            <template #emptyText> 查無文章 </template>
        </EmptyContainer>
    </section>
</template>

<script setup>
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import SelectMenu from "../../components/Global/Menu/SelectMenu.vue";
import ArticleListItem from "../../components/User/Article/ArticleListItem.vue";
import EmptyContainer from "../../components/Global/EmptyContainer.vue";
import CollapseContainer from "../../components/Global/CollapseContainer.vue";
import CategorySelectMenu from "../../components/Global/Menu/CategorySelectMenu.vue"
const { getters } = useStore();

const cur_category = ref();
//分類好的文章
const articles = computed(
    () => getters["articleHandler/grouped_collected_articles"]
);
const cur_articles = computed(() => articles.value[cur_category.value]);
// console.log("articles", articles.value);
</script>

<style scoped></style>
