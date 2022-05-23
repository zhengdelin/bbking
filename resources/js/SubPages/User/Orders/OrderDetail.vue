<template>
    <EmptyContainer :data="order">
        <div class="grid gap-5">
            <OrderListItem :order="order">
                <template #link>
                    <RouterLink
                        :to="{ name: 'user-orders' }"
                        class="hover:text-blue-500"
                    >
                        返回訂單列表
                    </RouterLink>
                </template>
            </OrderListItem>
            <!-- {{ order }} -->
            <template v-if="order.status === 4">
                <ShoppingHeader grid-cols-class="grid-cols-5 md:grid-cols-9">
                    <template #default="{ style }">
                        <div :class="[style, 'col-span-1']">商品評價</div>
                    </template>
                </ShoppingHeader>
                <div>
                    <EvaluateListItem
                        v-for="product in order.products"
                        :key="product.id"
                        :product="product"
                    />
                </div>
            </template>
            <template v-else>
                <ShoppingHeader />
                <div>
                    <ShoppingListItem
                        v-for="product in order.products"
                        :key="product.id"
                        :product="product"
                    />
                </div>
            </template>
            <div
                class="bg-white p-4 border-gray-300-sm flex justify-end items-center gap-4 sticky bottom-0"
            >
                <ToShoppingButton button-class="px-12 py-3" />
                <button
                    class="bg-blue-500 hover:bg-blue-400 text-white px-12 py-3"
                    @click="shoppingAgain"
                >
                    再買一次
                </button>
            </div>
        </div>
        <template #emptyText> 查無訂單資訊 </template>
        <template #button>
            <ReturnButton :route-option="{ name: 'user-orders' }" />
            <ToShoppingButton />
        </template>
    </EmptyContainer>
</template>

<script>
import { useRoute } from "vue-router";
import { computed, defineAsyncComponent } from "@vue/runtime-core";
import { useStore } from "vuex";
import OrderListItem from "../../../components/User/Product/OrderListItem.vue";
import ShoppingHeader from "../../../components/User/Product/ShoppingHeader.vue";
import ToShoppingButton from "../../../components/Objects/LinkButton/ToShoppingButton.vue";
import ReturnButton from "../../../components/Objects/LinkButton/ReturnButton.vue";
import EmptyContainer from "../../../components/Global/EmptyContainer.vue";
export default {
    components: {
        OrderListItem,
        ShoppingHeader,
        ToShoppingButton,
        ReturnButton,
        EmptyContainer,
        ShoppingListItem: defineAsyncComponent(() =>
            import("../../../components/User/Product/ShoppingListItem.vue")
        ),
        EvaluateListItem: defineAsyncComponent(() =>
            import("../../../components/User/Product/Evaluations/EvaluateListItem.vue")
        ),
    },
    async setup(props) {
        const { dispatch, getters, state } = useStore();
        const route = useRoute();
        const id = computed(() => route.params.id);
        const order = computed(() =>
            getters["productHandler/getOrderById"](id.value)
        );
        if (!order.value) {
            await dispatch("productHandler/getOrders");
        }
        const shoppingAgain = async () => {
            await dispatch("productHandler/shoppingAgain", {
                order: order.value,
            });
        };

        return { order, shoppingAgain };
    },
};
</script>

<style scoped></style>
