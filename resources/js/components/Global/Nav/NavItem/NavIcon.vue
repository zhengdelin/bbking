<template>
    <div class="nav-icon flex-cc gap-3 absolute right-2">
        <RouterLink active-class="text-blue-500" :to="{ name: 'search' }">
            <svg-render-vue class="hover:text-blue-500" type="search" />
        </RouterLink>
        <RouterLink
            :active-class="is_login ? 'text-blue-500' : 'text-black'"
            :to="{ name: is_login ? 'user' : 'user-login' }"
        >
            <svg-render-vue class="hover:text-blue-500" type="user2" />
        </RouterLink>
        <RouterLink
            :active-class="is_login ? 'text-blue-500' : 'text-black'"
            :to="{ name: is_login ? 'shopping_cart' : 'user-login' }"
        >
            <svg-render-vue class="hover:text-blue-500" type="product2" />
        </RouterLink>
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
    setup() {
        const { state } = useStore();
        const is_login = computed(() => state.is_login);
        return { is_login };
    },
};
</script>

<style scoped></style>
