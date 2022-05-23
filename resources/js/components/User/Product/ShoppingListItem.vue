<template>
    <div
        :class="[
            'grid justify-items-center items-center p-2 border-gray-300-sm bg-white border-b-0 last:border-b',
            gridColsClass,
        ]"
    >
        <div class="col-span-1 hidden md:block">
            <img :src="image" :alt="name" width="100" height="100" />
        </div>
        <!-- {{ product }} -->
        <router-link
            :to="{ path: `/products/${eng_name}/${product_id}` }"
            class="col-span-1 md:col-span-3 hover:text-blue-800 font-bold"
        >
            {{ name }}
        </router-link>
        <FormattedPrice :price="price" class="col-span-1" />
        <div class="col-span-1 md:col-span-2">
            <CounterItem
                v-if="editable"
                :value="amount"
                @update:value="amountChange"
                @decreaseLowerThan0="handleDeleteCartProduct"
            />
            <div v-else>
                {{ amount }}
            </div>
        </div>
        <FormattedPrice :price="price * amount" class="col-span-1" />
        <slot :product="product"></slot>
    </div>
</template>

<script>
import { computed, defineAsyncComponent, toRefs } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import FormattedPrice from "./FormattedPrice.vue";
export default {
    components: {
        CounterItem: defineAsyncComponent(() =>
            import("../../Global/CounterItem.vue")
        ),
        FormattedPrice,
    },
    props: {
        product: {
            type: Object,
            default: () => {},
        },
        editable: {
            type: Boolean,
            default: false,
        },
        gridColsClass: { type: String, default: " grid-cols-4 md:grid-cols-8" },
    },
    setup(props) {
        const route = useRoute();
        const cur_route = computed(() => route.name);
        const { dispatch } = useStore();
        /* 購物車產品資訊 */
        const { product, editable, gridColsClass } = toRefs(props);
        // console.log(product.value);
        /* 接收counter的emit */
        const amountChange = async (val) => {
            if (val != product.value.amount) {
                product.value.amount = val;
                // console.log("amountChange",val);
                await dispatch("productHandler/addProductToCart", {
                    amount: val,
                    product_id: product.value.product_id,
                    order_id: product.value.order_id,
                });
                // console.log(product.value);
            }
        };
        const handleDeleteCartProduct = async () => {
            await dispatch("productHandler/deleteCartProduct", {
                product_id: product.value.product_id,
                order_id: product.value.order_id,
            });
        };
        return {
            cur_route,
            editable,
            gridColsClass,
            ...toRefs(product.value),
            product,
            amountChange,
            handleDeleteCartProduct,
        };
    },
};
</script>

<style scoped></style>
