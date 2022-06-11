<template>
    <div class="w-full">
        <div class="admin_table overflow-x-auto">
            <table
                class="text-center table-auto bg-white border-gray-900 break-words w-full whitespace-nowrap"
            >
                <thead class="border-b border-gray-100">
                    <tr class="divide-x divide-gray-100">
                        <th class="py-2 px-3 w-6">#</th>
                        <TableHeader
                            :keys="keys"
                            :header_columns="header_columns"
                        />
                        <th class="py-2 px-3">操作</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr
                        v-for="(data, index) in datas"
                        :key="data.id"
                        class="divide-x divide-gray-200"
                        :class="{ 'bg-gray-100': data.id % 2 == 1 }"
                    >
                        <td class="py-2">{{ index + 1 }}</td>
                        <td
                            v-for="key in keys"
                            :key="getKey(key)"
                            class="\ py-2 px-1 overflow-hidden text-ellipsis whitespace-nowrap max-w-[15rem]"
                        >
                            <slot
                                name="column"
                                :data="data[getKey(key)]"
                                :dataKey="key"
                            >
                                <TableColumn
                                    :data="data[getKey(key)]"
                                    :data_type="getDataType(key)"
                                />
                            </slot>
                        </td>
                        <!-- slot將data傳出去供父元素調用 -->
                        <slot name="other_tbody" :data="data"></slot>
                        <slot name="action" :data="data">
                            <td class="w-20">
                                <div class="flex justify-center px-1">
                                    <router-link
                                        :to="{
                                            name: update_route_name,
                                            params: {
                                                info: JSON.stringify(data),
                                            },
                                        }"
                                        class="text-blue-500"
                                        v-if="update_route_name"
                                    >
                                        <svg-render-vue
                                            type="edit"
                                        ></svg-render-vue>
                                    </router-link>
                                    <!-- <div class="text-red-500">
                                        <svg-render-vue
                                            type="delete"
                                        ></svg-render-vue>
                                    </div> -->
                                </div>
                            </td>
                        </slot>
                    </tr>
                </tbody>
            </table>
        </div>
        <table-foot-vue
            :total_pages="total_pages"
            :current_page="current_page"
            :toFirstPage="toFirstPage"
            :toLastPage="toLastPage"
            :toNextPage="toNextPage"
            :toPreviousPage="toPreviousPage"
        >
            <template v-slot:page_control>
                <select
                    v-model="current_page"
                    class="appearance-none px-3 py-1 hover:cursor-pointer"
                >
                    <option
                        v-for="page in total_pages"
                        :key="page"
                        :value="page - 1"
                    >
                        {{ page }}
                    </option>
                </select>
            </template>
            <template v-slot:per_control>
                <select v-model="per">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </template>
        </table-foot-vue>
    </div>
</template>

<script>
import { computed, ref, watch } from "@vue/runtime-core";
import TableFootVue from "./Table/TableFoot.vue";
import { TITLE } from "../../TITLE";
import ImagePreview from "../Global/ImagePreview.vue";
import TableColumn from "./Table/TableColumn.vue";
import TableHeader from "./Table/TableHeader.vue";

export default {
    components: {
        TableFootVue,
        ImagePreview,
        TableColumn,
        TableHeader,
    },
    props: {
        column_heads: {
            type: Array,
            default: () => [],
        },
        datas: {
            type: Object,
            default: () => ({}),
        },
        keys: {
            type: Array,
            default: () => [],
        },
        update_route_name: {
            type: String,
            default: "",
        },
    },
    setup(props) {
        //表頭//鍵值順序//編輯的route
        const { column_heads: header_columns, keys, update_route_name } = props;
        //資料
        const rawData = computed(() => props.datas);
        const type = computed(() =>
            Object.prototype.toString.call(rawData.value)
        );
        const realData = computed(() =>
            type.value === "[object Object]"
                ? Object.values(rawData.value)
                : rawData.value
        );
        //第幾頁,總共幾頁,一頁幾個
        const current_page = ref(0);
        const per = ref(10);
        const total_pages = computed(() => {
            return Math.ceil(realData.value.length / per.value);
        });

        //目前資料
        const datas = computed(() => {
            const start = 0 + current_page.value * per.value;
            const end = start + per.value;
            return realData.value.slice(start, end);
        });
        watch(per, () => {
            current_page.value =
                current_page.value >= total_pages.value
                    ? total_pages.value - 1
                    : current_page.value;
        });
        /* 頁數控制 */
        const toFirstPage = () => {
            current_page.value = 0;
        };
        const toPreviousPage = () => {
            current_page.value =
                current_page.value === 0 ? 0 : current_page.value - 1;
        };
        const toLastPage = () => {
            current_page.value = total_pages.value - 1;
        };
        const toNextPage = () => {
            current_page.value =
                current_page.value === total_pages.value - 1
                    ? current_page.value
                    : current_page.value + 1;
        };
        /*  */
        const td_max_width = computed(() => {
            const width = Math.floor(60 / keys.value.length);
            return ` max-w-[${width}rem]`;
        });

        /* 取得key */
        const getKey = (key) => {
            return typeof key === "object" ? key.name : key;
        };
        /* 取得data type */
        const getDataType = (key) => {
            return key.type || "string";
        };
        // console.log("admintable", props.datas);
        return {
            TITLE,
            header_columns,
            keys,
            datas,
            current_page,
            total_pages,
            per,
            toFirstPage,
            toPreviousPage,
            toLastPage,
            toNextPage,
            update_route_name,
            td_max_width,
            getKey,
            getDataType,
        };
    },
};
</script>

<style scoped>
.admin_table::-webkit-scrollbar {
    display: block;
    height: 0.5rem;
}
.admin_table::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 10px;
}
.admin_table:hover::-webkit-scrollbar-thumb {
    background-color: rgb(89, 52, 255);
}
.admin_table::-webkit-scrollbar-track {
    background-color: #e5e7eb;
    border-radius: 10px;
}
</style>
