<template>
  <!-- {{ category }} -->
  <title-item
    return_to_route_name="admin-categories"
    :title="type === 'category' ? '產品 - 新增類別' : '產品 - 新增類別群組'"
  ></title-item>
  <title-item :title="type === 'category' ? '類別' : '類別群組'">
    <template v-slot:button>
      <create-button-vue @click="handleCreateCategory"></create-button-vue>
    </template>
  </title-item>
  <admin-input-form-vue class="mb-2">
    <template v-slot:form_items>
      <div class="col-span-6 md:col-span-3">
        <input-text-vue
          :title="TITLE.name"
          :focus="true"
          :required="true"
          v-model="category.name"
          @change="dispatch('globalHandler/checkName', category.name)"
        ></input-text-vue>
      </div>
      <div class="col-span-6 md:col-span-3" v-if="type === 'category'">
        <input-text-vue
          :title="TITLE.eng_name"
          :required="true"
          v-model="category.eng_name"
          @change="dispatch('globalHandler/checkEngName', category.eng_name)"
        ></input-text-vue>
      </div>
      <div class="col-span-6 md:col-span-3" v-if="type === 'category'">
        <input-select-vue
          :required="true"
          :title="TITLE.category_group"
          :options="category_groups"
          v-model="category.category_group_id"
        ></input-select-vue>
      </div>
    </template>
  </admin-input-form-vue>
</template>

<script>
import CreateButtonVue from "../../../components/Objects/Button/CreateButton.vue";
import AdminInputFormVue from "../../../components/Admin/AdminInputForm.vue";
import InputTextVue from "../../../components/Objects/Input/InputText.vue";
import InputSelectVue from "../../../components/Objects/Input/InputSelect.vue";
import { TITLE } from "../../../TITLE";
import { useStore } from "vuex";
import { computed, ref } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import TitleItem from '../../../components/Objects/Title/TitleItem.vue';

export default {
  components: {
    CreateButtonVue,
    AdminInputFormVue,
    InputTextVue,
    InputSelectVue,
    TitleItem,
  },
  setup() {
    const { dispatch, state } = useStore();
    const router = useRouter();
    const route = useRoute();
    //type
    const type = computed(() =>
      route.params.type ? route.params.type : "category"
    );
    //類別
    const category_groups = computed(() => state.globalHandler.category_groups);
    //產品資訊
    const category = ref({
      name: "",
      eng_name:'',
      category_group_id: "",
    });
    //新增產品
    const handleCreateCategory = () => {
      // console.log("handleCreateProduct", product);
      dispatch("globalHandler/createCategory", {
        data: category.value,
        type: type.value,
      }).then(() => {
        if (state.status !== "error")
          router.push({
            name: "admin-categories",
            params: { update_category: true },
          });
      });
    };
    return {
      type,
      TITLE,
      category,
      category_groups,
      handleCreateCategory,
      dispatch,
    };
  },
};
</script>

<style scoped>
</style>