<template>
    <SelectMenu
        class="mb-4"
        option-key="value"
        :options="status"
        :length="Object.values(status).length"
        v-model="cur_status"
    >
        <template #default="{ item }">
            <div class="flex justify-center gap-2">
                <div>{{ item.label }}</div>
            <div>{{ getOrderQuantities(item.value) }}</div>
            </div>
        </template>
    </SelectMenu>
    <EmptyContainer :data="orders">
        <div class="grid gap-4">
            <OrderListItem
                v-for="order in orders"
                :key="order.id"
                :order="order"
            />
        </div>
        <template #emptyText> 查無訂單資訊 </template>
        <template #button>
            <ToShoppingButton />
        </template>
    </EmptyContainer>
</template>

<script setup>
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import FormattedPrice from "../../../components/User/Product/FormattedPrice.vue";
import OrderListItem from "../../../components/User/Product/OrderListItem.vue";
import EmptyContainer from "../../../components/Global/EmptyContainer.vue";
import ToShoppingButton from "../../../components/Objects/LinkButton/ToShoppingButton.vue";
import SelectMenu from "../../../components/Global/Menu/SelectMenu.vue";
const { dispatch, getters, state } = useStore();
//訂單狀態
const status = computed(() => state.productHandler.status);
const cur_status = ref(0);
const orders = computed(() =>
    getters["productHandler/getOrdersByStatus"](cur_status.value)
);
const getOrderQuantities = computed(() => {
    return (status) => getters["productHandler/getOrderQuantities"](status);
});
</script>

<style scoped></style>
