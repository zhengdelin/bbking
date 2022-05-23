// menu

<template>
    <div
        id="menu-container"
        :class="['sticky  duration-700 pt-3', top, getMenuWidth]"
    >
        <!-- 摺疊按鈕 -->
        <div
            class="absolute z-10 top-4 -right-4 w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center hover:cursor-pointer"
            v-if="enable_collapse"
            @click="collapseMenu"
        >
            <svg-render-vue
                type="arrow_right"
                :class="[{ ' rotate-180': !collapse_menu }, 'duration-500']"
            ></svg-render-vue>
        </div>
        <!-- title -->
        <div class="py-3 h-12 flex-cc font-bold" v-if="title">
            <transition name="title">
                <span v-show="show_title">{{ title }}</span>
            </transition>
        </div>
        <slot name="menu_item" :collapse_menu="collapse_menu"></slot>
    </div>
</template>

<script>
import { reactive, ref, toRefs } from "@vue/reactivity";
import { computed, onMounted, provide } from "@vue/runtime-core";

export default {
    name: "MenuContainer",
    props: {
        top: {
            type: String,
            default: "top-0",
        },
        title: {
            type: String,
            default: "",
        },
        enable_collapse: {
            type: Boolean,
            default: true,
        },
        menu_tree: {
            type: [Object, Array],
            default: () => [] || {},
        },
    },
    setup(props) {
        //data
        const { enable_collapse, title, top } = toRefs(props);
        const collapse_menu = ref(enable_collapse.value);
        provide("collapse", collapse_menu);
        //function
        const collapseMenu = () => {
            collapse_menu.value = !collapse_menu.value;
        };
        //menu寬度
        const getMenuWidth = computed(() => {
            if (enable_collapse.value)
                return collapse_menu.value ? "w-[4.5rem]" : "w-52";
            return "";
        });
        //show title
        const show_title = ref(false);
        onMounted(() => {
            setTimeout(() => {
                show_title.value = true;
            }, 500);
        });
        //menu tree
        const menu_tree = reactive(props.menu_tree);
        // console.log(menu_tree);
        //取得目標節點
        const getTargetNode = (tree_root, position) => {
            /* 根節點位置 */
            let node = menu_tree[tree_root];
            /* 尋訪至目標節點 */
            position.forEach((pos) => {
                node = node.children[pos];
            });
            return node;
        };
        const setMenuTreeHeight = (tree_root, position, value) => {
            // console.log(
            //     "tree_root->",
            //     tree_root,
            //     "position->",
            //     position,
            //     "value->",
            //     value
            // );
            let node = getTargetNode(tree_root, position);
            //設置高度
            node.height = value;
        };
        const getMenuHeight = (tree_root, position) => {
            // console.log(
            //     "getMenuHeight,tree_root->",
            //     tree_root,
            //     ", position->",
            //     position
            // );
            // console.log("---------------------------------------------------");
            /* 有menu時才執行，否則回傳0 */
            if (Object.keys(menu_tree).length !== 0) {
                //目標node
                const node = getTargetNode(tree_root, position);
                /* 執行traversal函數 */
                return traversal_tree(node);
            }
            return 0;
        };
        //traversal目標節點下的tree的函數
        const traversal_tree = (node) => {
            //高度
            let height = 0;
            /* 如果有children才執行 */
            /* 如果目前節點height =0就停止執行，表示該節點已被關閉 */
            if (node.children && node.height !== 0) {
                // console.log("node", node);
                /* 遍歷每個children */
                node.children.forEach((child) => {
                    height += traversal_tree(child);
                });
                /* 增加高度 */
                height += node.height ? node.height : 0;
            }
            return height;
        };
        provide("setMenuTreeHeight", setMenuTreeHeight);
        provide("getMenuHeight", getMenuHeight);
        return {
            title,
            enable_collapse,
            collapse_menu,
            show_title,
            getMenuWidth,
            collapseMenu,
            top,
        };
    },
};
</script>

<style>
.title-enter-active,
.title-leave-active {
    transition: all 1s;
}
.title-enter-from, .title-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(-50%);
    opacity: 0;
}
</style>
