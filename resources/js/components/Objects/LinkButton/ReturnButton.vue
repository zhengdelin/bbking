<template>
    <RouterLink :to="routeOption">
        <button class="bg-blue-500 text-white font-bold hover:bg-blue-400">
            <slot>返回</slot>
        </button>
    </RouterLink>
</template>

<script>
import { toRefs } from "@vue/reactivity";
export default {
    props: {
        routeOption: {
            type: Object,
            default: () => {
                name: "home";
            },
        },
    },
    setup(props) {
        return { ...toRefs(props) };
    },
};
</script>

<style scoped></style>
