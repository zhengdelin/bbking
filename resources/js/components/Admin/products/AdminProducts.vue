<template>
  <div class="flex flex-col">
    <admin-title-vue title="文章一覽">
      <template v-slot:button>
        <router-link :to="{ name: 'admin-articles-create' }">
          <create-button-vue target_text="會員"></create-button-vue>
        </router-link>
      </template>
    </admin-title-vue>
    <!-- <admin-form-vue
      :column_heads="column_heads"
      :datas="all_user_info"
      :keys="keys"
    >
    </admin-form-vue> -->
  </div>
</template>

<script>
import AdminFormVue from "../../Objects/Admin/AdminForm.vue";
import AdminTitleVue from "../../Objects/Admin/AdminTitle.vue";
import CreateButtonVue from '../../Objects/Button/CreateButton.vue';

export default {
  components: { AdminTitleVue, AdminFormVue,CreateButtonVue },
};
</script>

<style scoped>
</style>