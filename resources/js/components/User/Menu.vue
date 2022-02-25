<template>
  <div class="user-menu flex-ac flex-column w-100 h-100">
    <div class="title flex-cc">
      <transition name="title">
        <span v-show="show_user">Hello {{ user }}</span>
      </transition>
    </div>

    <router-link :to="{ name: 'user_profile' }" class="w-100">
      <div class="py-2 text-center">個人資料</div>
    </router-link>
    <router-link :to="{ name: 'user_shopping_cart' }" class="w-100">
      <div class="py-2 text-center">購物車</div>
    </router-link>
    <router-link :to="{ name: 'user_article_collection' }" class="w-100">
      <div class="py-2 text-center">文章收藏</div>
    </router-link>
    <router-link :to="{ name: 'user_shopping_record' }" class="w-100">
      <div class="py-2 text-center">購買紀錄</div>
    </router-link>
    <div class="logout position-absolute bottom-0 mb-4" @click="logOut">
      登出
    </div>
    <!-- <div v-if="" ref="mobile"></div> -->
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { inject, onMounted } from "@vue/runtime-core";
import { useRouter } from 'vue-router';
import { apiPostUserLogout } from '../../api/api';
export default {
  setup() {
    const router = useRouter();
    const store = inject("store");
    const { state, userLogout } = store;

    const logOut = async() => {
      if (confirm("確認登出?")) {
        await apiPostUserLogout();
        userLogout();
        router.push({name:'user_login'})
      }
    };
    const user = ref(state.user);

    const show_user = ref(false);

    onMounted(() => {
      setTimeout(() => {
        show_user.value = true;
      }, 500);
    });

    return { user, show_user, logOut };
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
  border-bottom: 1px solid rgba(146, 131, 131, 0.5);
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
