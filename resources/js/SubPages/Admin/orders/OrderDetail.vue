<template>
    <TitleItem return_to_route_name="admin-orders" title="訂單內容" />
    <div class="grid gap-4">
        <ColumnsContainer>
        <template #header>
            <div class="flex justify-between">
                <div>
                    <InputSelect
                        v-model="order.status"
                        @update:modelValue="updateOrderStatus"
                        value-key="value"
                        label-key="label"
                        :options="options.status"
                    />
                </div>
                <div class="flex gap-4">
                    <EditButton v-if="readonly" @click="readonly = false" />
                    <template v-else>
                        <CancelButton @click="readonly = true" />
                        <SaveButton @click="updateOrder" />
                    </template>
                </div>
            </div>
        </template>
        <DTable title="訂單資訊" :data="order">
            <DTableColumn
                v-for="(label, key) in order_labels"
                :key="key"
                :label="label"
                :prop="key"
            >
                <template v-if="['name', 'phone', 'email'].includes(key)">
                    <InputText
                        v-model="order[key]"
                        @update:modelValue="
                            dispatch(checkReceiver[key], order[key])
                        "
                        :readonly="readonly"
                    />
                </template>
            </DTableColumn>
            <DTableColumn label="備註" label-position="top">
                <InputTextarea
                    v-model="order.note"
                    placeholder="備註"
                    :readonly="readonly"
                />
            </DTableColumn>
        </DTable>
        <DTable title="出貨資訊" :data="order">
            <DTableColumn label="運送方式" prop="delivery_method">
                <template #default="{ data }">
                    {{ options.delivery_method[data].label }}
                </template>
            </DTableColumn>
            <template v-if="order.delivery_method === 1">
                <DTableColumn prop="address" label-position="top">
                    <InputTextarea
                        v-model="order.address"
                        @update:modelValue="
                            dispatch('productHandler/checkAddress', order.note)
                        "
                        :readonly="readonly"
                    />
                </DTableColumn>
            </template>
        </DTable>
        <DTable title="付款資訊" :data="order">
            <DTableColumn label="" prop="pay_method">
                <template #default="{ data }">
                    {{ options.pay_method[data].label }}
                </template>
            </DTableColumn>
            <template v-if="order.pay_method === 1">
                <DTableColumn prop="pay_account" label="匯款帳戶後五碼">
                    <InputText
                        v-model="order.pay_account"
                        :readonly="readonly"
                    />
                </DTableColumn>
            </template>
            <DTableColumn
                v-for="i in ['product_price', 'delivery_fee', 'total_price']"
                :key="i"
                :prop="i"
            />
        </DTable>
    </ColumnsContainer>
    <ShoppingHeader />
    <div>
        <ShoppingListItem
            v-for="product in order.products"
            :key="product.id"
            :product="product"
        />
    </div>
    </div>
</template>

<script setup>
import TitleItem from "../../../components/Objects/Title/TitleItem.vue";
import EditButton from "../../../components/Objects/Button/EditButton.vue";
import CancelButton from "../../../components/Objects/Button/CancelButton.vue";
import SaveButton from "../../../components/Objects/Button/SaveButton.vue";
import DTable from "../../../components/Objects/Table/DTable.vue";
import DTableColumn from "../../../components/Objects/Table/DTableColumn.vue";
import InputText from "../../../components/FrontEnd/Input/InputText.vue";
import InputTextarea from "../../../components/Objects/Input/InputTextarea.vue";
import InputSelect from "../../../components/Objects/Input/InputSelect.vue";
import ColumnsContainer from "../../../components/Global/ColumnsContainer.vue";
import ShoppingHeader from "../../../components/User/Product/ShoppingHeader.vue";
import ShoppingListItem from "../../../components/User/Product/ShoppingListItem.vue";

import { computed, reactive, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const id = computed(() => route.params.id);

const { state, dispatch, getters } = useStore();
const order = computed(() => getters["productHandler/allOrdersById"][id.value] || null);
if (!order.value) {
    await dispatch("productHandler/getAllOrders");
}

const options = reactive({
    status: computed(() => {
        let data = getters['productHandler/backendStatus'];
        delete data[0];
        return data;
    }),
    delivery_method: computed(() => state.productHandler.delivery_options),
    pay_method: computed(() => state.productHandler.pay_method_options),
});

const order_labels = {
    id: "訂單編號",
    order_time: "訂單成立時間",
    name: "收件人姓名",
    phone: "收件人電話",
    email: "收件人Email",
    buyer_name: "購買人姓名",
    buyer_phone: "購買人電話",
    buyer_email: "購買人Email",
};

const readonly = ref(true);

const updateOrderStatus = async () => {
    await dispatch("productHandler/updateOrderStatus", order.value);
};

const updateOrder = async () => {
    const res = await dispatch("productHandler/updateOrder", order.value);
    res && (readonly.value = true);
};

const checkReceiver = reactive({
    name: "productHandler/checkReceiver",
    email: "productHandler/checkReceiverEmail",
    phone: "productHandler/checkReceiverPhone",
});
</script>

<style scoped></style>
