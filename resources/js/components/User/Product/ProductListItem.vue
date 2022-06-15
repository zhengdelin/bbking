<template>
    <div class="flex flex-col justify-between p-2 text-center bg-white min-h-[300px]">
        <div class="flex-1 flex flex-col justify-between">
            <RouterLink
                :to="{ path: productPath }"
                class="hover:brightness-[0.7] duration-300 flex justify-center items-center h-[80%]"
            >
                <img :src="product.image" :alt="product.name"/>
            </RouterLink>
            <RouterLink
                :to="{ path: productPath }"
                class="px-2 mt-3 my-1 block hover:text-blue-800 font-bold"
                >{{ product.name }}</RouterLink
            >
        </div>
        <FormattedPrice :price="product.price" class="col-span-1 mt-2" />
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import FormattedPrice from "./FormattedPrice.vue";
export default {
    components: { FormattedPrice },
    props: {
        product: {
            type: Object,
            default: () => {},
        },
    },
    setup(props) {
        const product = computed(() => props.product);
        const productPath = computed(
            () => `/products/${product.value.eng_name}/${product.value.id}`
        );
        return { product, productPath };
    },
};
</script>

<style scoped></style>
