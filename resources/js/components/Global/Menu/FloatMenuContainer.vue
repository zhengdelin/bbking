<script>
import {
    computed,
    h,
    onMounted,
    ref,
    resolveComponent,
} from "@vue/runtime-core";
import { Transition } from "@vue/runtime-dom";
import FloatMenuItem from "./FloatMenuItem.vue";

export default {
    name: "FloatMenuContainer",
    components: { FloatMenuItem },
    props: {
        lists: {
            type: Array,
            default: () => [],
        },
        toggleMenu: {
            type: Function,
            default: () => {},
        },
        /* 第幾層 */
        layer: {
            type: Number,
            default: 1,
        },
        hover: {
            type: Boolean,
            default: true,
        },
    },
    setup(props) {
        /* DOM 用來取得寬度 */
        const float_menuDOM = ref();
        //list
        const lists = computed(() => props.lists);
        const toggleMenu = computed(() => props.toggleMenu);
        /* 第幾層 */
        const layer = computed(() => props.layer);
        /* 容器的寬度 */
        const float_menu_width = computed(() =>
            float_menuDOM.value ? float_menuDOM.value.clientWidth : 0
        );
        //相對位置
        const getPosition = computed(() => {
            return {
                top: layer.value === 1 ? "11px" : "0px",
                right: `-${float_menu_width.value + 15}px`,
            };
        });
        /* items */
        const float_menu_items = computed(() => {
            /* 迴圈遍歷lists */
            return lists.value.map((list, key) => {
                // console.log(layer.value);
                return h(
                    resolveComponent("float-menu-item"),
                    {
                        item: list,
                        key: key,
                        index: key,
                        /* 傳入目前的曾數 */
                        layer: layer.value,
                        onClick: () => {
                            // console.log('layer-',layer.value, 'clicked',layer.value % 2 !== 0);
                            if (layer.value <=1) toggleMenu.value();
                        },
                    },
                    {
                        /* slot插槽 */
                        float_menu_container: ({ hover }) => {
                            /* 有children時遞迴自己 */
                            return list["children"]
                                ? h(resolveComponent("float-menu-container"), {
                                    /* 傳入目前的層數+1 */
                                      layer: layer.value + 1,
                                      lists: list["children"],
                                      toggleMenu: toggleMenu.value,
                                      hover: hover,
                                  })
                                : "";
                        },
                    }
                );
            });
        });
        /* 外層傳入的hover */
        const hover = computed(() => props.hover);
        return () =>
            h(
                Transition,
                {
                    name: "appear-left",
                },
                () =>
                    hover.value
                        ? h(
                              "div",
                              {
                                  id: `layer-${layer.value}`,
                                  class: "z-10 bg-zinc-900 absolute rounded text-white divide-y divide-gray-400",
                                  style: getPosition.value,
                                  ref: float_menuDOM,
                              },
                              float_menu_items.value
                          )
                        : ""
            );
    },
};
</script>

<style scoped>
.appear-left-enter-active {
    transition: opacity 1s, transform 0.5s;
}
.appear-left-leave-active {
    transition: opacity 0.1s linear, transform 0.2s linear;
}
.appear-left-enter-from {
    opacity: 0;
    transform: translateX(-20px);
}
.appear-left-leave-to {
    opacity: 0;
    transform: translateX(15px);
}

.appear-left-enter-to,
.appear-left-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>
