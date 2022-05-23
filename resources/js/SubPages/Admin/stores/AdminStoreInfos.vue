<template>
    <title-item title="店家資訊">
        <template v-slot:button>
            <router-link :to="{ name: 'admin-store_info-create' }">
                <create-button-vue target_text="店家資訊"></create-button-vue>
            </router-link>
        </template>
    </title-item>
    <admin-table-vue
        :datas="store_infos"
        :keys="keys"
        update_route_name="admin-store_info-update"
        class="mb-5"
    >
    </admin-table-vue>
</template>

<script>
import { computed, ref, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import CreateButtonVue from "../../../components/Objects/Button/CreateButton.vue";
import AdminTableVue from "../../../components/Admin/AdminTable.vue";
import { useRoute } from "vue-router";
import TitleItem from "../../../components/Objects/Title/TitleItem.vue";
import ImagePreview from "../../../components/Global/ImagePreview.vue";

export default {
    name: "AdminCategories",
    components: {
        AdminTableVue,
        CreateButtonVue,
        TitleItem,
        ImagePreview,
    },
    async setup() {
        const route = useRoute();
        const { dispatch } = useStore();
        const keys = [
            "name",
            "eng_name",
            "url",
            "address",
            "phone",
            "email",
            "business_hours",
            "description",
            { name: "logo", type: "image" },
            { name: "isHeadquarter", type: "boolean" },
            { name: "status", type: "boolean" },
        ];
        const store_infos = ref();
        /* 取得資料 */
        const getStoreInfos = async () => {
            store_infos.value = await dispatch(
                "globalHandler/getAllStoreInfos"
            );
        };
        await getStoreInfos();
        /* 監控更新 */
        const update_store_info = computed(
            () => route.params.update_store_info
        );
        watch(update_store_info, async () => {
            if (update_store_info.value) {
                await getStoreInfos();
            }
        });

        return {
            store_infos,
            keys,
        };
    },
};
</script>

<style scoped></style>
