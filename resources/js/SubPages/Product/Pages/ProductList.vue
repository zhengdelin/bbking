<template>
    <EmptyContainer :data="products" class="relative">
        <transition name="fade-from-bottom-15px">
            <PageContainer :data="products" v-show="show">
                <template #default="{ data }">
                    <ProductListContainer>
                        <ProductListItem
                            v-for="product in data"
                            :key="product.id"
                            :product="product"
                        />
                    </ProductListContainer>
                </template>
            </PageContainer>
        </transition>
        <template #emptyText>暫無商品</template>
    </EmptyContainer>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { useStore } from "vuex";
import ProductListItem from "../../../components/User/Product/ProductListItem.vue";
import EmptyContainer from "../../../components/Global/EmptyContainer.vue";
import PageContainer from "../../../components/Global/PageContainer.vue";
import ProductListContainer from "../../../components/User/Product/ProductListContainer.vue";

export default {
    components: {
        ProductListItem,
        EmptyContainer,
        PageContainer,
        ProductListContainer,
    },
    name: "ProductList",
    async setup() {
        const show = ref(false);
        onMounted(() => {
            show.value = true;
        });
        const route = useRoute();
        const { dispatch, getters } = useStore();
        const category = computed(
            () =>
                route.params.category || getters["globalHandler/first_category"]
        );
        // console.log("route", route);
        onBeforeRouteUpdate(async (to) => {
            show.value = false;
            /* 監控路由在產品之間切換 */
            const cat =
                to.params.category || getters["globalHandler/first_category"];
            if (
                cat &&
                !getters["productHandler/getProducts"](to.params.category)
            ) {
                await dispatch("productHandler/getProductsByCategory", {
                    category: cat,
                });
            }
            setTimeout(() => {
                show.value = true;
            }, 50);
        });
        const products = computed(() =>
            getters["productHandler/getProducts"](category.value)
        );
        if (!products.value) {
            await dispatch("productHandler/getProductsByCategory", {
                category: category.value,
            });
        }

        return { category, products, show };
    },
};
</script>

<style scoped></style>
