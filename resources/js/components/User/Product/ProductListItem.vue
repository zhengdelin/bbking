<template>
    <div class="flex flex-col justify-between">
        <div class="">
            <router-link
                :to="{ path: productPath }"
                class="hover:brightness-[0.7] duration-300 flex justify-center"
            >
                <img
                    :src="product.image"
                    :alt="product.name"
                    width="300"
                    height="300"
                />
            </router-link>
            <router-link
                :to="{ path: productPath }"
                class="px-2 mt-3 my-1 block hover:text-blue-800 font-bold"
                >{{ product.name }}</router-link
            >
        </div>
        <FormattedPrice :price="product.price" class="col-span-1" />
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
