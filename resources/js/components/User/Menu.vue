<template>
  <div class="user-menu flex-ac flex-col w-full h-full">
    <div class="title flex-cc">
      <transition name="title">
        <span v-show="show_user">Hello {{ user }}</span>
      </transition>
    </div>

    <router-link :to="{ name: 'user_profile' }" class="w-full">
      <div class="py-2 text-center">個人資料</div>
    </router-link>
    <router-link :to="{ name: 'user_shopping_cart' }" class="w-full">
      <div class="py-2 text-center">購物車</div>
    </router-link>
    <router-link :to="{ name: 'user_article_collection' }" class="w-full">
      <div class="py-2 text-center">文章收藏</div>
    </router-link>
    <router-link :to="{ name: 'user_shopping_record' }" class="w-full">
      <div class="py-2 text-center">購買紀錄</div>
    </router-link>
    <div class="logout absolute bottom-0 mb-4" @click="logout">登出</div>
    <!-- <div v-if="" ref="mobile"></div> -->
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const { state,dispatch } = useStore();

    const logout = async () => {
      dispatch("userLogout");
      if (!state.is_login) router.push({ name: "user_login" });
    };
    const user = ref(state.user_info.account);

    const show_user = ref(false);

    onMounted(() => {
      setTimeout(() => {
        show_user.value = true;
      }, 500);
    });

    return { user, show_user, logout };
  },
};
</script>

<style scoped>
.router-link-active {
  background-color: rgba(193, 247, 247, 0.5);
  font-weight: bold;
}
.user-menu {
  border-right: 0px;
}
@media all and (min-width: 768px) {
  .user-menu {
    border-bottom: 0px;
    border-right: 1px solid rgba(146, 131, 131, 0.5);
  }
}
.user-menu .title {
  height: 2.5rem;
}
.user-menu a {
  text-decoration: none;
  color: black;
}
.user-menu a:hover {
  background-color: rgba(193, 247, 247, 0.5);
  font-weight: bold;
}
.logout:hover {
  color: red;
  cursor: pointer;
}
.title-enter-active,
.title-leave-active {
  transition: all 1s;
}
.title-enter-from, .title-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-50%);
  opacity: 0;
}
</style>
