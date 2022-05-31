<template>
    <title-item title="文章一覽">
        <template v-slot:button>
            <router-link :to="{ name: 'admin-articles-create' }">
                <create-button-vue target_text="文章"></create-button-vue>
            </router-link>
        </template>
    </title-item>
    <admin-table-vue
        :datas="articles"
        :keys="keys"
        update_route_name="admin-articles-update"
    >
    </admin-table-vue>
</template>
<script>
import { computed, ref, watch } from "@vue/runtime-core";
import { useStore } from "vuex";

import AdminTableVue from "../../../components/Admin/AdminTable.vue";
import CreateButtonVue from "../../../components/Objects/Button/CreateButton.vue";
import { useRoute } from "vue-router";
import TitleItem from "../../../components/Objects/Title/TitleItem.vue";
export default {
    name: "AdminArticles",
    components: { AdminTableVue, CreateButtonVue, TitleItem },
    async setup() {
        const route = useRoute();
        const { dispatch } = useStore();
        /* 取得資料 */
        const articles = ref();
        const res = await dispatch("articleHandler/getArticles");
        articles.value = res;
        //key
        const keys = [
            "title",
            "content",
            "category_name",
            "updated_at",
            { name: "status", type: "boolean" },
        ];
        //監控更新article
        const update_article = computed(() => route.params.update_article);
        watch(update_article, async () => {
            if (update_article.value) {
                const res = await dispatch("articleHandler/getArticles");
                articles.value = res;
            }
        });
        return {
            articles,
            keys,
        };
    },
};
</script>

<style scoped></style>
