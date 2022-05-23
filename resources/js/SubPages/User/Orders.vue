<template>
    <section>
        <RouterView />
    </section>
</template>

<script setup>
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import FormattedPrice from "../../components/User/Product/FormattedPrice.vue";
import OrderListItem from "../../components/User/Product/OrderListItem.vue";
import EmptyContainer from "../../components/Global/EmptyContainer.vue";
import ToShoppingButton from "../../components/Objects/LinkButton/ToShoppingButton.vue";
import SelectMenu from "../../components/Global/Menu/SelectMenu.vue";
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
