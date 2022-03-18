<template>
  <title-item
    return_to_route_name="admin-products"
    title="產品 - 新增產品"
  ></title-item>
  <admin-title-vue title="產品資訊">
    <template v-slot:button>
      <create-button-vue @click="handleCreateProduct"></create-button-vue>
    </template>
  </admin-title-vue>
  <admin-input-form-vue class="mb-2">
    <template v-slot:form_items>
      <div
        class="col-span-6 md:col-span-3"
        v-for="col in input_cols"
        :key="col.model"
      >
        <input-text-vue
          :title="TITLE[col.model]"
          :isNumber="col.isNumber"
          :focus="col.focus"
          :required="col.required"
          v-model="product[col.model]"
          @change="
            col.func_call ? dispatch(col.func_call, product[col.model]) : null
          "
        ></input-text-vue>
      </div>
      <div class="col-span-6 md:col-span-3">
        <input-select-vue
          :required="true"
          :title="TITLE.category"
          :option_group="categories"
          v-model="product.category_id"
          valChangeFun="globalHandler/checkCategory"
        ></input-select-vue>
      </div>
      <div class="col-span-6 md:col-span-3">
        <input-file-vue
          type="image"
          accept="image/png,image/jpeg"
          :title="TITLE.image"
          @fileChange="fileChange"
        ></input-file-vue>
      </div>
    </template>
  </admin-input-form-vue>
</template>

<script>
import CreateButtonVue from "../../../components/Objects/Button/CreateButton.vue";
import AdminInputFormVue from "../../../components/Admin/AdminInputForm.vue";
import InputTextVue from "../../../components/Objects/Input/InputText.vue";
import InputSelectVue from "../../../components/Objects/Input/InputSelect.vue";
import InputFileVue from "../../../components/Objects/Input/InputFile.vue";
import { TITLE } from "../../../TITLE";
import { useStore } from "vuex";
import { computed, reactive, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import TitleItem from "../../../components/Objects/TitleItem.vue";

export default {
  components: {
    CreateButtonVue,
    AdminInputFormVue,
    InputTextVue,
    InputSelectVue,
    InputFileVue,
    TitleItem,
  },
  setup() {
    const { dispatch, state } = useStore();
    const router = useRouter();
    //類別
    const categories = computed(() => state.globalHandler.categories);
    //產品資訊
    const product = ref({
      name: "",
      description: "",
      price: "",
      category_id: "",
      image: "",
    });
    //欄位
    const input_cols = reactive([
      {
        model: "name",
        focus: true,
        required: true,
        func_call: "productHandler/checkName",
      },
      {
        model: "price",
        required: true,
        isNumber: true,
        func_call: "productHandler/checkPrice",
      },
      {
        model: "description",
        func_call: "productHandler/checkDescription",
      },
    ]);
    //新增產品
    const handleCreateProduct = () => {
      // console.log("handleCreateProduct", product);
      dispatch("productHandler/createProduct", product.value).then(() => {
        if (state.status !== "error")
          router.push({
            name: "admin-products",
            params: { update_product: true },
          });
      });
    };
    //
    const fileChange = (file) => {
      product.value.image = file;
      // console.log(file,product);
    };
    return {
      TITLE,
      product,
      categories,
      input_cols,
      handleCreateProduct,
      fileChange,
      dispatch,
    };
  },
};
</script>

<style scoped>
</style>