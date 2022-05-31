<template>
    <EmptyContainer :data="products" class="relative">
        <transition name="fade-from-bottom-15px">
            <PageContainer :data="products" v-show="show">
                <template #default="{ data }">
                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-3 min-h-[70vh]"
                    >
                        <product-list-item
                            v-for="product in data"
                            :key="product.id"
                            :product="product"
                        />
                    </div>
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

export default {
    components: { ProductListItem, EmptyContainer, PageContainer },
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
        console.log("category", route);
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
