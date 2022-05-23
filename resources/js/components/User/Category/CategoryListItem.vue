<template>
    <div class="h-40 flex relative">
        <router-link
            :to="{ path: '/articles/' + eng_name }"
            class="w-1/2 bg-cyan-500 duration-500 hover:bg-cyan-300 rounded-l-sm"
            @mouseover="articleMouseOver"
            @mouseleave="articleMouseLeave"
        >
        </router-link>
        <router-link
            :to="{ path: '/products/' + eng_name }"
            class="w-1/2 bg-cyan-500 duration-500 hover:bg-cyan-300 rounded-r-sm"
            @mouseover="productMouseOver"
            @mouseleave="productMouseLeave"
        >
        </router-link>
        <div
            class="absolute left-0 top-[calc(50%-12px)] w-full text-center font-bold"
        >
            {{ product_mouse_over || article_mouse_over ? "前往 " : ""
            }}{{ name }}
            {{
                product_mouse_over
                    ? " 產品區"
                    : article_mouse_over
                    ? " 文章區"
                    : ""
            }}
        </div>
    </div>
</template>

<script>
import { ref, toRefs } from "@vue/reactivity";
export default {
    components: {},
    props: {
        category: {
            type: Object,
            default: () => {},
        },
    },
    setup(props) {
        const { category } = toRefs(props);
        const article_mouse_over = ref(false);
        const product_mouse_over = ref(false);
        const articleMouseOver = () => {
            article_mouse_over.value = true;
        };
        const articleMouseLeave = () => {
            article_mouse_over.value = false;
        };
        const productMouseOver = () => {
            product_mouse_over.value = true;
        };
        const productMouseLeave = () => {
            product_mouse_over.value = false;
        };
        return {
            ...toRefs(category.value),
            article_mouse_over,
            product_mouse_over,
            articleMouseOver,
            articleMouseLeave,
            productMouseOver,
            productMouseLeave,
        };
    },
};
</script>

<style scoped></style>
