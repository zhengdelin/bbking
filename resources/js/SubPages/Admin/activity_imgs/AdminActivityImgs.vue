<template>
    <title-item title="活動圖片">
        <template v-slot:button>
            <router-link :to="{ name: 'admin-activity_imgs-create' }">
                <create-button-vue target_text="活動圖片"></create-button-vue>
            </router-link>
        </template>
    </title-item>
    <admin-table-vue
        :datas="activity_imgs"
        :keys="keys"
        update_route_name="admin-activity_imgs-update"
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
            { name: "image", type: "image" },
            "url",
            { name: "status", type: "boolean" },
        ];
        const activity_imgs = ref();
        /* 取得所有活動圖片 */
        const getAllActivityImgs = async () => {
            activity_imgs.value = await dispatch(
                "globalHandler/getAllActivityImgs"
            );
        };
        await getAllActivityImgs();
        // console.log(activity_imgs.value);
        /* 監控更新 */
        const update_activity_img = computed(
            () => route.params.update_activity_img
        );
        watch(update_activity_img, async () => {
            if (update_activity_img.value) {
                getAllActivityImgs();
            }
        });

        return {
            activity_imgs,
            keys,
        };
    },
};
</script>

<style scoped></style>
