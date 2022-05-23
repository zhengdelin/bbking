<template>
    <div
        class="bg-white p-2 border-gray-300-sm flex justify-end items-center gap-4 sticky bottom-0"
    >
        <div class="text-lg font-bold">
            <template
                v-if="
                    cur_route === 'shopping_cart' ||
                    order_info.delivery_method === 2
                "
            >
                總計：
                <FormattedPrice :price="totalPrice" />
            </template>
            <template v-else>
                總計：
                <FormattedPrice :price="totalPrice + 60" />
                （包含運費
                <FormattedPrice :price="60" />）
            </template>
        </div>
        <div class="p-2">
            <template v-if="cur_route === 'shopping_cart'">
                <RouterLink
                    :to="{
                        name: 'checkout',
                        params: {
                            data: JSON.stringify(product_list),
                        },
                    }"
                >
                    <button class="bg-red-300 px-20 py-3 font-bold">
                        結帳
                    </button>
                </RouterLink>
            </template>
            <template v-else>
                <RouterLink :to="{ name: 'shopping_cart' }">
                    <button class="bg-yellow-500 px-10 py-3 font-bold">
                        返回購物車
                    </button>
                </RouterLink>
                <button
                    class="bg-blue-500 text-white px-10 py-3 font-bold ml-3"
                    @click="createOrder"
                >
                    提交訂單
                </button>
            </template>
        </div>
    </div>
</template>

<script setup>
import { computed, toRefs } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import FormattedPrice from "./FormattedPrice.vue";
const props = defineProps({
    productList: {
        type: Object,
        default: () => ({}),
    },
    orderInfo: {
        type: Object,
        default: () => ({}),
    },
});
const { dispatch } = useStore();
const route = useRoute();
const router = useRouter();
const cur_route = computed(() => route.name);
const { productList: product_list, orderInfo: order_info } = toRefs(props);
/* 總價 */
const totalPrice = computed(() => {
    return product_list.value.reduce((acc, obj) => {
        acc += obj.price * obj.amount;
        return acc;
    }, 0);
});
const createOrder = async () => {
    const res = await dispatch("productHandler/createOrder", {
        order_info: order_info.value,
        product_list: product_list.value,
        total_price: totalPrice.value,
    });
    res && router.push({ name: "user-orders" });
};
</script>

<style scoped></style>
