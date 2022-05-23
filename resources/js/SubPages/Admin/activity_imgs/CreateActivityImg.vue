<template>
    <!-- {{ activity_img }} -->
    <title-item
        return_to_route_name="admin-activity_imgs"
        title="活動圖片 - 新增活動圖片"
    ></title-item>
    <title-item title="活動圖片資訊">
        <template v-slot:button>
            <create-button-vue
                @click="handleCreateActivityImg"
            ></create-button-vue>
        </template>
    </title-item>
    <admin-input-form-vue class="mb-2">
        <template v-slot:form_items>
            <div class="col-span-6 md:col-span-3">
                <input-text
                    :focus="true"
                    title="網址"
                    v-model.trim="activity_img.url"
                ></input-text>
            </div>
            <div class="col-span-3">
                <input-file-vue
                    type="image"
                    accept="image/png,image/jpeg"
                    title="活動圖片"
                    @fileChange="fileChange"
                ></input-file-vue>
            </div>
            <div class="col-span-3">
                <input-single-checkbox
                    :required="true"
                    title="狀態"
                    v-model="activity_img.status"
                ></input-single-checkbox>
            </div>
        </template>
    </admin-input-form-vue>
</template>

<script>
import CreateButtonVue from "../../../components/Objects/Button/CreateButton.vue";
import AdminInputFormVue from "../../../components/Admin/AdminInputForm.vue";
import InputFileVue from "../../../components/Objects/Input/InputFile.vue";
import { useStore } from "vuex";
import { ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import TitleItem from "../../../components/Objects/Title/TitleItem.vue";
import InputSingleCheckbox from "../../../components/Objects/Input/InputSingleCheckbox.vue";
import InputText from "../../../components/Objects/Input/InputText.vue";

export default {
    components: {
        CreateButtonVue,
        AdminInputFormVue,
        InputFileVue,
        TitleItem,
        InputSingleCheckbox,
        InputText,
    },
    setup() {
        const { dispatch, state } = useStore();
        const router = useRouter();
        //產品資訊
        const activity_img = ref({
            url: "",
            status: true,
            image: "",
        });
        //新增產品
        const handleCreateActivityImg = () => {
            // console.log("handleCreateActivity_img", activity_img);
            dispatch(
                "globalHandler/createActivityImg",
                activity_img.value
            ).then(() => {
                if (state.status !== "error")
                    router.push({
                        name: "admin-activity_imgs",
                        params: { update_activity_img: true },
                    });
            });
        };
        //
        const fileChange = (file) => {
            activity_img.value.image = file;
            // console.log(file,activity_img);
        };
        return {
            activity_img,
            handleCreateActivityImg,
            fileChange,
            dispatch,
        };
    },
};
</script>

<style scoped></style>
