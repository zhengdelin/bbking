<template>
  <title-item
    return_to_route_name="admin-categories"
    title="類別 - 編輯類別"
  ></title-item>
  <title-item title="類別資訊">
    <template v-slot:button>
      <save-button @click="handleUpdateCategory"></save-button>
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
      <div class="col-span-6 md:col-span-3" v-if="category.eng_name">
        <input-text-vue
          :title="TITLE.eng_name"
          :required="true"
          v-model="category.eng_name"
          @change="dispatch('globalHandler/checkEngName', category.eng_name)"
        ></input-text-vue>
      </div>
      <div class="col-span-6 md:col-span-3" v-if="category.category_group_id">
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
import SaveButton from "../../../components/Objects/Button/SaveButton.vue";
import AdminInputFormVue from "../../../components/Admin/AdminInputForm.vue";
import InputTextVue from "../../../components/Objects/Input/InputText.vue";
import InputSelectVue from "../../../components/Objects/Input/InputSelect.vue";
import { TITLE } from "../../../TITLE";
import { useStore } from "vuex";
import { computed, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import TitleItem from "../../../components/Objects/Title/TitleItem.vue";

export default {
  components: {
    AdminInputFormVue,
    InputTextVue,
    InputSelectVue,
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
    const info = computed(() => props.info);
    if (!info.value) router.push({ name: "admin-categories" });
    //類別
    const category_groups = computed(() => state.globalHandler.category_groups);
    //類別資訊
    const category = ref();
    category.value = info.value ? JSON.parse(info.value) : {};
    //更新類別
    const handleUpdateCategory = () => {
      dispatch("globalHandler/updateCategory", {
        data: category.value,
        type: category.value.category_group_id ? "category" : "category_group",
      }).then(() => {
        if (state.status !== "error")
          router.push({
            name: "admin-categories",
            params: { update_category: true },
          });
      });
    };
    return {
      TITLE,
      category,
      category_groups,
      handleUpdateCategory,
      dispatch,
    };
  },
};
</script>

<style scoped>
</style>