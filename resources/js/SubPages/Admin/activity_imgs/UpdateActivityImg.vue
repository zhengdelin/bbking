<template>
    <title-item
        return_to_route_name="admin-activity_imgs"
        title="活動圖片 - 編輯活動圖片"
    ></title-item>
    <title-item title="活動圖片資訊">
        <template v-slot:button>
            <save-button @click="handleUpdateActivityImg"></save-button>
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
            <div class="col-span-6 md:col-span-3">
                <input-file
                    type="image"
                    accept="image/png,image/jpeg"
                    :image_src="activity_img.image"
                    title="活動圖片"
                    @fileChange="fileChange"
                ></input-file>
            </div>
            <div class="col-span-6 md:col-span-3">
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
import SaveButton from "../../../components/Objects/Button/SaveButton.vue";
import AdminInputFormVue from "../../../components/Admin/AdminInputForm.vue";
import { useStore } from "vuex";
import { computed, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import TitleItem from "../../../components/Objects/Title/TitleItem.vue";
import InputFile from "../../../components/Objects/Input/InputFile.vue";
import InputSingleCheckbox from "../../../components/Objects/Input/InputSingleCheckbox.vue";
import InputText from '../../../components/Objects/Input/InputText.vue';

export default {
    components: {
        AdminInputFormVue,
        SaveButton,
        TitleItem,
        InputFile,
        InputSingleCheckbox,
        InputText,
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
        if (!info.value) router.push({ name: "admin-activity_imgs" });
        //活動圖片資訊
        const activity_img = ref();
        activity_img.value = info.value ? JSON.parse(info.value) : {};
        activity_img.value.old_image = activity_img.value.image;
        //更新類別
        const handleUpdateActivityImg = () => {
            dispatch("globalHandler/updateActivityImg",activity_img.value).then(() => {
                if (state.status !== "error")
                    router.push({
                        name: "admin-activity_imgs",
                        params: { update_activity_img: true },
                    });
            });
        };
        const fileChange = (file) => {
            activity_img.value.image = file;
            // console.log(file,activity_img);
        };
        return {
            activity_img,
            handleUpdateActivityImg,
            fileChange,
        };
    },
};
</script>

<style scoped></style>
