<template>
    <div class="nav-icon flex-cc gap-3 absolute right-2">
        <RouterLink :to="{ name: 'search' }">
            <svg-render-vue class="hover:text-blue-500" type="search" />
        </RouterLink>
        <RouterLink :to="{ name: is_login ? 'user' : 'user-login' }">
            <svg-render-vue class="hover:text-blue-500" type="user2" />
        </RouterLink>
        <RouterLink :to="{ name: is_login ? 'shopping_cart' : 'user-login' }">
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

<style scoped>
.router-link-active {
    color: rgb(59, 130, 246);

}
</style>
