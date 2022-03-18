<template>
    <menu-container :enable_collapse="false" class="w-full md:w-[16.666%]">
        <template #menu_item="{ collapse_menu }">
            <template
                v-for="(outer_list, key) in category_menu_lists"
                :key="key"
            >
                <menu-item
                    :item="outer_list"
                    :collapse="collapse_menu"
                    box_py="py-2"
                    text_class="pl-[3rem]"
                    @click="toggleMenuItem(key)"
                    class="menu-item"
                >
                </menu-item>
                <menu-container
                    :enable_collapse="false"
                    :style="getSubMenuHeight(key)"
                >
                    <template #menu_item>
                        <menu-item
                            v-for="inner_list in outer_list.children"
                            :key="inner_list.text"
                            :item="inner_list"
                            :collapse="collapse_menu"
                            box_py="py-1"
                            text_class=" pl-[4rem]"
                            class="duration-500 transition-[height,opacity]"
                            :style="getSubMenuItemHeight(key)"
                            @click="subMenuItemClick"
                        >
                        </menu-item>
                    </template>
                </menu-container>
            </template>
        </template>
    </menu-container>
</template>

<script>
import MenuContainer from "./MenuContainer.vue";
import MenuItem from "./MenuItem.vue";
import { computed, h, reactive, ref, resolveComponent, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
    components: { MenuContainer, MenuItem },
    setup(props,{slots}) {
        const { getters } = useStore();
        const route = useRoute();
        const route_path = computed(() => route.fullPath);
        //路由跳轉狀態
        const route_change = ref(false);
        //category menu列表
        const category_menu_lists = computed(
            () => getters["globalHandler/category_menu_lists"]
        );
        // console.log(category_menu_lists.value);
        //menu的展開控制
        const menu_toggle = reactive({});
        const toggleMenuItem = (val) => {
            //如果路由有跳轉，則將該菜單打開
            if (route_change.value) {
                menu_toggle[val] = true;
                //將路由跳轉狀態設為false
                route_change.value = false;
            } else {
                menu_toggle[val] = !menu_toggle[val];
            }
            //把其他的關掉
            // Object.keys(menu_toggle).forEach((i) => {
            //     // console.log("val", i, val, menu_toggle, i === val);
            //     if (i !== val) menu_toggle[i] = false;
            // });
        };
        watch(route_path, () => {
            /* 路由跳轉時，將路由跳轉狀態設為true
            如果經由submenu item跳轉，則會設為false */
            route_change.value = !route_change.value;
        });
        const subMenuItemClick = () => {
            /* 先經過click event在路由跳轉,此時路由跳轉狀態為false
            點擊submenu item時
            先將路由跳轉狀態設為true
            再經由watch將路由跳轉狀態設為false
            使菜單在點擊sub menuitem路由時可以正常開關 */
            route_change.value = !route_change.value;
        };
        //每一個子menuitem高度
        const per_height = computed(() => {
            //每個子menuitem的py(py-1 = 4*2 = 8px)加上1rem的高度
            return (
                sub_menu_item_py.value.substr(
                    sub_menu_item_py.value.indexOf("-") + 1
                ) *
                    8 +
                24
            );
        });
        //子menuitem的上下內間距
        const sub_menu_item_py = ref("py-1");
        //取得動態子menu容器高度
        const getSubMenuHeight = (val) => {
            //子menu的高度為每個item的高度乘上children數量
            const h =
                per_height.value *
                category_menu_lists.value[val].children.length;
            return menu_toggle[val]
                ? { height: h + "px" }
                : {
                      height: 0,
                      opacity: 0,
                      "z-index": -50,
                  };
        };
        // 取得動態子menuitem高度
        const getSubMenuItemHeight = (val) => {
            return menu_toggle[val]
                ? {
                      height: per_height.value + "px",
                  }
                : {
                      height: 0,
                      opacity: 0,
                  };
        };
        return h(resolveComponent('menu-constainer'),{
            enable_collapse:false,
            class:"w-full md:w-[16.666%]"
        },{
            
        })
    //     return {
    //         category_menu_lists,
    //         menu_toggle,
    //         toggleMenuItem,
    //         getSubMenuHeight,
    //         getSubMenuItemHeight,
    //         subMenuItemClick,
    //     };
    },
};
</script>

<style scoped></style>
