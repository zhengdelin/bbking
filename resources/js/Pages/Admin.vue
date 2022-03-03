<template>
  <div id="admin" class="flex static bg-gray-200">
    <admin-nav-vue class="hidden md:block"></admin-nav-vue>
    <div class="flex-1">
      <div class="pb-14">
        <admin-header-vue></admin-header-vue>
        <div class="px-3">
          <router-view v-slot="{ Component }">
            <template v-if="Component">
              <keep-alive>
                <suspense>
                  <template #default>
                    <component :is="Component"></component>
                  </template>
                  <template #fallback>
                    <loading-vue></loading-vue>
                  </template>
                </suspense>
              </keep-alive>
            </template>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import AdminNavVue from "../components/Admin/AdminNav.vue";
import AdminHeaderVue from "../components/Admin/AdminHeader.vue";
import LoadingVue from "../components/Globals/Loading.vue";
import { useRouter } from "vue-router";
export default {
  components: { AdminNavVue, AdminHeaderVue, LoadingVue },
  setup() {
    const router = useRouter();
    const current_routename = computed(() => {
      return router.currentRoute.value.name;
    });
    const to_keepalive = ["admin-members"];
    onMounted(() => {
      console.log("admin setup");
    });
    return { current_routename, to_keepalive };
  },
};
</script>           

<style>
#admin * {
  font-family: "MicrosoftJhengHei", sans-serif;
}
</style>