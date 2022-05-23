<template>
    <EmptyContainer :data="products" class="relative">
        <transition name="fade-from-bottom-15px">
            <template v-if="show">
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center bg-white p-3 min-h-[70vh]"
                >
                    <product-list-item
                        v-for="product in products"
                        :key="product.id"
                        :product="product"
                    />
                </div>
            </template>
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

export default {
    components: { ProductListItem, EmptyContainer },
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
        console.log("category",route);
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
