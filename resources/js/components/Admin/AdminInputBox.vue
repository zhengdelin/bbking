<template>
  <div class="bg-white rounded-md border-gray-500 p-4">
    <div class="grid grid-cols-6 gap-4 items-center">
      <slot></slot>
      <div
        v-for="(col, key) in input_cols"
        :key="key"
        class="col-span-6 md:col-span-3"
        :class="getColSpan(key)"
      >
        <component
          v-model="data_source[col.model]"
          @change="valChangeFun(key)"
          :is="getComponent(key)"
          :title="getTitle(col.model, key)"
          :trim="getTrim(key)"
          :option_group="col.option_group ? col.option_group : []"
          :options="col.options ? col.options : []"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";

import InputTextVue from "../Objects/Input/InputText.vue";
import InputSingleCheckboxVue from "../Objects/Input/InputSingleCheckbox.vue";
import InputSelectVue from '../Objects/Input/InputSelect.vue';

import { useStore } from "vuex";
export default {
  components: {
    InputTextVue,
    InputSingleCheckboxVue,
    InputSelectVue,
  },
  props: {
    input_cols: {
      type: Array,
      default: () => [
        {
          //佔幾欄
          col_span: "col-span-2",
          component: "input-text-vue",
          trim: true,
          title: String,
          //綁定data_source的哪個data
          model: String,
          //呼叫valChangeFun的哪個function
          func_call: String,
          //呼叫valChangeFun的data
          func_datas: Array,
        },
      ],
    },
    data_source: {
      type: Object || Array,
      default: () => ({} || []),
    },
  },
  setup(props) {
    // console.log("adminInputBox->",props);
    const store = useStore();
    //title
    const title = {
      account: "帳號",
      password: "密碼",
      check_password: "再次確認密碼",
      email: "電子郵件",
      name: "名字",
      phone: "電話",
      address: "地址",
      active: "啟用",
      title: "標題",
      category: "類別",
    };
    //data
    const input_cols = computed(() => {
      // console.log(props.input_cols);
      return props.input_cols;
    });
    const data_source = computed(() => {
      return props.data_source;
    });
    //fucntion
    const getColSpan = (key) => {
      return props.input_cols[key]["col_span"]
        ? "lg:" + props.input_cols[key]["col_span"]
        : "lg:col-span-2";
    };
    const getComponent = (key) => {
      return props.input_cols[key]["component"]
        ? props.input_cols[key]["component"]
        : "input-text-vue";
    };
    const getTitle = (model, key) => {
      //key的title有值時就用key的title
      return props.input_cols[key]["title"]
        ? props.input_cols[key]["title"]
        : title[model];
    };
    const getTrim = (key) => {
      return props.input_cols[key]["trim"]
        ? props.input_cols[key]["trim"]
        : true;
    };
    const getParamDatas = (item) => {
      const obj = {};
      item.map((i) => {
        obj[i] = data_source.value[i];
      });
      return obj;
    };
    const valChangeFun = (key) => {
      const func_call = props.input_cols[key]["func_call"];
      // console.log(func_call);
      if (func_call) {
        const params = getParamDatas(props.input_cols[key]["func_datas"]);
        store.dispatch(func_call, params);
      }
      return;
    };
    return {
      input_cols,
      data_source,
      getTrim,
      getParamDatas,
      getColSpan,
      getComponent,
      getTitle,
      valChangeFun,
    };
  },
};
</script>

<style scoped>
</style>