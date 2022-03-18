<template>
  <title-item title="產品一覽">
    <template v-slot:button>
      <router-link :to="{ name: 'admin-products-create' }">
        <create-button-vue target_text="產品"></create-button-vue>
      </router-link>
    </template>
  </title-item>
  <admin-table-vue
    :column_heads="column_heads"
    :datas="products"
    :keys="keys"
    update_route_name="admin-products-update"
  >
    <template v-slot:other_tbody="{ data }">
      <td>
        <template v-if="data.image">
          <preview-button @click="toggleShowPreview(data.id)"></preview-button>
          <image-preview
            :id="data.id"
            :src="data.image"
            :toggleShow="toggleShowPreview"
            v-if="toggle[data.id]"
          ></image-preview>
        </template>
        <template v-else> -- </template>
      </td>
    </template>
  </admin-table-vue>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, watch } from "@vue/runtime-core";
import AdminTableVue from "../../../components/Admin/AdminTable.vue";
import CreateButtonVue from "../../../components/Objects/Button/CreateButton.vue";
import ImagePreview from "../../../components/Preview/ImagePreview.vue";
import PreviewButton from "../../../components/Objects/Button/PreviewButton.vue";
import TitleItem from '../../../components/Objects/TitleItem.vue';

export default {
  name: "AdminProducts",
  components: {
    AdminTableVue,
    CreateButtonVue,
    ImagePreview,
    PreviewButton,
    TitleItem,
  },
  async setup() {
    const route = useRoute();
    const { dispatch } = useStore();
    /* 取得資料 */
    const products = ref();
    const res = await dispatch("productHandler/getProducts");
    products.value = res;
    /* 標頭 */
    const column_heads = ["名稱", "描述", "價格", "類別", "圖片"];
    //key
    const keys = ["name", "description", "price", "category_name"];
    //監控更新article
    const update_product = computed(() => route.params.update_product);
    watch(update_product, async () => {
      if (update_product.value) {
        const res = await dispatch("productHandler/getProducts");
        products.value = res;
      }
    });
    //預覽圖片
    const toggle = reactive({});
    const toggleShowPreview = (id) => {
      Object.keys(toggle).includes(id.toString())
        ? (toggle[id] = !toggle[id])
        : (toggle[id] = true);
    };
    return {
      products,
      column_heads,
      keys,
      toggle,
      toggleShowPreview,
    };
  },
};
</script>

<style scoped>
</style>