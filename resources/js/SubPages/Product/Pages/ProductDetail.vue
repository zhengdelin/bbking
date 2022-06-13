<template>
    <EmptyContainer :data="product">
        <div class="bg-white px-3 py-5">
            <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-[45%]">
                    <img :src="product.image" :alt="product.name" />
                </div>
                <div class="flex-1 px-2 flex flex-col justify-between">
                    <div>
                        <div class="text-4xl pt-3">{{ product.name }}</div>
                        <hr class="block my-3" />
                        <FormattedPrice
                            :price="product.price"
                            class="text-2xl"
                        />
                        <div class="mt-10">{{ product.introduction }}</div>
                    </div>
                    <div class="flex">
                        <counter-item
                            v-model:value="amount"
                        ></counter-item>
                        <button
                            class="bg-orange-300 border border-pink-700 ml-5 text-pink-900 hover:bg-orange-500"
                            @click="handleAddProductToCart"
                        >
                            <svg-render-vue
                                type="cart"
                                class="mr-2"
                            ></svg-render-vue>
                            <span>加入購物車</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="border mt-8 rounded-md border-gray-300" v-if="product.description">
                <div
                    class="py-2 text-center bg-gray-300 rounded-md font-bold shadow-sm shadow-black"
                >
                    商品描述
                </div>
                <div class="p-4" v-html="product.description"></div>
            </div>
        </div>
        <EvaluationsSection class="mt-5" :evaluations="product.evaluations" />
        <template v-slot:emptyText>查無商品</template>
    </EmptyContainer>
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import CounterItem from "../../../components/Global/CounterItem.vue";
import FormattedPrice from "../../../components/User/Product/FormattedPrice.vue";
import EmptyContainer from "../../../components/Global/EmptyContainer.vue";
import ReturnButton from "../../../components/Objects/LinkButton/ReturnButton.vue";
import EvaluationsSection from "../../../components/User/Product/Evaluations/EvaluationsSection.vue";
export default {
    components: {
        CounterItem,
        FormattedPrice,
        EmptyContainer,
        ReturnButton,
        EvaluationsSection,
    },
    async setup() {
        const route = useRoute();
        const { dispatch, getters } = useStore();
        /* id */
        const id = computed(() => route.params.id);
        /* 產品 */
        const product = computed(() =>
            getters["productHandler/getProduct"](id.value)
        );
        if (!product.value) {
            /* 取得產品內容 */
            await dispatch("productHandler/getProductById", {
                product_id: id.value,
            });
        }
        /* 數量 */
        const amount = ref(1);
        /* 新增商品至購物車 */
        const handleAddProductToCart = async () => {
            await dispatch("productHandler/addProductToCart", {
                amount: amount.value,
                product_id: product.value.id,
            });
        };
        return {
            amount,
            product,
            handleAddProductToCart,
        };
    },
};
</script>

<style scoped></style>
