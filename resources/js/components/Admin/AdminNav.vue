<template>
  <nav
    class="bg-neutral-900 text-white sticky top-0 h-screen duration-700"
    :class="{ 'w-16': collapse_menu, 'w-52': !collapse_menu }"
  >
    <div
      class="
        absolute
        top-4
        -right-4
        w-7
        h-7
        bg-purple-500
        rounded-full
        flex
        items-center
        justify-center
        hover:cursor-pointer
      "
      @click="collapseMenu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        class
        :class="[{ ' rotate-180': !collapse_menu }, 'duration-500']"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    </div>
    <div class="w-full flex flex-col pt-2">
      <admin-menu-item-vue
        v-for="item in menu_items"
        :key="item.text"
        :text="item.text"
        :route_name="item.route_name"
        :collapse="collapse_menu"
      >
        <div
          v-html="item.svg"
          class="flex items-center justify-center mr-8"
        ></div>
      </admin-menu-item-vue>
    </div>
  </nav>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import AdminMenuItemVue from "../Objects/Admin/AdminMenuItem.vue";

export default {
  components: {
    AdminMenuItemVue,
  },
  setup() {
    //data
    const collapse_menu = ref(true);
    const menu_items = reactive([
      {
        text: "首頁",
        route_name: "admin-home",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"/></svg>',
      },
      {
        text: "會員",
        route_name: "admin-members",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"/></svg>',
      },
      {
        text: "產品",
        route_name: "admin-products",
        svg: '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path fill="currentcolor" d="M11.5 23l-8.5-4.535v-3.953l5.4 3.122 3.1-3.406v8.772zm1-.001v-8.806l3.162 3.343 5.338-2.958v3.887l-8.5 4.534zm-10.339-10.125l-2.161-1.244 3-3.302-3-2.823 8.718-4.505 3.215 2.385 3.325-2.385 8.742 4.561-2.995 2.771 2.995 3.443-2.242 1.241v-.001l-5.903 3.27-3.348-3.541 7.416-3.962-7.922-4.372-7.923 4.372 7.422 3.937v.024l-3.297 3.622-5.203-3.008-.16-.092-.679-.393v.002z"/></svg>',
      },
      {
        text: "文章",
        route_name: "admin-articles",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1z"/></svg>',
      },
    ]);
    //function
    const collapseMenu = () => {
      collapse_menu.value = !collapse_menu.value;
    };
    return { collapse_menu, collapseMenu, menu_items };
  },
};
</script>

<style scoped>
svg {
  fill: white;
}
</style>