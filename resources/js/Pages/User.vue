<template>
    <div class="user flex gap-5 py-5 px-6">
        <transition name="fade">
            <div
                :class="[
                    { 'hidden md:block': !is_now_user },
                    'bg-white w-full md:w-[18%] ',
                ]"
            >
                <MenuContainer
                    top="top-20"
                    :enable_collapse="false"
                    :title="username || '顧客'"
                    class="h-[360px] md:h-full md:max-h-[461px] text-black text-center"
                    v-if="show"
                >
                    <template #menu_item="{ collapse_menu }">
                        <MenuItem
                            v-for="item in user_menu_lists"
                            :key="item.text"
                            :item="item"
                            :collapse="collapse_menu"
                        />

                        <div
                            class="w-full px-2 text-center absolute bottom-0 mb-4 font-bold"
                        >
                            <div
                                class="border border-slate-300 rounded-sm py-1 duration-300 mb-4"
                                v-hover="
                                    'hover:cursor-pointer hover:bg-blue-500'
                                "
                                @click="editPassword.toggleShow()"
                            >
                                修改密碼
                            </div>
                            <div
                                class="border border-slate-300 rounded-sm py-1 duration-300"
                                v-hover="
                                    'hover:cursor-pointer hover:bg-red-500 hover:border-red-500'
                                "
                                @click="handleLogout"
                            >
                                登出
                            </div>
                        </div>
                    </template>
                </MenuContainer>
            </div>
        </transition>

        <div
            class="w-full min-h-[80vh] relative"
            :class="{ 'hidden md:flex': is_now_user }"
        >
            <RouterView v-slot="{ Component }">
                <Transition name="fade-from-bottom-15px" mode="out-in">
                    <KeepAlive>
                        <component :is="Component" v-show="show" />
                    </KeepAlive>
                </Transition>
            </RouterView>
            <UpdatePassword ref="editPassword" />
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, defineAsyncComponent, onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import MenuContainer from "../components/Global/Menu/MenuContainer.vue";
import MenuItem from "../components/Global/Menu/MenuItem.vue";
import InMask from "../components/Global/Region/InMask.vue";
export default {
    components: {
        MenuContainer,
        MenuItem,
        InMask,
        UpdatePassword: defineAsyncComponent(() =>
            import("../components/User/User/UpdatePassword.vue")
        ),
    },
    async setup() {
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
                route_name: "user-orders",
                text: "訂單查詢",
            },
            {
                route_name: "user-article_collection",
                text: "文章收藏",
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

        //取得訂單
        //取得珍藏文章
        await Promise.all([
            dispatch("productHandler/getOrders"),
            dispatch("articleHandler/getCollectedArticles"),
        ]);

        const editPassword = ref();

        return {
            show,
            is_now_user,
            username,
            user_menu_lists,
            handleLogout,
            editPassword,
        };
    },
};
</script>

<style></style>
