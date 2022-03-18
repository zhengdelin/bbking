<script>
import { computed, h, ref, resolveComponent } from "@vue/runtime-core";
import { Transition } from "@vue/runtime-dom";
import FloatMenuContainer from "./FloatMenuContainer.vue";

export default {
    name:"MenuItem",
    components: { FloatMenuContainer },
    props: {
        item: {
            type: Object,
            default: () => ({
                //路徑名稱擇一,優先名稱
                route_name: "",
                url_path: "",
                text: "",
                svg_name: "",
                children: [],
            }),
        },
        collapse: {
            type: Boolean,
            default: true,
        },
        box_py: {
            type: String,
            default: "py-3",
        },
        text_class: {
            type: String,
            default: "",
        },
    },
    setup(props, { slots }) {
        // console.log(props.item);
        const { text, route_name, url_path, svg_name, children } = props.item;
        const { box_py, text_class } = props;
        const collapse = computed(() => props.collapse);
        //定義hover
        const hover = ref(false);
        //渲染svg
        const svg = svg_name
            ? h(
                  "div",
                  {
                      class: "pl-6 pr-10 h-[24px]",
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
            collapse.value
                ? ""
                : h(
                      "span",
                      {
                          class: `whitespace-nowrap font-semibold ${text_class}`,
                      },
                      text
                  )
        );
        //如果有children 渲染箭頭
        const children_arrow = computed(() => {
            return children
                ? h(resolveComponent("svg-render-vue"), {
                      type: "arrow_down",
                      class: `absolute right-4 duration-500 ${
                          hover.value ? "-rotate-90" : ''
                      }`,
                  })
                : "";
        });
        //float menu slot
        const float_menu = children
            ? h(resolveComponent("float-menu-container"), {
                  lists: children,
              })
            : "";
        // console.log(children, float_menu);

        //路由路徑
        const route_obj = computed(() =>
            route_name
                ? { name: route_name }
                : url_path
                ? { path: url_path }
                : ""
        );
        //如果是路由渲染router 否則渲染div
        return () =>
            route_obj.value
                ? h(
                      resolveComponent("router-link"),
                      {
                          onmouseover() {
                              hover.value = true;
                          },
                          onmouseleave() {
                              hover.value = false;
                          },
                          class: `relative flex items-center hover:bg-cyan-200 hover:bg-opacity-30 hover:cursor-pointer ${box_py}`,
                          to: route_obj,
                      },
                      () => [
                          svg,
                          text_obj,
                          children_arrow.value,
                          hover.value ? float_menu : "",
                      ]
                  )
                : h(
                      "div",
                      {
                          onmouseover() {
                              hover.value = true;
                          },
                          onmouseleave() {
                              hover.value = false;
                          },
                          class: `relative flex items-center hover:bg-cyan-200 hover:bg-opacity-30 hover:cursor-pointer ${box_py}`,
                      },
                      [
                          svg,
                          text_obj,
                          children_arrow.value,
                          hover.value ? float_menu : "",
                      ]
                  );
    },
};
</script>

<style scoped>
.router-link-exact-active {
    background-color: rgba(165, 243, 252, 0.5);
    color: rgb(147, 51, 234);
}
</style>
