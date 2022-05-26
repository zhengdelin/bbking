<template>
    <TitleItem title="訂單一覽" />
    <SelectMenu
        class="mb-4"
        option-key="value"
        :options="options.status"
        :length="Object.values(options.status).length"
        v-model="cur_status"
    >
        <template #default="{ item }">
            <div class="flex justify-center gap-2">
                <div>{{ item.label }}</div>
                <div>{{ getOrdersCount(item.value) }}</div>
            </div>
        </template>
    </SelectMenu>
    <AdminTable :column_heads="headers" :datas="orders" :keys="keys">
        <template #column="{ data, dataKey }">
            <template
                v-if="
                    ['status', 'delivery_method', 'pay_method'].includes(
                        dataKey
                    )
                "
            >
                {{ options[dataKey][data].label }}
            </template>
        </template>
        <template #action="{ data }">
            <td class="p-2 w-20">
                <router-link :to="`${route.path}/${data.id}`">
                    <button class="bg-yellow-300">查看詳情</button>
                </router-link>
            </td>
        </template>
    </AdminTable>
</template>

<script setup>
import { computed, reactive, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import AdminTable from "../../../components/Admin/AdminTable.vue";
import TitleItem from "../../../components/Objects/Title/TitleItem.vue";
import SelectMenu from "../../../components/Global/Menu/SelectMenu.vue";
const { state, dispatch, getters } = useStore();
await dispatch("productHandler/getAllOrders");

const options = reactive({
    status: computed(() => getters["productHandler/backendStatus"]),
    delivery_method: computed(() => state.productHandler.delivery_options),
    pay_method: computed(() => state.productHandler.pay_method_options),
});
// console.log("options",options);
const cur_status = ref(0);
const orders = computed(() =>
    getters["productHandler/getAllOrdersByStatus"](cur_status.value)
);
const getOrdersCount = computed(() => {
    return (status) => {
        return (
            getters["productHandler/getAllOrdersByStatus"](status) &&
            getters["productHandler/getAllOrdersByStatus"](status).length
        );
    };
});
const headers = [
    "收件人",
    "收件人電話",
    "狀態",
    "付款方式",
    "總金額",
    "運送方式",
    "訂單成立時間",
];
const keys = [
    "name",
    "phone",
    "status",
    "pay_method",
    "total_price",
    "delivery_method",
    "order_time",
];

const route = useRoute();
</script>

<style scoped></style>
