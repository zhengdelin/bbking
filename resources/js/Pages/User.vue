<template>
    <div class="user flex flex-1 pt-3">
        <div
            :class="[
                { 'hidden md:block': !is_now_user },
                'w-full md:w-[16.666%]',
            ]"
        >
            <transition name="fade">
                <menu-container
                    :enable_collapse="false"
                    :title="`你好 ${username}`"
                    class="h-full text-black border-0 md:border-r-[1.5px] border-gray-300 text-center"
                    v-if="show"
                >
              
                    <template #menu_item="{collapse_menu}">
                        <menu-item
                            v-for="list in user_menu_lists"
                            :key="list.text"
                            :item="list"
                            :collapse="collapse_menu"
                            box_py="py-2"
                        ></menu-item>
                        <div
                            class="w-full text-center absolute bottom-0 mb-4 hover:cursor-pointer hover:text-red-500 font-bold"
                            @click="handleLogout"
                        >
                            登出
                        </div>
                    </template>
                </menu-container>
            </transition>
        </div>
        <div
            class="flex items-center justify-center w-full"
            :class="{ 'hidden md:flex': is_now_user }"
        >
            <div
                class="w-[95%] h-full md:py-2 px-4 border-0 md:border-[1px] border-gray-300 rounded-lg"
            >
                <router-view v-slot="{ Component }">
                    <transition name="roll-up" mode="out-in">
                        <component :is="Component" v-show="show"></component>
                    </transition>
                </router-view>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import MenuContainer from "../components/Menu/MenuContainer.vue";
import MenuItem from "../components/Menu/MenuItem.vue";
export default {
    components: {
        MenuContainer,
        MenuItem,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const { state, dispatch } = useStore();
        const show = ref(false);
        const is_now_user = computed(() => {
            return route.name === "user" ? true : false;
        });
        //名字
        const username = computed(() => state.user_info.name);
        //menu欄位
        const user_menu_lists = [
            {
                route_name: "user-profile",
                text: "個人資料",
            },
            {
                route_name: "user-shopping_cart",
                text: "購物車",
            },
            {
                route_name: "user-article_collection",
                text: "文章收藏",
            },
            {
                route_name: "user-shopping_record",
                text: "購買紀錄",
            },
        ];
        // console.log(user_menu_lists);
        //登出
        const handleLogout = async () => {
            dispatch("userHandler/logout").then(() => {
                if (!state.is_login) router.push({ name: "user-login" });
            });
        };
        onMounted(() => {
            console.log("user onMounted");
            setTimeout(() => {
                show.value = true;
            }, 300);
        });
        return { show, is_now_user, username, user_menu_lists, handleLogout };
    },
};
</script>

<style>
</style>
