<template>
    <div class="flex-1 p-2 md:p-5">
        <div class="w-full gap-4 flex flex-col group p-2">
            <div
                class="bg-white grid grid-cols-4 md:grid-cols-8 p-2 border-gray-300-sm"
            >
                <button class="font-bold col-span-1 md:col-span-4">商品</button>
                <button
                    class="font-bold col-span-1"
                    @click="sortCartProductInfos('price')"
                >
                    單價
                </button>
                <button class="font-bold col-span-1 md:col-span-2">數量</button>
                <button class="font-bold col-span-1">小計</button>
            </div>
            <div class="bg-white divide-y divide-gray-300 border-gray-300-sm">
                <shopping-cart-row
                    v-for="cart_product_info in cart_product_infos"
                    :key="cart_product_info.product_id"
                    :cart_product_info="cart_product_info"
                    :getCartProductInfos="getCartProductInfos"
                >
                </shopping-cart-row>
            </div>
            <div
                class="bg-white p-2 border-gray-300-sm flex justify-end items-center gap-4 sticky bottom-0"
            >
                <div class="text-lg">
                    總金額( {{ cart_product_infos.length }}個產品 )：
                    <FormattedPrice :price="totalPrice" />
                </div>
                <div class="p-2">
                    <router-link
                        :to="{
                            name: 'checkout',
                            params: {
                                data: JSON.stringify(cart_product_infos),
                            },
                        }"
                    >
                        <button class="bg-red-300 px-20 py-3 font-bold">
                            結帳
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import FormattedPrice from "../components/User/Product/FormattedPrice.vue";
const route = useRoute();
const { dispatch } = useStore();
const data = computed(() => route.params.data || null);
//資料
const product_list = ref();
/* 取得購物車產品資料 */
const getProductList = async () => {
    product_list.value = await dispatch("productHandler/getCartByMember");
    console.log(product_list.value);
};
if (!data.value) await getProductList();
else product_list.value = JSON.parse(data.value);
</script>

<style scoped></style>
