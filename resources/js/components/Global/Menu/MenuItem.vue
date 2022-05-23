<script>
import { computed, h, inject, ref, resolveComponent } from "@vue/runtime-core";
import { Transition } from "@vue/runtime-dom";
import FloatMenuContainer from "./FloatMenuContainer.vue";

export default {
    name: "MenuItem",
    components: { FloatMenuContainer },
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
        box_py: {
            type: Number,
            default: 3,
        },
        text_pl: {
            type: Number,
            default: 0,
        },
        //node節點位置
        position: {
            type: Array,
            default: () => [],
        },
        //menu根節點
        tree_root: {
            type: [String, Number],
            default: "" || 0,
        },
    },
    slots:{
        default:"test",
    },
    setup(props, { slots }) {
        //inject MenuContainer的function:設定高度、取得高度
        const setMenuTreeHeight = inject("setMenuTreeHeight");
        const getMenuHeight = inject("getMenuHeight");
        //文字,route名稱,route路徑,svg名稱,子menu
        const props_item = computed(() => props.item);
        const text = computed(() => props_item.value.text);
        const route_name = computed(() => props_item.value.route_name);
        const url = computed(() => props_item.value.url);
        const svg_name = computed(() => props_item.value.svg_name);
        const children = computed(() =>
            props_item.value.children ? props_item.value.children : ""
        );
        //外層menu的py,text_pl
        const { box_py, text_pl, tree_root, position } = props;
        //摺疊
        const collapse = inject("collapse");
        //submenu的toggle
        const menu_toggle = ref(false);
        //定義hover
        const hover = ref(false);
        //text padding left style
        let clientWidth = ref(window.innerWidth);
        window.addEventListener("resize", () => {
            // console.log('windwo resize');
            clientWidth.value = window.innerWidth;
        });
        const text_pl_style = computed(() => {
            let pl = text_pl;
            if (clientWidth.value > 1280);
            else if (clientWidth.value > 1080) pl--;
            else pl = 0;
            return { "padding-left": `${pl}rem` };
        });
        //路由物件
        const route_obj = computed(() =>
            route_name.value
                ? { name: route_name.value }
                : url.value
                ? { path: url.value }
                : ""
        );
        // console.log(route_obj.value);

        /* 子容器區域 */
        //子容器的py 如果父容器py > 1就 -1
        const sub_menu_item_py = box_py > 1 ? box_py - 1 : 1;
        //每一個子menuitem高度 = 每個子menuitem的py(py-1 = 4*2 = 8px)加上1rem的高度
        const per_height = sub_menu_item_py * 8 + 24;

        //取得動態子menu容器高度
        const getSubMenuStyle = computed(() => {
            //子menu的高度
            const h = getMenuHeight(tree_root, position);
            // console.log('getSubMenuStyle',h);
            return menu_toggle.value
                ? { height: h + "px", overflow: "visible" }
                : {
                      height: 0,
                      opacity: 0,
                      overflow: "hidden",
                  };
        });
        // 取得動態子menuitem高度
        const getSubMenuItemHeight = (position) => {
            const h = per_height + getMenuHeight(tree_root, position);
            return menu_toggle.value
                ? {
                      height: h + "px",
                  }
                : {
                      height: 0,
                      opacity: 0,
                  };
        };
        const toggleMenu = () => {
            // console.log('toggle');
            menu_toggle.value = !menu_toggle.value;
            if (children.value)
                //再toggle之後，設置menu的高度
                setMenuTreeHeight(
                    tree_root,
                    position,
                    menu_toggle.value
                        ? per_height *
                              (children.value ? children.value.length : 1)
                        : 0
                );
        };

        /* 渲染其他物件 */
        //渲染svg
        const svg = svg_name.value
            ? h(
                  "div",
                  {
                      class: `pl-6 mr-8 h-[24px]`,
                  },
                  h(
                      "div",
                      { class: "w-4" },
                      h(resolveComponent("svg-render-vue"), {
                          type: svg_name.value,
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
                          class: "whitespace-nowrap font-semibold",
                          style: text_pl_style.value,
                      },
                      text.value
                  )
        );
        //如果有children 渲染箭頭
        const children_arrow = computed(() => {
            /* 有children並且非摺疊狀態再渲染 */
            return children.value && !collapse.value
                ? h(
                      "div",
                      {
                          class: "inline-block absolute right-4 ",
                          style: { top: box_py * 4 + "px" },
                      },
                      h(resolveComponent("svg-render-vue"), {
                          type: "arrow_down",
                          class: `duration-500 ${
                              hover.value ? "-rotate-90" : ""
                          }`,
                      })
                  )
                : null;
        });
        //渲染float menu
        const float_menu = computed(() =>
            children.value
                ? h(resolveComponent("float-menu-container"), {
                      lists: children.value,
                      toggleMenu: toggleMenu,
                      hover: hover.value,
                  })
                : ""
        );
        //渲染child menu
        const menu_child = computed(() => {
            return children.value
                ? h(
                      "div",
                      {
                          class: "transition-[height,opacity] duration-500",
                          style: getSubMenuStyle.value,
                      },
                      children.value.map((child, index) => {
                          return h(resolveComponent("menu-item"), {
                              item: child,
                              box_py: sub_menu_item_py,
                              text_pl: text_pl + 1,
                              class: "transition-[height,opacity] duration-500",
                              //取得該child的style(下一層)
                              style: getSubMenuItemHeight([...position, index]),
                              tree_root: tree_root,
                              position: [...position, index],
                          });
                      })
                  )
                : "";
        });
        //渲染router-link
        const router_link = computed(() =>
            h(
                resolveComponent("router-link"),
                {
                    class: `${svg ? "flex" : ""}`,
                    to: route_obj.value,
                },
                () => [svg, text_obj]
            )
        );

        //外層menu的label 如果是router沒有children或者不是router，外層為div
        const outer_menu_label =
            (route_obj.value && children.value) || !route_obj.value
                ? "div"
                : resolveComponent("router-link");

        // console.log(route_obj.value,children,(route_obj.value && !children));
        const menu_item = computed(() =>
            h(
                outer_menu_label,
                {
                    onmouseover: () => {
                        hover.value = true;
                    },
                    onmouseleave: () => {
                        hover.value = false;
                    },
                    onclick: () => {
                        // console.log('toggle');
                        toggleMenu();
                    },
                    to: route_obj.value,
                    class: `${
                        svg ? "flex" : ""
                    } block relative hover:bg-cyan-200 hover:bg-opacity-30 hover:cursor-pointer py-${box_py}`,
                },
                //是router
                route_obj.value /* 外層是router-link要加()=> */
                    ? outer_menu_label !== "div"
                        ? () => [
                              router_link.value,
                              children_arrow.value,
                              float_menu.value,
                          ]
                        : /* 外層是div不用加()=> */
                          [
                              router_link.value,
                              children_arrow.value,
                              float_menu.value,
                          ]
                    : /* 不是router直接渲染svg text_obj */
                      [svg, text_obj, children_arrow.value, float_menu.value]
            )
        );

        return () => h("div", [menu_item.value, menu_child.value]);
    },
};
</script>

<style scoped>
.router-link-active {
    /* background-color: rgba(165, 243, 252, 0.5); */
    color: rgb(147, 51, 234);
}
</style>
