<template>
    <title-item title="產品一覽">
        <template v-slot:button>
            <router-link :to="{ name: 'admin-products-create' }">
                <create-button-vue target_text="產品"></create-button-vue>
            </router-link>
        </template>
    </title-item>
    <admin-table-vue
        :column_heads="column_heads"
        :datas="products"
        :keys="keys"
        update_route_name="admin-products-update"
    >
    </admin-table-vue>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, watch } from "@vue/runtime-core";
import AdminTableVue from "../../../components/Admin/AdminTable.vue";
import CreateButtonVue from "../../../components/Objects/Button/CreateButton.vue";
import ImagePreview from "../../../components/Global/ImagePreview.vue";
import PreviewButton from "../../../components/Objects/Button/PreviewButton.vue";
import TitleItem from "../../../components/Objects/Title/TitleItem.vue";

export default {
    name: "AdminProducts",
    components: {
        AdminTableVue,
        CreateButtonVue,
        ImagePreview,
        PreviewButton,
        TitleItem,
    },
    async setup() {
        const route = useRoute();
        const { dispatch } = useStore();
        /* 取得資料 */
        const products = ref();
        const res = await dispatch("productHandler/getProducts");
        products.value = res;
        /* 標頭 */
        const column_heads = [
            "名稱",
            "簡介",
            "描述",
            "價格",
            "圖片",
            "類別",
            "上架中",
        ];
        //key
        const keys = [
            "name",
            "introduction",
            "description",
            "price",
            { name: "image", type: "image" },
            "category_name",
            { name: "status", type: "boolean" },
        ];
        //監控更新article
        const update_product = computed(() => route.params.update_product);
        watch(update_product, async () => {
            if (update_product.value) {
                const res = await dispatch("productHandler/getProducts");
                products.value = res;
            }
        });
        return {
            products,
            column_heads,
            keys,
        };
    },
};
</script>

<style scoped></style>
