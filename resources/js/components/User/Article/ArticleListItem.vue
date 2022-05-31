<template>
    <div class="border-b border-gray-300 rounded-md px-3 py-4 bg-white">
        <div class="flex">
            <router-link
                :to="{
                    path: articlePath,
                }"
                class="font-bold block mb-2 hover:text-indigo-500 w-[95%]"
                >{{ article.title }}</router-link
            >
            <CollectIcon v-if="collectable" v-model="isCollected" />
        </div>

        <div
            class="article_banner_introduction mb-1"
            v-html="article.content"
        ></div>
        <div>
            <span class="font-bold pl-1">比比王樂器</span> ·
            <span class="hover:underline">{{ article.updated_at }}</span>
        </div>
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import CollectIcon from "./CollectIcon.vue";
export default {
    components: { CollectIcon },
    props: {
        article: {
            type: Object,
            default: () => {},
        },
        collectable: {
            type: Boolean,
            default: true,
        },
    },
    setup(props) {
        const { getters, dispatch } = useStore();
        const article = computed(() => props.article);
        const collectable = computed(() => props.collectable);
        // console.log('article',article.value);
        const isCollected = computed({
            get: () =>
                getters["articleHandler/articleIsCollected"](article.value.id),
            set: (val) =>
                dispatch("articleHandler/collectArticle", {
                    article: article.value,
                    status: val,
                }),
        });
        const articlePath = computed(
            () => `/articles/${article.value.category}/${article.value.id}`
        );
        return { article, isCollected, collectable, articlePath };
    },
};
</script>

<style scoped>
.article_banner_introduction {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
</style>
