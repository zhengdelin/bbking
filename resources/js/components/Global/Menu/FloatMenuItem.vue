<script>
import { computed, h, ref, resolveComponent } from "@vue/runtime-core";
import { Transition } from "@vue/runtime-dom";

export default {
    name: "FloatMenuItem",
    props: {
        item: {
            type: Object,
            default: () => ({
                //路徑名稱擇一,優先名稱
                route_name: "",
                url: "",
                text: "",
                svg_name: "",
                children: [],
            }),
        },
        index: {
            type: Number,
            default: 0,
        },
        layer:{
            type:Number,
            default:0
        }
    },
    setup(props, { slots }) {
        //文字,route名稱,route路徑,svg名稱,子menu
        const { text, route_name, url, svg_name, children } = props.item;
        const { index } = props;
        //定義hover
        const hover = ref(false);
        //路由物件
        const route_obj = computed(() =>
            route_name
                ? { name: route_name }
                : url
                ? { path: url }
                : ""
        );

        /* 渲染其他物件 */
        //渲染svg
        const svg = svg_name
            ? h(
                  "div",
                  {
                      class: "pr-2 h-[24px]",
                  },

                  h(
                      "div",
                      { class: "w-4" },
                      h(resolveComponent("svg-render-vue"), {
                          type: svg_name,
                      })
                  )
              )
            : null;
        //渲染text物件 會做動態更換的要轉成函數
        const text_obj = h(Transition, { name: "leave-to-left-500" }, () =>
            h(
                "span",
                {
                    class: "whitespace-nowrap font-semibold",
                },
                text
            )
        );
        //如果有children 渲染箭頭
        const children_arrow = computed(() => {
            return children
                ? h(resolveComponent("svg-render-vue"), {
                      type: "arrow_right",
                      class: `absolute right-2 duration-500 ${
                          hover.value ? "rotate-180" : ""
                      }`,
                  })
                : "";
        });
        //左邊的箭頭
        const pointer =
            index === 0
                ? h("div", {
                      class: "w-3 h-3 rotate-45 bg-zinc-900 absolute -left-1.5 top-3",
                  })
                : "";
        //填充物
        const filler = h("div", {
            class: "w-[15px] h-[2.5rem] absolute -left-[15px]",
        });
        //如果是路由渲染router 否則渲染div
        return () =>
            h(
                route_obj.value ? resolveComponent("router-link") : "div",
                {
                    onmouseover: () => {
                        hover.value = true;
                    },
                    onmouseleave: () => {
                        hover.value = false;
                    },
                    class: `flex items-center block relative hover:text-cyan-500 hover:cursor-pointer py-2 pl-3 pr-10`,
                    to: route_obj,
                },
                //如果渲染router 必須加上()=>函數表達式
                route_obj.value
                    ? () => [
                          pointer,
                          filler,
                          svg,
                          text_obj,
                          children_arrow.value,
                          slots.float_menu_container({ hover: hover.value }),
                      ]
                    : [
                          pointer,
                          filler,
                          svg,
                          text_obj,
                          children_arrow.value,
                          slots.float_menu_container({ hover: hover.value }),
                      ]
            );
    },
};
</script>

<style scoped>
.router-link-exact-active {
    color: rgb(6, 182, 212);
}
</style>
