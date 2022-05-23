<template>
    <section class="p-2 md:p-5">
        <EmptyContainer :data="product_list">
            <div class="w-full h-full gap-4 flex flex-col group p-2">
                <ShoppingHeader />
                <div>
                    <ShoppingListItem
                        v-for="product in product_list"
                        :key="product.product_id"
                        :product="product"
                        :editable="cur_route === 'shopping_cart'"
                    />
                </div>
                <ShoppingOrderInfo
                    v-if="cur_route === 'checkout'"
                    ref="orderInfoDOM"
                />
                <ShoppingToolbar
                    :product-list="product_list"
                    :order-info="order_info"
                />
            </div>
            <template #emptyText> 查無購物車內容 </template>
            <template #button>
                <ToShoppingButton />
            </template>
        </EmptyContainer>
    </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import ShoppingListItem from "../components/User/Product/ShoppingListItem.vue";
import ShoppingToolbar from "../components/User/Product/ShoppingToolbar.vue";
import ShoppingOrderInfo from "../components/User/Product/ShoppingOrderInfo.vue";
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import ShoppingHeader from "../components/User/Product/ShoppingHeader.vue";
import ToShoppingButton from "../components/Objects/LinkButton/ToShoppingButton.vue";
import EmptyContainer from "../components/Global/EmptyContainer.vue";
export default {
    components: {
        ShoppingListItem,
        ShoppingToolbar,
        ShoppingOrderInfo,
        ShoppingHeader,
        ToShoppingButton,
        EmptyContainer,
    },
    async setup() {
        const { dispatch, state, getters } = useStore();
        const route = useRoute();
        const cur_route = computed(() => route.name);
        const product_list = computed(() => state.productHandler.carts);

        /* 取得cart product資料 */
        await dispatch("productHandler/getCartByMember");

        const orderInfoDOM = ref();
        const order_info = computed(
            () => orderInfoDOM.value && orderInfoDOM.value.data
        );

        const first_category = computed(
            () => getters["globalHandler/first_category"]
        );
        return {
            product_list,
            cur_route,
            orderInfoDOM,
            order_info,
            first_category,
        };
    },
};
</script>

<style scoped></style>
