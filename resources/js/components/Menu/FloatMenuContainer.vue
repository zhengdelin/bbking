<template>
    <div
        class="min-w-[6rem] absolute bg-zinc-900 p-2 pr-[11px] rounded flex flex-col items-start duration-500 text-white"
        :style="getPosition"
        ref="float_menuDOM"
    >
        <router-link
            v-for="list in lists"
            :key="list.text"
            :to="getRouterObj(list)"
            class="hover:bg-indigo-700 w-full"
        >
            {{ list.text }}
        </router-link>
    </div>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
export default {
    props: {
        lists: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        const float_menuDOM = ref();
        //list
        const lists = computed(() => props.lists);
        //route
        const getRouterObj = (list) => {
            // console.log('list',list,list["route_name"]
            //     ? { name: list["route_name"] }
            //     : list["url_path"]
            //     ? { path: list["url_path"] }
            //     : "");
            return list["route_name"]
                ? { name: list["route_name"] }
                : list["url_path"]
                ? { path: list["url_path"] }
                : "";
        };
        const float_menu_width = computed(() =>
            float_menuDOM.value ? float_menuDOM.value.clientWidth : ""
        );
        // console.log(object);
        //相對位置
        const getPosition = computed(() => {
            return {
                top: "11px",
                right: `-${float_menu_width.value}px`,
            };
        });
        onMounted(() => console.log());
        return { float_menuDOM, lists, getPosition, getRouterObj };
    },
};
</script>

<style scoped></style>
