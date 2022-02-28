<template>
  <table class="text-center table-auto bg-white border-gray-900">
    <thead>
      <tr class="divide-x divide-gray-100">
        <th v-for="head in heads" :key="head" class="py-1">
          {{ head }}
        </th>
        <th class="py-1">操作</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr
        v-for="data in datas"
        :key="data.id"
        class="divide-x divide-gray-200"
        :class="{ 'bg-gray-100': data.id % 2 == 1 }"
      >
        <td v-for="i in data" :key="i" class="py-2">
          {{ i ? i : "--" }}
        </td>
        <td class="w-40">
          <div class="flex scale-75">
            <router-link to="/" class="mr-3">
              <edit-button-vue></edit-button-vue>
            </router-link>
            <delete-button-vue></delete-button-vue>
          </div>
        </td>
      </tr>
    </tbody>
    <tfoot class=" border-t border-gray-200">
      <tr class="h-full">
        <td class="py-4 pl-2" colspan="4">
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              class="mx-1 rotate-180"
              :class="{
                ' hover:cursor-pointer': current_page !== 0,
                ' fill-gray-500': current_page === 0,
              }"
              @click="toFirstPage"
            >
              <path
                d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              class="mx-1 rotate-180"
              :class="{
                ' hover:cursor-pointer': current_page !== 0,
                ' fill-gray-500': current_page === 0,
              }"
              @click="toPreviosPage"
            >
              <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
            </svg>
            <select name="page" id="page" v-model="current_page" class=" appearance-none px-3 py-1 hover:cursor-pointer">
              <option v-for="page in total_pages" :key="page" :value="page - 1">
                {{ page }}
              </option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              class="mx-1"
              :class="{
                ' hover:cursor-pointer': current_page !== total_pages - 1,
                ' fill-gray-500': current_page === total_pages - 1,
              }"
              @click="toNextPage"
            >
              <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              class="mx-1"
              :class="{
                ' hover:cursor-pointer': current_page !== total_pages - 1,
                ' fill-gray-500': current_page === total_pages - 1,
              }"
              @click="toLastPage"
            >
              <path
                d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"
              />
            </svg>
          </div>
        </td>
        <td class="py-4" colspan="3">
          每頁顯示
          <select name="per" id="per" v-model="per">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          筆
        </td>
        <td class="py-4">共{{ total_pages }}頁</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import { computed, ref, watch } from "@vue/runtime-core";
import EditButtonVue from "../Button/EditButton.vue";
import DeleteButtonVue from "../Button/DeleteButton.vue";

export default {
  components: {
    EditButtonVue,
    DeleteButtonVue,
  },
  props: {
    column_heads: {
      type: Array,
      default: () => [],
    },
    datas: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    //表頭
    const heads = computed(() => {
      return props.column_heads;
    });
    //第幾頁,總共幾頁,一頁幾個
    const current_page = ref(0);
    const per = ref(10);
    const total_pages = computed(() => {
      return Math.ceil(props.datas.length / per.value);
    });
    //目前資料
    const datas = computed(() => {
      const start = 0 + current_page.value * per.value;
      const end = start + per.value;
      return props.datas.slice(start, end);
    });
    watch(per, () => {
      current_page.value =
        current_page.value >= total_pages.value
          ? total_pages.value - 1
          : current_page.value;
    });
    //function
    const toFirstPage = () => {
      current_page.value = 0;
    };
    const toPreviosPage = () => {
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
          : total_pages.value - 1;
    };

    return {
      heads,
      datas,
      current_page,
      total_pages,
      per,
      total_pages,
      toFirstPage,
      toPreviosPage,
      toLastPage,
      toNextPage,
    };
  },
};
</script>

<style scoped>
</style>