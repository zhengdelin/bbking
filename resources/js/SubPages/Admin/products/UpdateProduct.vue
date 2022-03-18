<template>
  <title-item
    return_to_route_name="admin-products"
    title="產品 - 編輯產品"
  ></title-item>
  <admin-title-vue title="產品資訊">
    <template v-slot:button>
      <save-button @click="handleUpdateProduct"></save-button>
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
          :image_src="image_src"
          @fileChange="fileChange"
        ></input-file-vue>
      </div>
    </template>
  </admin-input-form-vue>
</template>

<script>
import SaveButton from '../../../components/Objects/Button/SaveButton.vue';
import AdminInputFormVue from "../../../components/Admin/AdminInputForm.vue";
import InputTextVue from "../../../components/Objects/Input/InputText.vue";
import InputSelectVue from "../../../components/Objects/Input/InputSelect.vue";
import InputFileVue from "../../../components/Objects/Input/InputFile.vue";
import TitleItem from '../../../components/Objects/TitleItem.vue';
import { TITLE } from "../../../TITLE";
import { useStore } from "vuex";
import { computed, onMounted, reactive, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";

export default {
  components: {
    AdminInputFormVue,
    InputTextVue,
    InputSelectVue,
    InputFileVue,
    SaveButton,
    TitleItem,
  },
  props: {
    info: {
      type: String,
      default: () => {},
    },
  },
  setup(props) {
    const { dispatch, state } = useStore();
    const router = useRouter();
    /* 如果沒東西跳轉回去 */
    const info = computed(()=>props.info);
    if (!info.value) router.push({ name: "admin-products" });
    //類別
    const categories = computed(() => state.globalHandler.categories);
    //產品資訊
    const product = ref();
    product.value = info.value ? JSON.parse(info.value) : {}
    //圖片
    const image_src = product.value.image;
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
      },
      {
        model: "description",
        func_call: "productHandler/checkDescription",
      },
    ]);
    //更新產品
    const handleUpdateProduct = () => {
    //   console.log("handleUpdateProduct", product);
      dispatch("productHandler/updateProduct", product.value).then(() => {
        if (state.status !== "error")
          router.push({
            name: "admin-products",
            params: { update_product: true },
          });
      });
    };
    //file更改時，接受input file的物件
    const fileChange = (file) => {
      product.value.image = file;
      // console.log(file,product);
    };
    return {
      TITLE,
      product,
      categories,
      image_src,
      input_cols,
      handleUpdateProduct,
      fileChange,
      dispatch,
    };
  },
};
</script>

<style scoped>
</style>